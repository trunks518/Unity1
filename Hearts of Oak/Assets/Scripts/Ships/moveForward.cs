using UnityEngine;
using System.Collections;

public class moveForward : MonoBehaviour {

	public float speed = 0;
	public float currentSpeed = 0.0f;
	public int appliedForce = 0;
	 
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		if (this.transform.parent) {
			GameObject pObject = this.transform.parent.gameObject;
			if (pObject.rigidbody) {
				changeForce(pObject.rigidbody);
				pObject.rigidbody.AddRelativeForce (new Vector3 (0, 0, -appliedForce));
			}
		} else {
			if (rigidbody) {
				changeForce (rigidbody);
				rigidbody.AddRelativeForce(new Vector3 (0, 0, -appliedForce));
			}
		}
	}

	void changeForce (Rigidbody rb) {
		currentSpeed = rb.velocity.magnitude;
		if (currentSpeed > speed) {appliedForce -= (int)(rigidbody.mass / 50); };
		if (currentSpeed < speed) {appliedForce += (int)(rigidbody.mass / 50); };
	}
}
