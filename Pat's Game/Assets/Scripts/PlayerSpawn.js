#pragma strict
var Player : GameObject;

function Start() 
{
	Instantiate(Player, new Vector3(0, 0, 0), Quaternion.identity);
}
