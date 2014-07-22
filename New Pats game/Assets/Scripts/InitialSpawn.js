#pragma strict
var Player : GameObject;
var Spawn : Transform;
 
function Update()
{
	var temp = gameObject.FindGameObjectWithTag("Player");
	if(temp == null)
	{
		Instantiate(Player, Spawn.transform.position, Spawn.transform.rotation);
	}
	
}