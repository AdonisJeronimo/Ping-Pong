const canvasEl = document.querySelector("canvas"),
canvasCtx = canvasEl.getContext("2d")

function setup(){
    canvasEl.width = canvasCtx.width = window.innerWidth
    canvasEl.height = canvasCtx.height = window.innerHeight

}
function draw(){
    setup()

}