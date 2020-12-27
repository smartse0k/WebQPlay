var canvasBackend = undefined,
    canvasFrontend = undefined;
var ctxBackend = undefined,
    ctxFrontend = undefined;
var theGame = undefined;
var fpsViewer = undefined;

$(document).ready(function() {
    canvasBackend = document.getElementById("backend");
    canvasFrontend = document.getElementById("scene");
    ctxBackend = canvasBackend.getContext("2d");
    ctxFrontend = canvasFrontend.getContext("2d");

    fpsViewer = document.getElementById("fps-viewer");

    theGame = new Game();
    theGame.init();
});