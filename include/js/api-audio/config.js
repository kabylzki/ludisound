window.onload = initApiAudio();

function initApiAudio()
{
    //API loading
    var contextClass = (window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.oAudioContext ||
            window.msAudioContext);

    if (contextClass)
    {
        // Web Audio API is available.
        var context = new contextClass();
        var bufferLoader;
    }
    else
    {
        alert('API audio non supportée par le navigateur');
    }

    //Mettre tous les fichiers dans un tableau, passé en deuxième paramètre
    bufferLoader = new BufferLoader(context, ['include/audio/music-drunk2.mp3'], finishedLoading);
    bufferLoader.load();
}

//Convolve 
var impulseResponseBuffer = null;
function loadImpulseResponse() {
    loadBuffer('include/audio/music-drunk2.mp3', function (buffer) {
        impulseResponseBuffer = buffer;
    });
}

var startOffset = 0;
var startTime = 0;
function pause(source) {
    source.stop();
    // Measure how much time passed since the last pause.
    startOffset += context.currentTime - startTime;
}

/*
 callback function when the buffer is pre-loaded
 */
function finishedLoading(bufferList) {
    var sourceDrum = context.createBufferSource();
    sourceDrum.buffer = bufferList[0]; //sounds here
    sourceDrum.loop = true;

/*
    var sourceHeart = context.createBufferSource();
    sourceHeart.buffer = bufferList[1];
    sourceHeart.loop = true; */

    //Declare effects
    var compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.reduction.value = -20;
    compressor.attack.value = 1;
    compressor.release.value = 0.25;

    var gainNode = context.createGain();
    var convolver = context.createConvolver()
    var filter = context.createBiquadFilter();
    filter.frequency.value = 1500.0;
    filter.type = filter.LOWPASS;
    // Set the impulse response buffer.
    convolver.buffer = impulseResponseBuffer;

    sourceDrum.connect(filter);
    //gainNode.gain.value = 1; //augmente le volume

    //get context time
    //context.currentTime
    filter.connect(gainNode);
    gainNode.connect(context.destination); //On peut combiner les effets

    //sourceHeart.connect(compressor);
    compressor.connect(context.destination);

    //Donne un son filtré et son volume a été augmenté
    sourceDrum.start(0);

    //sourceHeart.start(0);
}

