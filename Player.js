class player{
    constructor(x,y,width,height){
        var options = {
         ' restitution':1.0,
            'density':1.5,
           ' friction':1.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        // this.x = x;
        // this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        // fill(0,0,0);
        rect(0,0,this.width,this.height);
       pop();
    }
};