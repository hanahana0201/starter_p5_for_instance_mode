const sketch = (p : p5) => {
  p.setup = () => {
    p.createCanvas(400, 400, p.SVG);
  };

  p.draw = () => {
    p.push();
    p.background(220);
    p.ellipse(50, 50, 80, 80);
    p.save("mySVG.svg");
    p.print("saved svg");
    p.noLoop()
    p.pop();
  };
};

new p5(sketch);