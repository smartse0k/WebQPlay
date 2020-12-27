var SceneMain = function() {
    this.speed = 0.3;
    this.x = 0;
};

SceneMain.prototype.update = function(dt) {
    this.x += this.speed * dt;
};

SceneMain.prototype.render = function() {
    ctxBackend.beginPath();
    ctxBackend.rect(this.x, 0, 20, 20);
    ctxBackend.fillStyle = "#FF9999";
    ctxBackend.fill();
};