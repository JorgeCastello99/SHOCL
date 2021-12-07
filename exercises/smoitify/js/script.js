import { playList } from './alumnos.js';

$(function() {
   Audio.init();
});

var intval;
var autoplay;
const Audio = {
   init: function() {
      this.preload.init();
      this.info.init();
      this.player();
      this.scrollbar();
   },
   formatTime: function(secs) {
      var hr, min, sec;
      hr = Math.floor(secs / 3600);
      min = Math.floor((secs - hr * 3600) / 60);
      sec = Math.floor(secs - hr * 3600 - min * 60);

      min = min > 9 ? min : '0' + min;
      sec = sec > 9 ? sec : '0' + sec;
      return min + ':' + sec;
   },

   preload: {
      init: function() {
         if (playList.constructor.name === 'PlayList') {
            if (playList.songs.length === 0 || playList.songs.length === undefined) {
               console.warn('La lista de canciones está vacía o no funciona 💩. ¿Hay algún atributo songs?');
               console.warn(playList);
            } else {
               console.log('Número de elementos ' + playList.songs.length);
               playList.songs.forEach(song => {
                  if (song.constructor.name === 'Song') {
                     if (
                        'id' in song &&
                        'album' in song &&
                        'artist' in song &&
                        'title' in song &&
                        'art' in song &&
                        'url' in song
                     ) {
                        console.log('Datos de canción válidos');

                        $('.play-list').append(`<a href="#"
                        class="play"
                        data-id="${song.id}"
                        data-album="${song.album}"
                        data-artist="${song.artist}"
                        data-title="${song.title}"
                        data-albumart="${song.art}"
                        data-url="${song.url}"
                        data-hash="${song.hash || 'Sin hash'}"
                        </a>`);
                     } else {
                        console.log(
                           'Datos inválidos en la canción. ¿Faltará algún atributo? (no mires el código fuente ¬_¬)'
                        );
                        console.error(song);
                     }
                  } else {
                     console.error('Error en el el formato de las canciones' + song.constructor.name);
                  }
               });
            }

            if ('info' in playList) {
               console.log('Información de la playlist: ' + playList.info);
            }
         } else {
            console.error('No se ha encontrado un objeto de tipo PlayList');
         }
      }
   },

   info: {
      init: function() {
         $('.play-list .play').each(function() {
            var album, albumart, hash, artist, title;
            album = $(this).data('album');
            albumart = $(this).data('albumart');
            hash = $(this).data('hash');
            artist = $(this).data('artist');
            title = $(this).data('title');

            album = album ? '<span class="album">' + album + '</span>' : 'Unknown Album';
            albumart = albumart ? '<img src="' + albumart + '">' : '';
            artist = artist ? '<span class="song-artist">' + artist + '</span>' : 'Unknown Artist';
            title = title ? '<div class="song-title">' + title + '</div>' : 'Unknown Title';
            hash = title ? '<div class="song-hash">' + hash + '</div>' : 'Sin hash';

            $(this).html(
               '<div class="album-thumb pull-left">' +
                  albumart +
                  '</div><div class="songs-info pull-left">' +
                  title +
                  '<div class="songs-detail">' +
                  artist +
                  ' - ' +
                  album +
                  `(${hash})` +
                  '</div></div></div>'
            );
         });
      },
      load: function(id, album, artist, title, albumart, mp3) {
         var currentTrack, totalTrack;
         totalTrack = $('.play-list>a').length;
         currentTrack = $('.play-list a').index($('.play-list .active')) + 1;
         $('.play-position').text(currentTrack + ' / ' + totalTrack);
         albumart = albumart ? '<img src="' + albumart + '">' : '';
         album = album || 'Unknown Album';
         title = title || 'Unknown Title';
         artist = artist || 'Unknown Artist';
         $('.album-art').html(albumart);
         $('.current-info .song-album').html('<i class="fa fa-music"></i> ' + album);
         $('.current-info .song-title').html('<i class="fa fa-headphones"></i> ' + title);
         $('.current-info .song-artist').html('<i class="fa fa-user"></i> ' + artist);
         if (mp3) {
            $('.audio').html('<audio class="music" data-id="' + id + '" src="' + mp3 + '"></audio>');
         }
      }
   },
   player: function() {
      var id, album, artist, albumart, title, mp3;
      $('.play-list .play').each(function() {
         $(this).on('click', function(e) {
            e.preventDefault();
            $(this)
               .siblings()
               .removeClass('active');
            $(this).addClass('active');
            clearInterval(intval);
            id = $(this).data('id');
            album = $(this).data('album');
            artist = $(this).data('artist');
            albumart = $(this).data('albumart');
            title = $(this).data('title');
            mp3 = $(this).data('url');
            Audio.info.load(id, album, artist, title, albumart, mp3);
            Audio.play($('.music'));
            $('.music').prop('volume', $('.volume').val());
            Audio.playlist.hide();
         });
      });
      $('.play-pause').on('click', function(e) {
         e.preventDefault();
         if ($('.audio').is(':empty')) {
            $('.play-list a:first-child').click();
         } else {
            var music = $('.music')[0];
            if (music.paused) {
               setInterval(intval);
               Audio.play($('.music'));
               $(this).addClass('active');
            } else {
               clearInterval(intval);
               Audio.pause($('.music'));
               $(this).removeClass('active');
            }
         }
      });

      $('.stop').on('click', function(e) {
         e.preventDefault();
         clearInterval(intval);
         Audio.stop($('.music'));
         $('.music')[0].currentTime = 0;
         $('.progress .bar').css('width', 0);
      });
      $('.volume').on('change', function() {
         var vol, css;
         vol = $(this).val();
         $(this).attr('data-css', vol);
         $('.music').prop('volume', vol);
      });
      $('.prev').on('click', function(e) {
         var index, firstIndex;
         e.preventDefault();
         index = $('.play-list a').length - $('.play-list a').index();
         firstIndex = $('.play-list a').length - $('.play-list a').index($('.play-list a.active'));
         if (index == firstIndex) {
            $('.play-list a:last-child').click();
         } else {
            Audio.prev();
         }
      });
      $('.next').on('click', function(e) {
         var index, lastIndex;
         e.preventDefault();
         index = $('.play-list a').length;
         lastIndex = $('.play-list a').index($('.play-list a.active')) + 1;
         if (index == lastIndex) {
            $('.play-list a:first-child').click();
         } else {
            Audio.next();
         }
      });
      $('.toggle-play-list').on('click', function(e) {
         e.preventDefault();
         var toggle = $(this);
         if (toggle.hasClass('active')) {
            Audio.playlist.hide();
         } else {
            Audio.playlist.show();
         }
      });
   },
   playlist: {
      show: function() {
         $('.play-list').fadeIn(500);
         $('.toggle-play-list').addClass('active');
         $('.album-art').addClass('blur');
      },
      hide: function() {
         $('.play-list').fadeOut(500);
         $('.toggle-play-list').removeClass('active');
         $('.album-art').removeClass('blur');
      }
   },
   play: function(e) {
      var bar, current, total;
      e.trigger('play').bind('ended', function() {
         $('.next').click();
      });
      intval = setInterval(function() {
         current = e[0].currentTime;
         $('.play-current-time').text(Audio.formatTime(current));

         bar = (current / e[0].duration) * 100;
         $('.progress .bar').css('width', bar + '%');
      }, 1000);

      var totalDur = setInterval(function(t) {
         if ($('.audio .music')[0].readyState > 0) {
            total = e[0].duration;
            $('.play-total-time').text(Audio.formatTime(total));
            clearInterval(totalDur);
         }
      }, 1000);
      $('.play-pause').addClass('active');
   },
   pause: function(e) {
      e.trigger('pause');
      $('.play-pause').removeClass('active');
   },
   stop: function(e) {
      e.trigger('pause').prop('currentTime', 0);
      $('.play-pause').removeClass('active');
   },
   mute: function(e) {
      prop('muted', !e.prop('muted'));
   },
   volumeUp: function(e) {
      var volume = e.prop('volume') + 0.2;
      if (volume > 1) {
         volume = 1;
      }
      e.prop('volume', volume);
   },
   volumeDown: function(e) {
      var volume = e.prop('volume') - 0.2;
      if (volume < 0) {
         volume = 0;
      }
      e.prop('volume', volume);
   },
   prev: function() {
      var curr = $('.music').data('id');
      var prev = $('a[data-id="' + curr + '"]').prev();
      if (curr && prev) {
         prev.click();
      }
   },
   next: function() {
      var curr = $('.music').data('id');
      var next = $('a[data-id="' + curr + '"]').next();
      if (curr && next) {
         next.click();
      }
   },
   scrollbar: function() {
      if (typeof $.fn.enscroll !== 'undefined') {
         $('.play-list').enscroll({
            showOnHover: true,
            verticalTrackClass: 'track',
            verticalHandleClass: 'handle'
         });
      }
   }
};
