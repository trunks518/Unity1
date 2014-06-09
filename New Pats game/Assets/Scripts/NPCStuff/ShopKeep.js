#pragma strict
@script RequireComponent(Rigidbody2D)
@script RequireComponent(BoxCollider2D)
@script RequireComponent(Animator)

var NPC : GameObject;
var ShopRange : float = 0.3f;
//var NpcTalkBubble : Sprite;
var NpcMoney : float = 20.0f;
var NpcItems : String[];

var rot : Quaternion;

function Start()
{
	NPC = this.gameObject;
}

function Update()
{
	rot = Quaternion.identity;
	var _player : GameObject[] = gameObject.FindGameObjectsWithTag("Player");

	for(var p = 0; p < _player.length; p++)
	{
		var _distance = Vector2.Distance(_player[p].transform.position, transform.position);
		if(_distance <= ShopRange)
		{
			_player[p].GetComponent(PlayerStats).IsBusy = true;
			Talk();
		}
	}
}

function Talk()
{
	Debug.Log("Player is talking with the Shop.");
}