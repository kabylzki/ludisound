var CrossfadeSample = function () {
    loadSounds(this, {
        ambient: 'include/audio/background_ambient.mp3',
        drunk: 'include/audio/music-drunk.mp3'
    });
    this.isPlaying = false;
    this.isFiltering = false;
};

CrossfadeSample.prototype.play = function () {
    // Create two sources.
    this.ctl1 = createSource(this.ambient);
    this.ctl2 = createSource(this.drunk);
    // Mute the second source.
    this.ctl1.gainNode.gain.value = 0;
    // Start playback in a loop
    var onName = this.ctl1.source.start ? 'start' : 'noteOn';
    this.ctl1.source[onName](0);
    this.ctl2.source[onName](0);
    // Set the initial crossfade to be just source 1.
    this.isFiltering = true;

    if(this.isFiltering === false)
        this.ctl1.filter.frequency.value = 10000;

    this.crossfade(0);

    function createSource(buffer) {
        var source = context.createBufferSource();
        var gainNode = context.createGain();
         var filter = context.createBiquadFilter();
          filter.type = filter.LOWPASS;
          filter.frequency.value = 600;
        source.buffer = buffer;
        // Turn on looping
        source.loop = true;
        // Connect source to gain.
        source.connect(gainNode);
        // Connect gain to destination.
        gainNode.connect(filter);
        filter.connect(context.destination);

        return {
            source: source,
            gainNode: gainNode,
            filter : filter
        };
    }
};

CrossfadeSample.prototype.stop = function () {
    var offName = this.ctl1.source.stop ? 'stop' : 'noteOff';
    this.ctl1.source[offName](0);
    this.ctl2.source[offName](0);
};

// Fades between 0 (all source 1) and 1 (all source 2)
CrossfadeSample.prototype.crossfade = function (element) {

    if (element === 0) {
        var x = parseInt(0) / parseInt(100);
    } else {
        var x = parseInt(element.value) / parseInt(100);
    }
    // Use an equal-power crossfading curve:
    var gain1 = Math.cos(x * 0.5 * Math.PI);
    var gain2 = Math.cos((1.0 - x) * 0.5 * Math.PI);
    this.ctl1.gainNode.gain.value = gain1;
    this.ctl2.gainNode.gain.value = gain2;
};

CrossfadeSample.prototype.toggle = function () {
    this.isPlaying ? this.stop() : this.play();
    this.isPlaying = !this.isPlaying;
    this.isFiltering = !this.isFiltering;
};
