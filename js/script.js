var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  console.log("La API de YouTube está lista.");
  player = new YT.Player('player', {
    videoId: 'jZkNp57Ddvw', // Aquí es donde pones el ID del video
    playerVars: {
      'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
      window.location.href = detectarSO();
  }
}

function detectarSO() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Si es Android, redirige a Google Play
  if (/android/i.test(userAgent)) {
      return 'https://play.google.com/store/apps/details?id=com.workon';
  }

  // Si es iOS, redirige a App Store
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'https://apps.apple.com/ar/app/workon/id1519527765';
  }

  // Si no es ninguno de los anteriores, redirige a la página original
  return 'https://workon.global/';
}
