// Function to change the heading text
function changeText() {
    const heading = document.getElementById('main-heading');
    heading.textContent = "You clicked the button!";
  }
  
  // Function to change the background color of the box
  function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = 'lightgreen';
  }
  
  // Function to toggle (add/remove) the box
  function toggleBox() {
    const box = document.getElementById('box');
    box.classList.toggle('hidden');
  }
  