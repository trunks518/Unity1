#pragma strict
/************************************
*		Tile Generator				*
*	By: Justin Howell / Quill18		*
*	Date: June 01, 2014 : 1335		*
*									*
************************************/

var Tile : GameObject;   //For debugging only!
var Tiles : GameObject[];
var CameraSpeed : float;
public var TotalTiles : int;

function Start() 
{
	BuildChunk();
}

function Update() 
{

}

function BuildChunk()
{
	var MaxY = Mathf.CeilToInt(Camera.main.orthographicSize) * 2;
	var MaxX = Mathf.CeilToInt(Screen.width / Screen.height * MaxY) * 2;

	for(var x = Mathf.FloorToInt(Camera.main.transform.position.x) - MaxX / 2 ; x < Mathf.CeilToInt(MaxX / 2) + 1; x++) // Calculates the Screen x size
	{
		for(var y = Mathf.FloorToInt(Camera.main.transform.position.y) - MaxY / 2; y < Mathf.CeilToInt(MaxY / 2) + 1; y++)  // Calculates the Screen y size
		{
			var go = gameObject.Instantiate(Tile);
			go.transform.position = new Vector3(x, y, 0);
			go.name = "X: " + x + ", Y: " + y;
			TotalTiles ++;
		}
	}
}