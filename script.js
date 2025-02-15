const heart = document.querySelector('.heart');
const numberOfHearts = 100; // Change this number
const maxDelay = 7000;
const button = document.getElementById('button1');
const yesButton = document.getElementById('yesButton');

for (let i = 0; i < numberOfHearts; i++) {
  // Generate a random delay between 0 and maxDelay
  const delay = Math.random() * maxDelay;
  setTimeout(() => {
    const clone = heart.cloneNode(true);
    clone.style.left = Math.random() * 100 + 'vw';
    clone.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(clone);
  }, delay);
}

button.addEventListener('click', () => {
  // Get the screen dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Get the button dimensions
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Calculate the button's current position relative to the viewport
  const buttonRect = button.getBoundingClientRect();
  const buttonLeft = buttonRect.left;
  const buttonTop = buttonRect.top;

  // Calculate maximum allowed movement
  const maxMoveX = screenWidth - buttonWidth - buttonLeft; // Maximum movement to the right
  const maxMoveY = screenHeight - buttonHeight - buttonTop; // Maximum movement to the bottom

  // Ensure the button doesn't move outside the screen
  const randomX = Math.floor(Math.random() * (maxMoveX - 0)); // Random X within limits
  const randomY = Math.floor(Math.random() * (maxMoveY - 0)); // Random Y within limits

  // Move the button using transform: translate()
  button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

yesButton.addEventListener('click', () => {
  window.location.href = 'newpage.html'; // Replace with the URL of the page you want to navigate to
});