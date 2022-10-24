import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playedTime === null ? 0 : playedTime);

player.on('timeupdate', throttle(updatePlayedTime, 1000));

function updatePlayedTime({ seconds }) {
  // console.log('played the video!' + seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
}
