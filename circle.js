class Ball
{
  constructor(x, y, r) 
  {
    let options = {
        restitution:0.9
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke("blue");
    fill("red");
    ellipse(pos.x, pos.y, this.r);
    pop();
  }
  
}
