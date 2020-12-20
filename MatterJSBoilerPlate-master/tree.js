class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.tree = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImagine("tree.png");
        World.add(world,this.tree)
    }
    display(){
        var pos1 = this.tree.position.x;
        var pos2 = this.tree.position.y;
        imageMode(CENTER);
        image(this.imagine,pos1,pos2,600,600)
    }
}