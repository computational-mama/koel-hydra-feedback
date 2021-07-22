osc(100,0.1,0.5).out()

//noise(10,0).out()


voronoi(1,0.3,0.8)
 .blend(o1,0.9)
 .color(1,0.7,0.2)
 .modulate(o2,0.5)
.scrollX(0.1,0.05)
 .out(o2)

voronoi(1,0.1,0.8).color(1,0.7,0.9).brightness(0.15).modulate(o2).out(o0)


s0.initCam()

s1.initScreen()

src(s0)
.modulate(noise(5,0.2),0.1)
.out(o1)

render(o2)


