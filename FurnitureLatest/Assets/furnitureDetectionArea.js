//@input Component.DeviceTracking deviceTracking
//@input Component.Text3D textElement 

if (script.deviceTracking) {
   
    script.deviceTracking.worldOptions.nativePlaneTrackingType = NativePlaneTrackingType.Horizontal;
}

// Function to handle when planes are added
function onPlanesAdded(eventData) {
    if (eventData && eventData.planes) {
        print("Planes detected: " + eventData.planes.length); 
        eventData.planes.forEach(function (plane) {
            var size = plane.size;
            var width = size.x;
            var height = size.z;

            // Display the dimensions
            displayDimensions(width, height);
        });
    } else {
        print("No planes detected in the event data.");
    }
}

// Function to handle when planes are updated
function onPlanesUpdated(eventData) {
    if (eventData && eventData.planes && eventData.planes.length > 0) {
        print("Updating planes: " + eventData.planes.length);
        var plane = eventData.planes[0]; // Take the first plane 
        var size = plane.size;
        var width = size.x;
        var height = size.z;

        // Update the dimensions in real-time
        displayDimensions(width, height);
    } else {
        print("No planes available in the update event.");
        script.textElement.enabled = false; // Hide the text if no plane is present
    }
}

// Function to display plane dimensions
function displayDimensions(width, height) {
    if (script.textElement) {
        var dimensionsText = "Plane Dimensions:\nWidth: " + width.toFixed(2) + "m\nDepth: " + height.toFixed(2) + "m";
        script.textElement.text = dimensionsText;
        script.textElement.enabled = true; // Make sure the text element is visible
    } else {
        print("Text element is not assigned correctly.");
    }
}

// Function to handle when planes are removed
function onPlanesRemoved(eventData) {
    if (script.textElement) {
        script.textElement.enabled = false; // Hide the text when no planes are detected
    } else {
        print("Text element is not assigned correctly.");
    }
}

// Register the plane tracking events correctly
script.createEvent("WorldTrackingPlanesAddedEvent").bind(onPlanesAdded);
script.createEvent("WorldTrackingPlanesRemovedEvent").bind(onPlanesRemoved);
script.createEvent("WorldTrackingPlanesUpdatedEvent").bind(onPlanesUpdated);