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
var TotalTiles : ArrayList;

function Awake() 
{
	TotalTiles = new ArrayList();
	BuildChunk();
}

function BuildChunk()
{
	var Chunk = Random.Range(0, Tiles.length);
	var theTile : GameObject;
	if(Chunk == 0)
	{
		theTile = Tiles[0];
	}
	if(Chunk == 1)
	{
		theTile = Tiles[1];
	}
	if(Chunk == 2)
	{
		theTile = Tiles[2];
	}
	if(Chunk == 3)
	{
		theTile = Tiles[3];
	}
	
	var n = 0;
	var MaxY = Mathf.CeilToInt(Camera.main.orthographicSize) * 2;
	var MaxX = Mathf.CeilToInt(Screen.width / Screen.height * MaxY) * 2;

	for(var x = Mathf.FloorToInt(Camera.main.transform.position.x) - MaxX / 2 ; x < Mathf.CeilToInt(MaxX / 2) + 1; x++) // Calculates the Screen x size
	{
		for(var y = Mathf.FloorToInt(Camera.main.transform.position.y) - MaxY / 2; y < Mathf.CeilToInt(MaxY / 2) + 1; y++)  // Calculates the Screen y size
		{
			var go : GameObject = GameObject.Instantiate(theTile);
			go.transform.position = new Vector3(x, y, 0);
			n++;
			go.name = "Tile" + n;
			TotalTiles.Add(go.gameObject);
		}
	}
	
	//Debug.Log("Total Tiles in scene: " + TotalTiles.Count);
}