// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('video', { hideControls: false, captions: { active: true } });
player.toggleControls(false);

player.on('play', event => {
  player.toggleControls(true);
});

// Expose player so it can be used from the console
window.player = player;