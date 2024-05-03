// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values



var inorderTraversal = function(root) {
    let result = [];
    
    function dfs(node) {
        if (node === null) {
            return;
        }
        
        dfs(node.left); // Traverse left subtree
        result.push(node.val); // Visit current node
        dfs(node.right); // Traverse right subtree
    }
    
    dfs(root); // Start traversal from the root node
    return result;
};