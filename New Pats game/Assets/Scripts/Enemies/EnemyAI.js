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
		
@script RequireComponent(Rigidbody2D)
@script RequireComponent(BoxCollider2D)

var Speed : float = 3.0f;
var Hp : float = 10.0f;
var aWeapon : GameObject;


var _player : GameObject[];
var WeaponList : GameObject[];

/////////////Look and movement vars////////////////////////
var LookRange : float = 3.0f;
var AgroRange : float = 2.0f;
var AtkRange : float = 0.25;
var MinRange : float = 0.10f;
/////////End look and movement vars////////////////////////

////////////Timers//////////////
var WaitTime : float = 40.0f; 
var attackTimer = 3;
public var _time : float;
////////End timers//////////////

function Start()
{
	//var w;
	//w = Random.Range(0, WeaponList.length);
	//aWeapon = WeaponList[w];
	
}

function Update()
{
	_time += Time.deltaTime;
	
	_player = gameObject.FindGameObjectsWithTag("Player");

	for(var p = 0; p < _player.length; p++)
	{
		var distance = Vector2.Distance(_player[p].transform.position, transform.position); ///Get the difference from this transform to the player.
		var Tx = _player[p].transform.position.x - transform.position.x; ///Calaulates the x position
		var Ty = _player[p].transform.position.y - transform.position.y; ///Calaulates the y position
		var dir = new Vector2(Tx, Ty);
		
		if(distance <= LookRange) ////Player in range
		{
			//Debug.Log("I can see a player.");
		}
		
		if(distance <= AgroRange && distance > MinRange) ////Move enemy to the player
		{		
			rigidbody2D.AddForce(dir * Speed);	
			//Debug.Log("Move to the player in range.");
		}
		
		if(distance <= AtkRange)
		{			
			Attack();
		}
		
		if(distance > LookRange)
		{			
			if(_time > WaitTime)
			{
				var _dir = Random.insideUnitCircle * LookRange * 150;
				rigidbody2D.AddForce(_dir - transform.position * Speed);
				
				_time = 0;
			}
			//Debug.Log(_dir);
		}
	}
	
	if(Hp <= 0)
	{
		Destroy(this.gameObject, 0.1f);
	}
}

function Attack()
{
	if(attackTimer < _time)
	{
		for(var p = 0; p < _player.length; p++)
		{
			_player[p].GetComponent(PlayerStats).Hp -= aWeapon.GetComponent(Weapon).atkP;
			_player[p].GetComponent(PlayerStats).Hit();
		}
		
		_time = 0;
		
	}
	//Debug.Log("_time: " + _time);
}

