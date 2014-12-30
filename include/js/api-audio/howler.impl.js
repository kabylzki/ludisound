var soundDrunk = new Howl({
  urls: ['include/audio/music-drunk.mp3'],
  loop: true,
  volume: 0.4,
  onplay : function() {
      soundDrunk.fade(0,0.4,12000);
  }
});

var soundAlcoolFound = new Howl({
  urls: ['include/audio/alcool1.mp3', 'include/audio/alcool2.mp3'],
  volume: 0.5
});

var soundBackgroundAmbient = new Howl({
  urls: ['include/audio/background_ambient.mp3'],
  loop: true,
  rate: 1.0,
  volume: 0.7
});