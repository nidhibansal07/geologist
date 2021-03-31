class Diamond{
	constructor(x,y)
	{ var options = {
		'restitution':1,
		'friction':3,
		'density':30
	}
	
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y,60,60 , options);
		World.add(world, this.body);
		this.width = 60;
        this.height = 60;
     

	}
	display()
	{
			var diamondpos=this.body.position;		
			push()
			translate(diamondpos.x, diamondpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("darkblue");
			fill("lightblue");
            rect(0,0 , this.width, this.height);
			pop()
	}

}