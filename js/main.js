
var overlay = document.getElementById("overlay");

//  Open the overlay and show a specific project
function openOverlay(projectId) {
    overlay.style.display = "flex";

    var allProjects = document.querySelectorAll('.overlay-project');
    allProjects.forEach(function(project) {
        project.classList.add('hidden'); 
    });

    var selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.classList.remove('hidden'); 
    }
}

// Close the overlay
function closeOverlay() {
    overlay.style.display = "none"; 
}

