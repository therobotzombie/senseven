/**
 * glyph wrapper object
 * @type {{}}
 */
var glv = {};

glv.bmd = {};
glv.drawnObject = {};
/**
 * resize glyph
 * @type {number}
 */

//glyph size
glv.scaler = 0.45;
//y shift position from center
glv.yShift = -10;
glv.strokeCol = "rgb(255,208,149)";
// alte farben: [56,101,121],[2,15,33],[138,183,193],[180,205,212],[240,129,79]
glv.colors = [[76,145,161],[1,37,51],[174,209,214],[47,119,120],[19,62,90]];
glv.stageWidth = 400;
glv.stageHeight = 200;
glv.percents = [0.1,0.7,0.1,0.7,0.1,0.7,0.1];
/**
 * flag check to avoid double animations
 * @type {boolean}
 */
glv.animating = false;
//setup basic game
glv.game = new Phaser.Game(glv.stageWidth, glv.stageHeight, Phaser.AUTO, 'modalcv', {
    preload: preload,
    create: create,
}, true);

/**
 * returns 7 random percents for testing 0.1,0.9...
 * @returns {Array}
 */
glv.randomPercent7 = function() {
    var randoms = [];
    for(var i = 0;i<7;i++) {
        randoms.push(Math.random());
    }
    return randoms;
};

/**
 * drawing loop for each tile of the glyph
 * param = tile percents
 * @param e1
 * @param e2
 * @param e3
 * @param e4
 * @param e5
 * @param e6
 * @param e7
 * @param h not used
 */
glv.drawFanGlyph = function(e1,e2,e3,e4,e5,e6,e7,h) {
    var arr = [e1,e2,e3,e4,e5,e6,e7,e1];
    for(var i = 0; i<arr.length; i++) {
        glv.drawTileGlyph(arr[i],arr[i+1],i,glv.bmd);
    }
};

/**
 * draw a tile of the starglyph
 * @param e percent
 * @param e1 next percent
 * @param i station
 * @param bmd bitmap to draw on
 */
glv.drawTileGlyph = function(e,e1,i,bmd) {
    var lb = 60*glv.scaler;
    var minLb = 50*glv.scaler;
    var wholeArcSize = Math.PI*2;
    var sliceSize = wholeArcSize/7;
    var shiftPI = 0;
    var shiftY = glv.yShift;
    var positionX = bmd.width/2;
    var positionY = bmd.height/2;
    bmd.ctx.beginPath();
    bmd.ctx.moveTo(positionX,positionY+shiftY);
    bmd.ctx.lineTo(Math.sin(i*sliceSize-shiftPI)*(lb*e+minLb)+positionX,Math.cos(i*sliceSize-shiftPI)*(lb*e+minLb)+positionY+shiftY);
    bmd.ctx.lineTo(Math.sin((i+1)*sliceSize-shiftPI)*(lb*e1+minLb)+positionX,
        Math.cos((i+1)*sliceSize-shiftPI)*(lb*e1+minLb)+positionY+shiftY);
    bmd.ctx.lineTo(positionX,positionY+shiftY);
    bmd.ctx.closePath();
    bmd.ctx.strokeStyle="rgb(56,101,121)";
    bmd.ctx.stroke();
    /*var r = 11*(i+1);
     var g = 3*(i+1);
     var b = 255-20*(i+1);
     var a = 1;*/
    var getCol = glv.colors[i%glv.colors.length];
    var r = getCol[0];
    var g = getCol[1];
    var b = getCol[2];
    var a = 1;
    bmd.ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
    bmd.ctx.fill();
};

/**
 * Animation of the glyph calls the drawer
 * @param time how long does it take for the glyph to finish
 * @param rds percent numbers as an array
 */
glv.animTween = function(time, rds) {
    glv.animating = true;
    glv.drawnObject.alpha = 0;
    var tween1 = glv.game.add.tween(glv.drawnObject).to({alpha: 1}, 700);
    tween1.start();
    var show = function() {
        glv.bmd.clear();
        glv.drawFanGlyph(rds[0]*lb,rds[1]*lb,rds[2]*lb,rds[3]*lb,rds[4]*lb,rds[5]*lb,rds[6]*lb,100);
        if(lb<1) {
            lb+=(1-lb)*0.05+0.01;
            glv.game.time.events.add(50, show, this);
        } else {
            glv.animating = false;
        }
    };
    var lb = 0.1;
    glv.game.time.events.add(50, show, this);

    /**
     * reset glyph to standart
     */
    glv.reset = function() {
        glv.bmd.clear();
        glv.drawnObject.destroy();
        glv.drawnObject = glv.game.add.sprite(glv.game.world.centerX, glv.game.world.centerY, glv.bmd);
        glv.drawnObject.blendMode = 4;
        glv.alpha = 1;
        glv.drawnObject.anchor.setTo(0.5, 0.5);
        glv.drawFanGlyph(0,0,0,0,0,0,0,100);
        //explanation animation
        glv.netspr.rotation = -0.2;
        glv.netspr.alpha = 0;
        glv.textspr.alpha = 0;
        var tweenx = glv.game.add.tween(glv.netspr).to({alpha: 1}, 1200);
        tweenx.start();
        tweenx = glv.game.add.tween(glv.netspr).to({rotation: 0}, 1200);
        tweenx.start();
        tweenx = glv.game.add.tween(glv.textspr).to({alpha: 1}, 5000);
        tweenx.start();
    };

    glv.explain = function() {
    }
};

glv.getPercents = function() {
    return dani.glyph.percents;
};

function preload() {
    glv.game.load.image('glyphText', 'img/glyph/glyphbeschrift.png');
    glv.game.load.image('glyphNet', 'img/glyph/glyphlines.png');
}


function create() {

    glv.animating = false;
    //bg

    //glyphs
    var width = 300;
    var height = 250;

    Phaser.Canvas.setImageRenderingBicubic(glv.game.canvas);
    glv.game.physics.startSystem(Phaser.Physics.ARCADE);

    glv.bmd = glv.game.add.bitmapData(width, height);

    glv.drawnObject = glv.game.add.sprite(glv.game.world.centerX, glv.game.world.centerY, glv.bmd);
    glv.drawnObject.blendMode = 4;
    glv.alpha = 1;
    glv.drawnObject.anchor.setTo(0.5, 0.5);

    //starpic
    glv.drawFanGlyph(0,0,0,0,0,0,0,100);


    //btn
    var actionOnMouseOver = function() {
        if(!glv.animating) {
            glv.bmd.clear();
            glv.drawnObject.destroy();
            glv.drawnObject = glv.game.add.sprite(glv.game.world.centerX, glv.game.world.centerY, glv.bmd);
            glv.drawnObject.blendMode = 4;
            glv.drawnObject.anchor.setTo(0.5, 0.5);
            glv.alpha = 1;
            //var rds = glv.randomPercent7();
            var rds = glv.getPercents();
            //rds = glv.percents;
            //glv.drawFanGlyph(rds[0],rds[1],rds[2],rds[3],rds[4],rds[5],rds[6],100);
            //console.log(rds);
            glv.animTween(1000, rds);
        }
    };
    //on mouse in canvas
    glv.game.canvas.addEventListener("mouseover", actionOnMouseOver, false);

    glv.netspr = glv.game.add.sprite(glv.game.world.centerX, glv.game.world.centerY+glv.yShift, 'glyphNet');
    glv.textspr = glv.game.add.sprite(glv.game.world.centerX, glv.game.world.centerY+glv.yShift, 'glyphText');
    glv.netspr.anchor.setTo(0.5,0.5);
    glv.textspr.anchor.setTo(0.5,0.5);
    glv.netspr.scale.setTo(1,1);
    glv.netspr.rotation = -0.2;
    glv.textspr.scale.setTo(1,1);
    glv.netspr.alpha = 0;
    glv.textspr.alpha = 0;
    var tweenx = glv.game.add.tween(glv.netspr).to({alpha: 1}, 1400);
    tweenx.start();
    tweenx = glv.game.add.tween(glv.netspr).to({rotation: 0}, 1400);
    tweenx.start();
    tweenx = glv.game.add.tween(glv.textspr).to({alpha: 1}, 5000);
    tweenx.start();
    //reihenfolge senseven, riechen, fühlen, sehen, hören, schmecken intuition
}