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
	
		this.image=loadImage("images/Walking Frame/walking_1.png");
		this.image=loadImage("images/Walking Frame/walking_2.png");
		this.image=loadImage("images/Walking Frame/walking_3.png");
		this.image=loadImage("images/Walking Frame/walking_4.png");
		this.image=loadImage("images/Walking Frame/walking_5.png");
		this.image=loadImage("images/Walking Frame/walking_6.png");
		this.image=loadImage("images/Walking Frame/walking_7.png");
		this.image=loadImage("images/Walking Frame/walking_8.png");
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
			image(this.image, 0, 0, 200, 210);
			
			//ellipse(0,0,this.r, this.r);
			pop()
			
    }
}