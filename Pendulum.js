class Pendulum{
    constructor(x, y,color){
        var options = {
           'restitution': 1,
           'friction': 0,
           'frictionAir':0.0,
           'slop': 1,
           'inertia': Infinity,
           'density':1

        }

        this.body=Bodies.circle(x,y,30,options)
        this.radius = 30
        this.y = y
        this.x = x
        this.color = color
        
        World.add(world, this.body)
    }
 
display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke()
    fill(this.color);
    ellipse(0, 0, 60, 60);
    pop();
}
}