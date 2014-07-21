using UnityEngine;
using System.Collections;

public class SunLight : MonoBehaviour 
{
	public float maxLight;
	public float minLight;

	public float maxFlare;
	public float minFlare;

	public bool giveLight = false;

	// Use this for initialization
	void Start () 
	{
		if(GetComponent<Light>() != null)
		{
			giveLight = true;
		}
	}
	
	// Update is called once per frame
	void Update () 
	{
		if(giveLight == false)
			this.GetComponent<Light>().intensity = 0.0f;
	}
}
