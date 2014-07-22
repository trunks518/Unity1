#pragma strict
var Music : AudioClip[];

function Start()
{
	for(var m = 0; m < Music.length; m++)
	{
		audio.PlayOneShot(Music[m]);
	}
}

function Update()
{
	
}