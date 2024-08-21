// Function to handle touch scroll interactions
function handleTouchScroll() {
    const items = document.querySelectorAll('.resume-item');
    
    items.forEach(item => {
      item.addEventListener('touchstart', function () {
        this.classList.add('touched');
      });
  
      item.addEventListener('touchend', function () {
        this.classList.remove('touched');
      });
    });
  }
  
  // Call the function on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    handleTouchScroll();
  });
  