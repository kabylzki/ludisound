
function clear() {
    ctx.fillStyle = options.colors[helpers.TILE_TYPE.EMPTY];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGridLines() {
    var i = 0;
    ctx.beginPath();
    //draw grid
    for (i = 0; i < canvas.width; i += tiles.size.x) {// scale.x) {
        ctx.moveTo(0.5 + i, 0);
        ctx.lineTo(0.5 + i, canvas.height);
    }

    for (i = 0; i < canvas.height; i += tiles.size.y) {// scale.y) {
        ctx.moveTo(0, 0.5 + i);
        ctx.lineTo(canvas.width, 0.5 + i);
    }

    ctx.strokeStyle = options.colors.grid;
    ctx.stroke();
}

function drawGridMap(grid) {
    var xlen = grid.length,
            ylen = grid[0].length;
    tabWall = [];
    tabFloor = [];
    //draw dungeon grid
    for (var x = 0; x < xlen; ++x) {
        for (var y = 0; y < ylen; ++y) {
            var tile = grid[x][y];
            var blockInfo = {
                posX: x,
                posY: y,
                tile: tile
            };
            if (tile & helpers.TILE_TYPE.EMPTY)
                continue;
            if (tile & helpers.TILE_TYPE.FLOOR) {
                drawTile('floor', x, y);
                //ctx.fillStyle = options.colors[helpers.TILE_TYPE.FLOOR];
                tabFloor.push(blockInfo);
            }
            else if (tile & helpers.TILE_TYPE.WALL) {

                tabWall.push(blockInfo);
                var type = tile & helpers.CORNER ? 'corner' : 'wall';
                if (tile & helpers.DIRECTION.NORTH)
                    type += '_n';
                else if (tile & helpers.DIRECTION.SOUTH)
                    type += '_s';
                else if (tile & helpers.DIRECTION.EAST)
                    type += '_e';
                else if (tile & helpers.DIRECTION.WEST)
                    type += '_w';
                drawTile(type, x, y);
                //ctx.fillStyle = options.colors[helpers.TILE_TYPE.WALL];// '#424254';
                //ctx.fillRect(x * tiles.size.x, y * tiles.size.y, tiles.size.x, tiles.size.y);
            }

//ctx.fillRect(x * scale.x, y * scale.y, scale.x, scale.y);
        }
    }
}

function drawTile(type, x, y) {
    ctx.drawImage(
            texture,
            tiles[type].x,
            tiles[type].y,
            tiles.size.x,
            tiles.size.y,
            x * tiles.size.x,
            y * tiles.size.x,
            tiles.size.x,
            tiles.size.y
            );
}

function resize(skipRedraw) {
    canvas.width = tiles.size.x * options.size.x;
    canvas.height = tiles.size.y * options.size.y;
    if (!skipRedraw) {
        clearTimeout(resizeDrawTimeout);
        resizeDrawTimeout = setTimeout(function () {
            options.regenerate();
        }, resizeDrawWait);
    }
}