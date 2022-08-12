const technologies = document.querySelector('.main-technologies-container');
const scene = document.querySelector('.scene');
const carousel = document.querySelector('.carousel');
const cells = carousel.querySelectorAll('.carousel__cell');
let selectedIndex = 0;
let cellWidth = carousel.offsetWidth;
let cellHeight = carousel.offsetHeight;
let isHorizontal = true;
let rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
let radius, theta;
let paused = false;
let hover = false;
let grid = false;

function rotateCarousel() {
  let angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}
setInterval(() => {
    if(!paused && !grid){
        selectedIndex++;
        rotateCarousel();
    }
}, 1500);

scene.addEventListener('mouseenter',()=>{
  // nothing changes during a grid
  if(grid===false){
    paused=true;
    hover = true;
    const frontcell = carousel.querySelector(`.carousel__cell:nth-child(${selectedIndex%11+1})`);
    frontcell.style.transform = `${frontcell.style.transform} scale(1.2)`;
  }
})

scene.addEventListener('mouseleave',()=>{
  if(grid===false){
    const frontcell = carousel.querySelector(`.carousel__cell:nth-child(${selectedIndex%11+1})`);
    frontcell.style.transform = `${frontcell.style.transform} scale(${1/1.2})`;
    paused=false;
    hover= false;
  }
})

function swipeDetection(){
  let touchstartx= 0;
  let touchendx= 0;
  
  function touchDirection(){
    if(touchendx < touchstartx){
      // left
      return true;
    }
  }
  scene.addEventListener('touchstart',(e)=>{
    if(grid===false){
      touchstartx = e.changedTouches[0].screenX;
    }
  })
  
  scene.addEventListener('touchend',(e)=>{
    if(grid===false ){
      touchendx = e.changedTouches[0].screenX;
      let touchdistance = Math.abs(touchendx - touchstartx);
      let touchdirection = touchDirection();
      paused= true;
      if(touchdistance>50){
        selectedIndex = touchdirection===true ? selectedIndex + 1 : selectedIndex - 1;
        rotateCarousel();
        setTimeout(() => {
          paused=false;
        }, 1500);
      }
    }
  })
}

swipeDetection();

function changeCarousel() {
  cellCount = 11;
  theta = 360 / cellCount;
  let cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( let i=0; i < cells.length; i++ ) {
    let cell = cells[i];
    if ( i < cellCount && grid ===false) {
      let cellAngle = theta * i;

      scene.style.width='350px';
      scene.style.height='240px';
      
      carousel.style.position = 'absolute';
      carousel.style.width='320px';
      carousel.style.height='200px';
      carousel.style.flexWrap='no-wrap';
      carousel.style.gap='0';
      
      cell.style.position = 'absolute';
      cell.style.width = '320px';
      cell.style.height = '200px';
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
      
      
      rotateCarousel();
    } 
    if (grid === true) {
      scene.style.width='100%';
      scene.style.height='100%';

      carousel.style.width='100%';
      carousel.style.height='100%';
      carousel.style.flexWrap='wrap';
      carousel.style.gap='1rem';
      carousel.style.position = 'relative';

      cell.style.transform = 'none';
      cell.style.position = 'relative';
      cell.style.width = '300px';
      cell.style.height = '180px';

      carousel.style.transform = 'translateZ(0) ' + 
      rotateFn + '(0)';

    } 
  }
}

changeCarousel();

const prevButton = document.querySelector('.main-technologies-container .controls button.previous');
prevButton.addEventListener( 'click', function() {
  if(!grid){
    paused= true;
    selectedIndex--;
    rotateCarousel();
    setTimeout(() => {
      if(!hover){
        paused=false;
      }  }, 1500);
  }
});

const nextButton = document.querySelector('.main-technologies-container .controls button.next');
nextButton.addEventListener( 'click', function() {
  if(!grid){
    paused= true;
    selectedIndex++;
    rotateCarousel();
    setTimeout(() => {
      if(!hover){
        paused=false;
      }
    }, 1500);
  }
});

const fullviewButton = document.querySelector('.main-technologies-container .controls button.fullview');
fullviewButton.addEventListener( 'click', function() {
  nextButton.classList.toggle('inactive');
  prevButton.classList.toggle('inactive');
  paused= !paused;
  selectedIndex++;
  grid = !grid;
  changeCarousel();
  technologies.scrollIntoView({block: 'start', behavior:'smooth'});
});