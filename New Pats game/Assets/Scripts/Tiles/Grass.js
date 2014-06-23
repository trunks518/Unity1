#pragma strict
var Items : GameObject[];
var item : int;
var Position : Vector2;

function Start() 
{
	Position = transform.position;
	item = Random.Range(0, 3);
	SpawnItem();
}

function SpawnItem() 
{
	var go : GameObject;
	
	if(item == 0)
	{
		go = GameObject.Instantiate(Items[0]);
		go.transform.position = Position;
		go.name = Items[0].name;
	}
	
	if(item == 1)
	{
		go = GameObject.Instantiate(Items[1]);
		go.transform.position = Position;
		go.name = Items[1].name;
	}
}