#pragma strict
@script RequireComponent(Rigidbody2D)
@script RequireComponent(BoxCollider2D)
@script RequireComponent(Animator)

var NPC : GameObject;
var ShopRange : float = 0.3f;
var NpcMoney : float = 20.0f;
var NpcItems : String[];
var Talk = false;
var Shopping = false;
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
			Talk = true;
		}
		else
		{
			Talk = false;
		}
	}
}


function OnGUI()
{
	if(Talk == true)
	{
		if(GUI.Button(Rect(Screen.width/10, 0, 75, 25), "Shop?"))
		{
			Shopping = true;
		}
	}
	
/////////////////////////////////////////////////////////Begin The Shop Function///////////////////////////////////////////////////////

	if(Shopping == true)
	{
		Talk = false;
		
		if(GUI.Button(Rect(Screen.width/10, 0, 75, 25), "Buy"))
		{
			
		}
		
		if(GUI.Button(Rect(Screen.width/10, 25, 75, 25), "Sell"))
		{
			
		}
		
		if(GUI.Button(Rect(Screen.width/10, 50, 75, 25), "Exit"))
		{
			Shopping = false;
		}
	}
////////////////////////////////////////////////////End The Shop Function/////////////////////////////////////////////////////////////
	
}
