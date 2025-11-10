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

const hambar = document.querySelector(".hambar");
const navbar = document.querySelector(".navbar")

hambar.addEventListener("click", ()=>{
  hambar.classList.toggle("active"); 
  navbar.classList.toggle("active");
})




const showMoreButton = document.querySelector(".showMoreButton");

const displayPhotos = async () =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

   let start = 0;
   batchSize = 10;
   let end = start + batchSize 
   currentBatch = data.slice(start, end);
   currentBatch.forEach((cb) => 
   {
     console.log(cb)
     const galleryContainer = document.querySelector(".galleryContainer");
     const galleryBox = document.createElement('div');
     const gallery = document.createElement('img');
     gallery.src = "./assests/images/landscape.jpg";
     galleryContainer.appendChild(galleryBox).appendChild(gallery);
   })
}

showMoreButton.addEventListener("click", displayPhotos);