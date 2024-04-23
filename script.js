
window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Create an entity for the glTF model positioned slightly north of the initial GPS position
            const entity = document.createElement("a-entity");
            entity.setAttribute("gltf-model", "url(./assets/venus/scene.gltf)"); // Path to your glTF model
            entity.setAttribute("scale", "1 1 1"); // Adjust scale as needed
            entity.setAttribute("position", "0 -5 -20"); // Default position (adjust if necessary)
            entity.setAttribute("rotation", "0 0 0"); // Default rotation (adjust if necessary)
            entity.setAttribute("gps-new-entity-place", `latitude: ${e.detail.position.latitude + 0.001}; longitude: ${e.detail.position.longitude}`); // Slight north adjustment
            document.querySelector("a-scene").appendChild(entity);
            testEntityAdded = true;
        }
    });
};
