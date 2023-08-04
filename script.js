const divs = document.querySelectorAll('.image');

let dragSrcElement = null;

function handleDragStart(e) {
  dragSrcElement = this;
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcElement !== this) {
    // Swap background image URLs
    const tempBackground = this.style.backgroundImage;
    this.style.backgroundImage = dragSrcElement.style.backgroundImage;
    dragSrcElement.style.backgroundImage = tempBackground;
  }

  return false;
}

divs.forEach(div => {
  div.addEventListener('dragstart', handleDragStart, false);
  div.addEventListener('dragover', handleDragOver, false);
  div.addEventListener('drop', handleDrop, false);
});
