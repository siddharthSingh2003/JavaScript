// javascript program to insert a node
// in a BST

// Given Node
class Node
{
	
	constructor(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}

}


// Function to insert a new node with
// given key in BST
function insert(node, key)
{
	
	// If the tree is empty, return a new node
	if (node == null)
		return new Node(key);

	// Otherwise, recur down the tree
	if (key < node.key)
	{
		node.left = insert(node.left, key);
	}
	else if (key > node.key)
	{
		node.right = insert(node.right, key);
	}

	// Return the node pointer
	return node;
}

// Function to do inorder traversal of BST
function inorder(root)
{
	if (root != null) 
	{
		inorder(root.left);
		console.log(root.key + " ");
		inorder(root.right);
	}
}

// Driver Code

/* Let us create following BST 
		50 
	/	 \ 
	30	 70 
	/ \ / \ 
20 40 60 80 
*/
let root = null;

// Inserting value 50
root = insert(root, 50);

// Inserting value 30
root = insert(root, 30);

// Inserting value 20
root = insert(root, 20);

// Inserting value 40
root = insert(root, 40);

// Inserting value 70
root = insert(root, 70);

// Inserting value 60
root = insert(root, 60);

// Inserting value 80
root = insert(root, 80);

// Print the BST
inorder(root);


// This code is contributed by Arushi Jindal.
