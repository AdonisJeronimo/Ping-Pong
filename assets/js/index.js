const canvasEl = document.querySelector("canvas"),
canvasCtx = canvasEl.getContext("2d")

const lineWidth = 15


function setup() {
canvasEl.width = canvasCtx.width = window.innerWidth
canvasEl.height = canvasCtx.height = window.innerHeight

}

// desenho do campo

function draw() {
canvasCtx.fillStyle = "#286047"
canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

// linha central

canvasCtx.fillStyle = "#fff"
canvasCtx.fillRect(window.innerWidth/2 - lineWidth / 2, 0 ,  lineWidth , window.innerHeight)

// raquete esquerda
canvasCtx.fillRect(10, 100, lineWidth, 200)

// raquete direita
canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 300 ,  lineWidth, 200)

}

setup()
draw()