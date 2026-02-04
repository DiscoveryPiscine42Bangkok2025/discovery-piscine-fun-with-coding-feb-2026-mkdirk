const balloon = document.getElementById('balloon');
const ORIGINAL_SIZE = 200;
let currentSize = 200; 
let colorIndex = 0;     
const colors = ['red', 'green', 'blue']; 

balloon.addEventListener('click', () => {
    if (currentSize + 10 > 420) {
    currentSize = ORIGINAL_SIZE;
    colorIndex = 0;
  } else {
    currentSize += 10;
    colorIndex = (colorIndex + 1) % colors.length;
  }
  balloon.style.width = currentSize + 'px';
  balloon.style.height = currentSize + 'px';
  balloon.style.backgroundColor = colors[colorIndex];
});