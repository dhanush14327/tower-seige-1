class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
        }
        this. body=Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        var angle =this.body.angle

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("blue")
        fill("yellow")
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}