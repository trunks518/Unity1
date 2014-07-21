using UnityEngine;
using System.Collections;

public class CharacterAnim : MonoBehaviour {


    public bool IsPlayer = false;
	// Use this for initialization
	void Awake () 
	{
		animation.Play("idle");
	}
	
	// Update is called once per frame
	void Update () 
	{
        if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.S))
        {
            animation.Play("walk");
        }

        else
        {
            animation.Play("idle");
        }
	}
}
