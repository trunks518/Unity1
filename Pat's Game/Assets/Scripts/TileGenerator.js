#pragma strict
var Tile : GameObject;   //For debugging only!
var Tiles : GameObject[];
var MaxX : int;
var MaxZ : int;
public var TotalTiles : int;

function Start () 
{
	Build();
}

function Update () 
{
	
}

function Build()
{
	for(var z = 0; z < Mathf.CeilToInt(Camera.main.orthographicSize); z++)
	{
		for(var x = 0; x < Mathf.CeilToInt(Screen.width); x++);
		{
			Instantiate(Tile, new Vector3(x, 0, z), Quaternion.identity);
			Debug.Log("X is:" + x);
			TotalTiles++;
		}
	}
}