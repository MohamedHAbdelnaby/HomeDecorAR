//@input SceneObject addFurnitureButton
//@input SceneObject furnitureMenu
//@input SceneObject tableMesh
//@input SceneObject chairMesh
//@input SceneObject binMesh
//@input SceneObject[] menuItemsToHide

// Function to hide all specified menu items
function hideMenuItems() {
    for (var i = 0; i < script.menuItemsToHide.length; i++) {
        var item = script.menuItemsToHide[i];
        if (item) {
            item.enabled = false;
        }
    }
}

// Function to show the furniture menu
function showFurnitureMenu() {
    hideMenuItems(); // Hide other menu items
    if (script.mainMenu) {
        script.mainMenu.enabled = false; // Hide the main menu
    }
    if (script.furnitureMenu) {
        script.furnitureMenu.enabled = true; // Show the furniture menu
    }
    
}

// Function to show the table mesh
function showTableMesh() {
    
    if (script.tableMesh) {
        script.tableMesh.enabled = true;
    }
}

// Function to show the chair mesh
function showChairMesh() {
    
    if (script.chairMesh) {
        script.chairMesh.enabled = true;
    }
}

// Function to show the bin mesh
function showBinMesh() {

    if (script.binMesh) {
        script.binMesh.enabled = true;
    }
}

// Helper function to hide all furniture meshes
function hideAllMeshes() {
    if (script.tableMesh) {
        script.tableMesh.enabled = false;
    }
    if (script.chairMesh) {
        script.chairMesh.enabled = false;
    }
    if (script.binMesh) {
        script.binMesh.enabled = false;
    }
}

// Function to initialize the state of the app
function initialize() {

    // Explicitly show the main menu
    if (script.mainMenu) {
        script.mainMenu.enabled = true;
    }
    // Ensure the furniture menu is hidden
    if (script.furnitureMenu) {
        script.furnitureMenu.enabled = false;
    }
    hideAllMeshes();
}

// Assign the functions to the script for easier linking
script.showFurnitureMenu = showFurnitureMenu;
script.showTableMesh = showTableMesh;
script.showChairMesh = showChairMesh;
script.showBinMesh = showBinMesh;

// Call initialize to set up the initial state
initialize();