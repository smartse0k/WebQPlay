var Game = function() {
    var _this = this;

    this.lastFrameTime = 0;
    this.fps = 0;

    this.currentScene = null;
    this.sceneList = {
        main: new SceneMain(),
    };

    // 프레임 카운터
    setInterval(function() {
        if(fpsViewer) {
            fpsViewer.innerText = _this.fps + " FPS";
        }
        _this.fps = 0;
    }, 1000);
};

Game.prototype.update = function(dt) {
    if(this.currentScene && this.currentScene.update) {
        this.currentScene.update(dt);
    }
};

Game.prototype.render = function() {
    ctxBackend.clearRect(0, 0, canvasBackend.width, canvasBackend.height);
    ctxBackend.rect(0, 0, canvasBackend.width, canvasBackend.height);
    ctxBackend.fillStyle = "#9999FF";
    ctxBackend.fill();

    if(this.currentScene && this.currentScene.render) {
        this.currentScene.render();
    }

    ctxBackend.beginPath(); // path cache 삭제

    ctxFrontend.clearRect(0, 0, canvasFrontend.width, canvasFrontend.height);
    ctxFrontend.drawImage(canvasBackend, 0, 0);
};

Game.prototype.loop = function() {
    var _this = this;

    var currentTime = Date.now();
    var dt = currentTime - this.lastFrameTime;

    this.update(dt);
    this.render();

    this.fps++;
    this.lastFrameTime = currentTime;

    requestAnimationFrame(function() {
        _this.loop();
    });
};

Game.prototype.init = function() {
    var _this = this;

    this.lastFrameTime = Date.now();

    requestAnimationFrame(function() {
        _this.loop();
    });

    this.currentScene = this.sceneList.main;
};