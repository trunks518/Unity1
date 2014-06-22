#pragma strict
var QuestName : String;
var QuestItem : GameObject;
var QuestTime : float;

var QuestCompleted = false;

function Start()
{
	
}

function OnTriggerEnter2D(col : Collider2D)
{
	if(col.tag == "Player")
	{
		Debug.Log("Player entered");
	}
}

function Update()
{
	var timer = Time.deltaTime;
	
	if(timer > QuestTime)
	{
		if(QuestCompleted == false)
		{
			Debug.Log("You failed the quest");
		}
	}
}  