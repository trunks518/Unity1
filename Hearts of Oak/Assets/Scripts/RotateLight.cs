using UnityEngine;
using System.Collections;

public class RotateLight : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	void Update() {
		// Spin the object around the world origin at 20 degrees/second.
		transform.RotateAround (Vector3.zero, Vector3.up, 5 * Time.deltaTime);
	}
}
