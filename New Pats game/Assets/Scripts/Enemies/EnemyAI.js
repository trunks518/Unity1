#pragma strict
		/****************************************
		*	EnemyAI Script	   					*
		*	Created By: Justin Howell			*
		*	Date: 6 June, 2014  1913  			*
		*****************************************
		*	This script handles the Enemy AI 	*
		*	behaviors.							*
		*						   				*
		*						   				*
		*						   				*
		****************************************/	

var _player : GameObject[];
var LookRange : float = 3.0f;
var AgroRange : float = 2.0f;
var AtkRange : float = 0.25;
var MinRange : float = 0.10f;
var rot : Quaternion;

var Speed : float = 3.0f;
var HP : float = 10.0f;


function Start()
{
	rot = Quaternion.identity;
}

function FixedUpdate()
{
	transform.rotation = rot;
	
	_player = gameObject.FindGameObjectsWithTag("Player");

	for(var p = 0; p < _player.length; p++)
	{
		var distance = Vector2.Distance(_player[p].transform.position, transform.position); ///Get the difference from this transform to the player.
		var Tx = _player[p].transform.position.x - transform.position.x; ///Calaulates the x position
		var Ty = _player[p].transform.position.y - transform.position.y; ///Calaulates the y position
		var dir = new Vector2(Tx, Ty);
		
		if(distance <= LookRange)
		{
			//Debug.Log("I can see a player.");
		}
		
		if(distance <= AgroRange && distance > MinRange)
		{		
			rigidbody2D.AddForce(dir * Speed);	
			//Debug.Log("Move to the player in range.");
		}
		
		if(distance >= AtkRange)
		{			
			//Debug.Log("Move to the player in range.");
		}
		
		else
		{
			//Do Nothing!
		}
	}
}