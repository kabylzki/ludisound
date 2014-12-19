var options = {
    size: {x: 64, y: 32},
    minRoomSize: {x: 8, y: 8},
    maxRoomSize: {x: 16, y: 16},
    maxRooms: 24,
    showGrid: false,
    algorithm: 'RoomMaze',
    colors: {},
    regenerate: function () {
        var timeStart = Date.now();
        var timeEnd = Date.now();
        grid = window[options.algorithm].generate(options.size, options.minRoomSize, options.maxRoomSize, options.maxRooms),
                time.textContent = (timeEnd - timeStart);
        scale.x = ~~(canvas.width / options.size.x);
        scale.y = ~~(canvas.height / options.size.y);
        clear();
        if (grid)
            drawGridMap(grid);
        if (options.showGrid)
            drawGridLines();
    }
},
gui,
        canvas,
        ctx,
        time,
        scale = {x: 1, y: 1},
algorithms = {
    'Room Maze': 'RoomMaze',
    'Simple': 'Simple',
    'ROT.Digger': 'Digger',
    'ROT.Rogue': 'Rogue',
    'ROT.Uniform': 'Uniform'
},
tiles = {
    floor: {x: 112, y: 64},
    wall: {x: 208, y: 48},
    wall_n: {x: 208, y: 48},
    wall_s: {x: 112, y: 128},
    wall_e: {x: 224, y: 208},
    wall_w: {x: 192, y: 142},
    corner: {x: 192, y: 48},
    corner_n: {x: 192, y: 48},
    corner_s: {x: 128, y: 128},
    corner_e: {x: 160, y: 128},
    corner_w: {x: 96, y: 128},
    size: {x: 16, y: 16}
},
texture = new Image(),
        resizeDrawWait = 250,
        resizeDrawTimeout = null;
texture.src = 'include/images/cave_034-Tileset.png';
options.colors[helpers.TILE_TYPE.EMPTY] = '#111';
options.colors[helpers.TILE_TYPEFLOOR] = 'rgba(100, 100, 100, 0.8)';
options.colors[helpers.TILE_TYPE.WALL] = 'rgba(246, 203, 24, 0.8)';
options.colors.grid = 'rgba(255, 255, 255, 0.2)';

var timeInfo = {
    default_add: 30,
    add: 0,
    last_seconds: false
};

var gameInfo = {
    defaultTime: "00:01:30",
    timeRemaining: "00:01:30",
    stage: 1
};
var heroInfo = {
    posX: 512,
    posY: 256,
    state: "normal",
    sphereLevel: 0,
    healthPoint: 3,
    monsterKilled: 0,
    enragedUsed: 0,
    chestTaken: 0,
    clockTaken: 0,
    areaCleared: 0,
    score: 0
};
var monsterInfo = {
    posX: 512,
    posY: 256
};
tabMonster = [];
tabChest = [];
tabSphere = [];
tabStair = [];
tabClock = [];

// Variable images
var heroImage = new Image();
heroImage.src = "include/images/hero.png";
var floorImage = new Image();
floorImage.src = "include/images/floor.png";
var chestImage = new Image();
chestImage.src = "include/images/chest.png";
// Monsters
var monsterImage = new Image();
monsterImage.src = "include/images/monster.png";
var monsterImage1 = new Image();
monsterImage1.src = "include/images/monster-level-1.png";
var monsterImage2 = new Image();
monsterImage2.src = "include/images/monster-level-2.png";
var monsterImage3 = new Image();
monsterImage3.src = "include/images/monster-level-3.png";
var monsterImage4 = new Image();
monsterImage4.src = "include/images/monster-level-4.png";
var monsterImage5 = new Image();
monsterImage5.src = "include/images/monster-level-5.png";
// Sphere
var sphereImage = new Image();
sphereImage.src = "include/images/sphere-level.png";
// Stairs
var stairImage = new Image();
stairImage.src = "include/images/stair.png";
// Clock
var clockImage = new Image();
clockImage.src = "include/images/clock.png";
// Bones
var bonesImage = new Image();
bonesImage.src = "include/images/bones-3.png";
