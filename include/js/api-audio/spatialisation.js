// Draws a canvas and tracks mouse click/drags on the canvas.
function Field(canvas) {
    this.ANGLE_STEP = 0.2;
    this.canvas = canvas;
    this.isMouseInside = false;
    this.center = {x: canvas.width / 2, y: canvas.height / 2};
    this.angle = 0;
    this.point = null;

    var obj = this;
    // Setup keyboard listener
    window.addEventListener('keydown', function () {
        if (tabDoll.length > 0) {
            this.isMouseInside = true;
            obj.handleKeyDown.apply(obj, arguments);
        }
    });
}

Field.prototype.handleKeyDown = function (e) {
    oneX = heroInfo.posX;
    oneY = heroInfo.posY;

    oneXDoll = tabDoll[0].posX * 16;
    oneYDoll = tabDoll[0].posY * 16;

    if (this.callbackListener) {
        // Callback in coordinate system centered at canvas center.
        this.callbackListener({x: oneX - this.center.x,
            y: oneY - this.center.y});
    }


    if (this.callback) {
        // Callback in coordinate system centered at canvas center.
        this.callback({x: oneXDoll - this.center.x,
            y: oneYDoll - this.center.y});
    }
};

Field.prototype.registerPointChanged = function (callback) {
    this.callback = callback;
};

Field.prototype.registerPointChangedListener = function (callback) {
    this.callbackListener = callback;
};

Field.prototype.registerAngleChanged = function (callback) {
    this.angleCallback = callback;
};

// Super version: http://chromium.googlecode.com/svn/trunk/samples/audio/simple.html

function SpatializedSample(el) {
    var sample = this;
    this.isPlaying = false;
    this.size = {width: 1073, height: 557};

    // Load the sample to pan around.
    loadSounds(this, {
        buffer: 'include/audio/doll-noise.mp3'
    });

    // Create a new canvas element.
    var canvas = document.getElementById("view");

    // Create a new Area.
    field = new Field(canvas);

    field.registerPointChanged(function () {
        sample.changePosition.apply(sample, arguments);
    });
    field.registerPointChangedListener(function () {
        sample.changePositionListener.apply(sample, arguments);
    });
}

SpatializedSample.prototype.play = function () {
    // Hook up the audio graph for this sample.
    var source = context.createBufferSource();
    source.buffer = this.buffer;
    source.loop = true;
    var panner = context.createPanner();
    panner.coneOuterGain = 0.1;
    panner.coneOuterAngle = 0;
    panner.coneInnerAngle = 360;
    // Set the panner node to be at the origin looking in the +x
    // direction.

    panner.connect(context.destination);
    source.connect(panner);
    source[source.start ? 'start' : 'noteOn'](0);
    // Position the listener at the origin.
    context.listener.setPosition(0, 0, 0);
    foo = panner;

    // Expose parts of the audio graph to other functions.
    this.source = source;
    this.panner = panner;
    this.context = context;
    this.isPlaying = true;
}

SpatializedSample.prototype.stop = function () {
    this.source[this.source.stop ? 'stop' : 'noteOff'](0);
    this.isPlaying = false;
}

SpatializedSample.prototype.changePosition = function (position) {
    // Position coordinates are in normalized canvas coordinates
    // with -0.5 < x, y < 0.5
    if (position) {
        if (!this.isPlaying) {
            this.play();
        }
        var mul = 2;
        var x = position.x / this.size.width;
        var y = -position.y / this.size.height;
        this.panner.setPosition(x * mul, y * mul, -0.5);
    } else {
        this.stop();
    }
};

SpatializedSample.prototype.changePositionListener = function (position) {
    // Position coordinates are in normalized canvas coordinates
    // with -0.5 < x, y < 0.5
    if (position) {
        if (!this.isPlaying) {
            this.play();
        }
        var mul = 2;
        var x = position.x / this.size.width;
        var y = -position.y / this.size.height;
        this.context.listener.setPosition(x * mul, y * mul, 0);
    } else {
        this.stop();
    }
};