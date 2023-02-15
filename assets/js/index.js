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

// bolinha
canvasCtx.beginPath()
canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false)
canvasCtx.fill()

// placar
canvasCtx.font = "bold 72px Arial"
canvasCtx.textAlign = "center"
canvasCtx.textBaseline = "top"
canvasCtx.fillStyle = "#01341D"
canvasCtx.fillText("3",window.innerWidth / 4, 50)
canvasCtx.fillText("1",window.innerWidth / 4 + window.innerWidth / 2, 50)

}

setup()
draw()