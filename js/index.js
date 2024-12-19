// Get the image element
const img = document.getElementById('myImage');

// Add an event listener to a button or any other element
document.getElementById('myButton').addEventListener('click', () => {
  // Add a class to the image element to trigger the transition
  img.classList.add('appear');
});