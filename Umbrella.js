class Umbrella
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
			
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
	
        this.image=loadImage("Boy with umbrella.jpg")
		World.add(world, this.body);
		
	}
	display()
	{       
			var umbrellapos=this.body.position;		

			push()
			translate(umbrellapos.x, umbrellapos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255);
			imageMode(CENTER)
	        image(this.image, 0, 0, 200, 250)
			//ellipse(0,0,this.r, this.r);
			pop()
			
    }
}