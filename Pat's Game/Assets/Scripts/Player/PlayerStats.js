#pragma strict
var Inventory : ArrayList;
var Hp : float = 100.0f;
var Atk : float = 1.0f;

function Start() 
{
	Inventory = new ArrayList();
}


function Update()
{
	if(Hp <= 0)
	{
		Destroy(this.gameObject);
	}
}