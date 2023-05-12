// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal element
    var modal = document.getElementById("image-modal");
  
    // Get the modal content element
    var modalContent = modal.querySelector(".modal-content");
  
    // Get all grid items
    var gridItems = document.querySelectorAll(".grid-item");
  
    // Get the close button
    var closeButton = modal.querySelector(".close-button");
  
    // Function to open the modal and display the clicked image
    function openModal(imageSrc) {
      modalContent.src = imageSrc;
      modal.style.display = "block";
    }
  
    // Function to close the modal
    function closeModal() {
      modal.style.display = "none";
    }
  
    // Attach click event listeners to each grid item
    gridItems.forEach(function(gridItem) {
      var image = gridItem.querySelector("img");
      var imageUrl = image.getAttribute("src");
  
      // Open the modal with the clicked image
      gridItem.addEventListener("click", function(event) {
        event.preventDefault();
        openModal(imageUrl);
      });
    });
  
    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", closeModal);
  
    // Close the modal when the user clicks outside the modal content
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });