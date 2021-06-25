class BoySledding{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.h = height;
        this.w = width;
        this.image = loadImage("Boysledding.png");
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
      }

}