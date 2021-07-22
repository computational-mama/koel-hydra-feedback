let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js']

// hydra canvas + init
let hc = document.createElement('canvas') // hydra canvas + custom size
hc.width = 640
hc.height = 360
let hydra = new Hydra({
	detectAudio: false,
	canvas: hc
})

let pg // store hydra texture


// hydraSandbox- start
osc(40, 0.01, 0.9)
	// .scale(1, 1, () => window.innerWidth / window.innerHeight)
	.modulate(osc(10))
	.thresh()
	.out(o0)
render(o0)

// hydraSandbox - stop

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	pg = createGraphics(hc.width, hc.height)
	noStroke()
}


function draw() {

	// grab + apply hydra texture
	pg.clear()
	pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height)
	texture(pg)
	// rotateY(radians(frameCount / 8))
	plane(width, height)
	// rotateX(radians(frameCount / 8))
	// box(200)// fill screen w/ texture

	// sphere(200)
	// torus(height/4, height/8, 50)
}
