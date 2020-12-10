class step{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        // this.x = x;
        // this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }

    display(){
        var Branchpos = this.body.position;
        push();
       translate(Branchpos.x,Branchpos.y);
        rectMode(CENTER);
        fill(10,200,10);
        rect(Branchpos.x, Branchpos.y,this.width,this.height);
       pop();
    }
}