#pragma strict
var Level : String;
var Spawnx : float;
var Spawny : float;
var p : GameObject;

function LateUpdate()
{
	p = gameObject.FindGameObjectWithTag("Player");
}

function OnTriggerEnter2D(col : Collider2D)
{	
	Application.LoadLevel(Level);
	
	p.transform.position.x = Spawnx;
	p.transform.position.y = Spawny;
	p.GetComponent(PlayerMovement).Idle();
}
