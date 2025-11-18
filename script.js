const hambar = document.querySelector(".hambar");
const navbar = document.querySelector(".navbar")

hambar.addEventListener("click", ()=>{
  hambar.classList.toggle("active"); 
  navbar.classList.toggle("active");
})


//LOADER FUNCTIONALITY  

const loader = document.querySelector(".loader");

const showLoader = () =>{
  loader.style.display = "block";
}

const hideLoader = () =>{
  loader.style.display = "none";
}

//show more button
const showMoreButton = document.querySelector(".showMoreButton");
const images = ['./assests/images/lion.jpg', './assests/images/coffee.jpg', './assests/images/statueofliberty.jpg','./assests/images/tea.jpg','./assests/images/redpanda.png','./assests/images/kangaroo.jpg','./assests/images/jumla.jpg','./assests/images/italy.jpg','./assests/images/denmark.jpg','./assests/images/cat.jpg'];

let start = 0;
batchSize = 10;

const displayPhotos = async () =>{

  showLoader();

  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${batchSize}`);
  const data = await response.json();
  hideLoader();

  const galleryContainer = document.querySelector(".galleryContainer");

  images.map((path, index) =>{
    const galleryBox = document.createElement('div');
    galleryBox.className = 'gallery-media';
    const gallery = document.createElement('img');
    gallery.src = path;

    gallery.alt = data[index].title;
    const galleryTitle = document.createElement('p');

    galleryTitle.innerHTML = data[index].title;
    galleryContainer.appendChild(galleryBox);
    galleryBox.appendChild(gallery);
    galleryBox.appendChild(galleryTitle);
    

  })

  start = start + batchSize;

  const boxes = document.querySelectorAll('.gallery-media, .photo-box ');

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
}

showMoreButton.addEventListener("click", displayPhotos);


