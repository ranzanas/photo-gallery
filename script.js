const boxes = document.querySelectorAll('.photo-box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    boxes.forEach(b => {
      b.style.filter = 'blur(3px)';
      b.style.transform = 'scale(1)';
    });
    box.style.filter = 'none';
    box.style.transform = 'scale(1.05)';

  });

  box.addEventListener('mouseleave', () => {
    boxes.forEach(b => {
      b.style.filter = 'none';
      b.style.transform = 'scale(1)';
   
    });
  });
});
