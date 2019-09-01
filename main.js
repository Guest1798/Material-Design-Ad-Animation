//初始场景
$('.scene1').hide();
$('.scene1 span').hide();
$('.scene2').hide();
$('.scene3').hide();
$('.scene4>.ball').hide();
$('.scene5>.circle5>.axis').hide();
$('.scene6').hide();
$('.scene6 .dial img').hide();
$('#scene6tip').hide();
$('.scene7').hide();
$('.scene8').hide();
$('.scene9').hide();
$('.scene10').hide();
$('.scene11').hide();
$('.topmask,.bottommask').hide();
$('.scene11 #endstr').hide();

var windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

scene1();//开始场景1
// scene10();
//场景1
function scene1() {
    $('.scene1').show();
    var i = 0;
    console.log('场景1')
    var t1 = setInterval(function(){
        $('.gd span').eq(i).show();
        i++;
        if (i > 1) {
            clearInterval(t1);
            i = 0;
            nextIntterval();
        }
    }, 500);


    function nextIntterval() {
        var t2 = setInterval(function(){
            $('.mdmotion span').eq(i).show();
            i++;

            if (i > 14) {
                clearInterval(t2);
                i = 0;
                fontFade();
            }
        }, 80);
    }
    //文字渐变到无
    function fontFade() {
        var t3 = setInterval(function(){
            $('.scene1 span').css('opacity', 1 - i * 0.1);
            i++;
            if (i > 10) {
                clearInterval(t3);
                i = 0;
                $('.scene1').css('display', 'none');
                $('.scene2').fadeIn();
                scene2();
            }
        }, 50);

    }
}

// 转场景二
function scene2() {
    console.log('场景2')
    $('.scene2>.circle1').addClass('circle1Ani');
    $('.scene2>.circle2').addClass('circle2Ani');
    $('.scene2>.circle3').addClass('circle3Ani');
    setTimeout(function(){
        // alert();
        $('.scene2>.circle1').animate({
            width: 0,
            height: 0,
        }, 400);
        $('.scene2>.circle2').animate({
            width: 0,
            height: 0,
        }, 400);

        $('.scene2>.circle3').animate({
            width: 0,
            height: 0,
        }, 400, function () {
            scene3();
        });
    }, 3000)
}
// 转场景三
function scene3() {
    console.log('场景3')
    $('.scene2').css('display', 'none');
    $('.scene3>.circle4').addClass('circle4Ani');
    $('.scene3').fadeIn();

    setTimeout(function () {
        $('.circle4').animate({
            width: 300,
            height: 300,
            borderRadius: 5,
        }, 800, function () {
            to4pieces();
        });
    }, 800)
}
// 显示四块
function to4pieces() {
    var j = 0;
    $('.circle4>div').addClass('fourpieces');
    var t4 = setInterval(function () {
        var alpha = j * 0.1;
        $('.circle4').css({ 'background': 'rgba(255,255,255,' + (1 - alpha) + ')' });
        $('.circle4>div').css('background', 'rgba(255,255,255,' + alpha + ')');
        j++;
        if (j > 10) {
            clearInterval(t4);
            piecesMove();
        }
    }, 30);
}
// 四块矩形变形
function piecesMove() {
    var k = 0;
    var t5 = setInterval(function () {
        $('.circle4>div').css(
            { 'border-radius': k }
        )
        k++;
        if (k > 70) {
            clearInterval(t5);
            fourroundtoone();
        }
    }, 6)
}
// 四块圆形变一块
function fourroundtoone() {
    var p = 0;
    var t6 = setInterval(function () {
        $('.circle4').css('transform', 'rotate(' + p * 2.4 + 'deg)');
        $('.circle4>div:first').css('transform', 'translate(' + p + 'px,' + p + 'px)');
        $('.circle4>div:nth-child(2)').css('transform', 'translate(' + (-p) + 'px,' + p + 'px)');
        $('.circle4>div:nth-child(3)').css('transform', 'translate(' + p + 'px,' + (-p) + 'px)');
        $('.circle4>div:nth-child(4)').css('transform', 'translate(' + (-p) + 'px,' + (-p) + 'px)');
        p++;
        if (p > 94) {
            clearInterval(t6);
            scene4();
        }
    })
}
// 转场景四
function scene4() {
    console.log('场景4')
    $('.scene3').animate({ top: '-100%' }, 400);
    $('.scene4').animate({ top: '-100%' }, 400, function () {
        bounceball();
    });
}
// 小球跳动
function bounceball() {
    $('.scene4>.ball').show();
    $('.ball').addClass('ballmove');
    $('.baffle').addClass('baffleAni');
    setTimeout(function () {
        $('.scene5>.circle5').show();
        s4tos5();
    }, 5000)
}
// 场景四转场景五过度
function s4tos5() {

    var i = 0;
    var t7 = setInterval(function () {
        $('.scene5').css('background', 'linear-gradient(to right,rgba(238, 61, 41)' + i + '%,rgb(13, 194, 37) 0%)');
        i++;
        if (i > 100) {
            clearInterval(t7);
            $('.scene5').css('position', 'relative');
            $('.scene3').hide();//优化场景3转场景4的闪屏现象
            $('.scene4').css('display', 'none');
            scene5();
        }
    }, 1)
}
// 场景五
function scene5() {
    console.log('场景5')
    $('.scene5>.circle5>.axis').show();
    $('.scene5>.circle5>.axis div').show();
    $('.scene5>.circle5>.axis div:first').stop(false, true).animate({
        width: "150px",
        height: "150px"
    }, 1000, function () {
        circle6Bigger();
    });
    $('.scene5>.circle5>.axis div:last').stop(false, true).animate({
        width: "150px",
        height: "150px"
    }, 1000);
    $('.scene5>.circle5').addClass('circle5Ani');
    $('.scene5>.circle5>.axis').addClass('axisrotate');
}
// 转scene5最后效果
function circle6Bigger() {
    $('.scene5 .circle6').animate({
        width: 5000,
        height: 5000,
    }, 300, function () {
        $('.scene5').hide();
        $('.scene6').show();
        scene6();
    });
}
function scene6() {
    console.log('场景6')
    setTimeout(function () {
        $('.scene6 .dial img').fadeIn();
    }, 1300);
    setTimeout(function () {
        nextAni();
        $('#scene6tip').fadeIn();
        $('.scene7').show();
        $('.scene7>div').hide();
    }, 1300);
}
//停顿使用鼠标移动到电话图片进行下一动画

function nextAni() {
    var alreadyOn = false;
    var k = 0;
    var ring=new Audio('./1368.mp3');
    $('.scene6 .dial').on('click', function () {
        ring.play();
        $('#scene6tip').fadeOut();
        if (!alreadyOn) {
            alreadyOn = true;
            $('.scene6 .dial img').addClass('dialimgAni');
            var t8 = setInterval(function () {
                $(".scene6 .outercircle .dial .innercircle").css('backgroundColor', 'rgba(0, 0, 0, ' + 0.016 * k + ')');
                $(".scene6 .outercircle").css('backgroundColor', 'rgba(0, 0, 0, ' + 0.025 * k + ')');
                k++;
                if (k > 10) {
                    ring.pause();
                    clearInterval(t8);
                    toscene7();
                }
            }, 100);
        } else {
            return;
        }
    })
}
function toscene7() {
    $('.scene6 .dial img').animate({
        width: 0,
        height: 0,
    }, 400);
    $(".scene6 .outercircle").animate({
        width: 0,
        height: 0,
    }, 600, function () {
        $(".scene6 .outercircle").hide();
        scene7();
    })
}
function scene7() {
    console.log('场景7')
    $('.scene7>div').show();
    $('.scene7').animate({
        left: '0%',
    }, 600, function () {
        // $(".scene6").hide();
        scene8()
    });
}
function scene8() {
    console.log('场景8');
    $('.scene8').show()
    $('.scene8').animate({
        left: '0%'
    }, 600);
    $('.scene7').animate({
        left: '100%',
    }, 600, function () {
        slideBlockMove();
    });
}
function slideBlockMove() {
    var k = 0;
    var t9 = setInterval(function () {
        $('.scene8 .progressbar').css('background', 'linear-gradient(to right,rgb(0, 60, 255) ' + k + '%,#fff 0%)');
        $('.scene8 .indicator').html(k + '%');
        $('.scene8 .indicator').css('left', 20 + k * 0.6 + '%');
        k++;
        if (k > 100) {
            clearInterval(t9);
            scene9();
            // scene10();
        }
    }, 15)
}
function scene9() {
    console.log('场景9');
    $('body').css('background', 'rgb(48, 255, 255)');
    $('.scene6,.scene7').fadeOut();
    $('.scene8').animate({
        left: "100%"
    }, 600)
    $('.scene9').show();
    $('.scene9').animate({
        left: '0%'
    }, 600);

    // 动态创建canvas
    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "rgba(0,0,0,0)";
    canvas.setAttribute("id", "canvas");
    $('.scene9').append(canvas);
    drawBallMove();
    setTimeout(function(){
        scene9Move();
    }, 3600);
}
// 小球曲线运动
function drawBallMove() {
    var data = [Math.random() * 300];
    for (var i = 1; i < 10; i++) {
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    option = {
        canvas: {
            id: 'canvas'
        },
        series: {
            itemStyle: {
                color: '#78909c'
            },
            areaStyle: {
                color: 'rgb(255, 158, 68)'
            },
            data: data
        }
    }
    var ctrlNodesArr = []
    var ctrlDrawIndex = 0
    function LinearGradient(option) {
        this.canvas = document.getElementById(option.canvas.id)
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.title = option.text
        this.xAxis = option.data
        this.series = option.series
    }
    LinearGradient.prototype.initData = function () {
        ctrlNodesArr = [{
            "cAx": -79.61999999999999,
            "cAy": null,
            "cBx": -53.08,
            "cBy": null,
            "nowX": 0,
            "nowY": 0,
            "t": 0
        }, {
            "cAx": 26.54,
            "cAy": 100,
            "cBx": 79.61999999999999,
            "cBy": 268.8,
            "nowX": 132.7,
            "nowY": 336,
            "t": 0
        }, {
            "cAx": 185.77999999999997,
            "cAy": 403.2,
            "cBx": 212.32,
            "cBy": 305.4,
            "nowX": 265.4,
            "nowY": 336,
            "t": 0
        }, {
            "cAx": 318.47999999999996,
            "cAy": 366.6,
            "cBx": 345.02,
            "cBy": 489,
            "nowX": 398.09999999999997,
            "nowY": 489,
            "t": 0
        }, {
            "cAx": 451.17999999999995,
            "cAy": 489,
            "cBx": 477.7199999999999,
            "cBy": 320.6,
            "nowX": 530.8,
            "nowY": 336,
            "t": 0
        }, {
            "cAx": 583.88,
            "cAy": 351.4,
            "cBx": 610.42,
            "cBy": 535.4,
            "nowX": 663.5,
            "nowY": 546,
            "t": 0
        }, {
            "cAx": 716.58,
            "cAy": 546,
            "cBx": 743.12,
            "cBy": 512,
            "nowX": 796.1999999999999,
            "nowY": 489,
            "t": 0
        }, {
            "cAx": 849.2799999999999,
            "cAy": 466,
            "cBx": 875.8199999999998,
            "cBy": 489.4,
            "nowX": 928.8999999999999,
            "nowY": 451,
            "t": 0
        }, {
            "cAx": 981.9799999999999,
            "cAy": 412.6,
            "cBx": 1008.5199999999999,
            "cBy": 335.4,
            "nowX": 1061.6,
            "nowY": 297,
            "t": 0
        }, {
            "cAx": 1114.6799999999998,
            "cAy": 258.6,
            "cBx": 1167.76,
            "cBy": 266.6,
            "nowX": 1194.3,
            "nowY": 259,
            "t": 0
        }, {
            "cAx": 1250,
            "cAy": 260,
            "cBx": 1200,
            "cBy": 270,
            "nowX": windowWidth + 100,
            "nowY": 300,
            "t": 0
        }, {
            "cAx": windowWidth,
            "cAy": windowHeight,
            "cBx": windowWidth + 100,
            "cBy": windowHeight + 100,
            "nowX": windowWidth + 100,
            "nowY": windowHeight + 100,
            "t": 0
        }
            , {
            "cAx": windowWidth,
            "cAy": windowHeight,
            "cBx": windowWidth + 100,
            "cBy": windowHeight + 100,
            "nowX": -100,
            "nowY": windowHeight + 100,
            "t": 0
        }
        ];
    }
    LinearGradient.prototype.draw = function () {
        var self = this
        this.ctx.beginPath()
        ctrlNodesArr.forEach(function (item, index) {
            var ctrlAx = item.cAx,
                ctrlAy = item.cAy,
                ctrlBx = item.cBx,
                ctrlBy = item.cBy,
                x = item.nowX,
                y = item.nowY
            self.ctx.bezierCurveTo(ctrlAx, ctrlAy, ctrlBx, ctrlBy, x, y);
        })
        var lingrad = this.ctx.createLinearGradient(0, 0, 0, this.width);
        lingrad.addColorStop(0, this.series.areaStyle.color);
        lingrad.addColorStop(1, this.series.itemStyle.color);
        this.ctx.strokeStyle = this.series.itemStyle.color
        this.ctx.fillStyle = '#78909c'
        this.ctx.fill()
        this.ctx.stroke()
    }
    LinearGradient.prototype.drawBall = function () {
        var self = this
        var item = ctrlNodesArr[ctrlDrawIndex]
        var ctrlAx = item.cAx,
            ctrlAy = item.cAy,
            ctrlBx = item.cBx,
            ctrlBy = item.cBy,
            x = item.nowX,
            y = item.nowY,
            ox = 0,
            oy = 0
        if (ctrlDrawIndex === 0) {
            ox = 0
            oy = 0
        } else {
            ox = ctrlNodesArr[ctrlDrawIndex - 1].nowX
            oy = ctrlNodesArr[ctrlDrawIndex - 1].nowY
        }
        if (item.t > 1) {
            ctrlDrawIndex++
        } else {
            self.ctx.clearRect(0, 0, self.width, self.height)
            item.t += 0.05
            var ballX = ox * Math.pow((1 - item.t), 3) + 3 * ctrlAx * item.t * Math.pow((1 - item.t), 2) + 3 * ctrlBx * Math.pow(item.t, 2) * (1 - item.t) + x * Math.pow(item.t, 3)
            var ballY = oy * Math.pow((1 - item.t), 3) + 3 * ctrlAy * item.t * Math.pow((1 - item.t), 2) + 3 * ctrlBy * Math.pow(item.t, 2) * (1 - item.t) + y * Math.pow(item.t, 3)
            newMap.draw()
            self.ctx.beginPath()
            self.ctx.arc(ballX, ballY, 30, 0, Math.PI * 2, false)
            self.ctx.fillStyle = '#5e3ad0'
            self.ctx.fill()
        }
        if (ctrlDrawIndex !== ctrlNodesArr.length) {
            window.requestAnimationFrame(newMap.drawBall.bind(self))
        }
    }
    var newMap = new LinearGradient(option)
    newMap.initData()
    newMap.drawBall()
}
//场景9到场景10
function scene9Move() {
    $('.scene9').animate({
        left: '-100%'
    }, 600, function () {
        scene10();
    });
}
// 场景10
function scene10() {
    console.log('场景10');
    $('.scene10 .circle7 .circle8').hide();
    $('.scene10').fadeIn(300);
    $('.scene10').animate({
        left:'0%'
    },300)
    $('.scene6,.scene7,.scene8,.scene9').fadeOut();
    setTimeout(function () {
        // alert()
        dropBall();
    }, 2000);
}
function dropBall() {
    $('.scene10 .circle7 .circle8').show();
    $('.scene10 .circle7').addClass('dropball');
    $('.scene10 .circle7').animate({
        width: '800px',
        height: '800px',
    }, 2000, function () {
        ballRotate();
    });
}

function ballRotate() {
    setTimeout(function () {
        $('.scene10 .circle7 .circle8').animate({
            width: '50px',
            height: '50px',
            top: '0%'
        }, 400, function () {
            $('.scene10 .circle7 .circle8').css('background', 'rgb(255, 100, 100)');
            $('.scene10 .circle7 .c8axis').addClass('c8axisrotate');
            $('.scene10 .circle7 .c8axis').on('animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd', function () {
                nextBallRotate();
                
            });
        });
    }, 2000)
}

function nextBallRotate() {
    
    $('.scene10 .circle7 .c8axis').removeClass('c8axisrotate');
    $('.scene10 .circle7 .c8axis').addClass('c8axisrotate2');
    $('.circleProgress_wrapper .rightcircle').addClass('rightcircle2');
    $('.circleProgress_wrapper .leftcircle').addClass('leftcircle2');
    // if(browser()=='Edge'){
    //     ballBigger();
    // }
    $('.scene10 .circle7 .c8axisrotate2').on('animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd', function () {
        ballBigger();
    });
}

function ballBigger() {
    $('.scene10 .circle7 .circle8').animate({
        width: '3000px',
        height: '3000px',
        top: '50%'
    }, 600, function () {
        $('body').css('background', 'rgb(255, 100, 100)');
        scene11();
    });
}

function scene11() {
    $('.scene11').fadeIn();
    $('.scene10').fadeOut();
    setTimeout(function () {
        ballRaise();
    }, 300);
}
function ballRaise() {
    $('.ballraise').animate({
        top: '50%',
    }, 600, function () {
        endScene();
    })
}
function endScene() {
    $('.topmask,.bottommask').show();
    setTimeout(function () {
        $('.ballraise').addClass('balltorect');
    }, 600)
    setTimeout(function(){
        $('.topmask').animate({
            top: '0%'
        }, 300);
        $('.bottommask').animate({
            top: '50%'
        }, 300);
    }, 2000);
    setTimeout(function(){
        $('#endstr').show();
        endThanks();
    }, 3000);
}

function endThanks() {
    var str = 'Thanks for visited';
    var i = 0;
    var t11 = setInterval(function(){
        var $span = $('<span></span>');
        if (str[i] == ' ') {
            $span.html('&nbsp;');
        }
        else {
            $span.html(str[i]);
        }
        $('#endstr').append($span);
        i++;
        if (i > str.length) {
            clearInterval(t11);
            i = 0;
            end=true;
        }
    }, 100);
}

