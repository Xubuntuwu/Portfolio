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

function rotateCarousel() {
  let angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}
setInterval(() => {
    if(!paused){
        selectedIndex++;
        rotateCarousel();
    }
}, 1500);

scene.addEventListener('mouseenter',()=>{
    paused=true;
    const frontcell = carousel.querySelector(`.carousel__cell:nth-child(${selectedIndex%11+1})`);
    // frontcell.classList.add('highlight');
    frontcell.style.transform = `${frontcell.style.transform} scale(1.2)`;

})
scene.addEventListener('mouseleave',()=>{
    const frontcell = carousel.querySelector(`.carousel__cell:nth-child(${selectedIndex%11+1})`);
    // frontcell.classList.remove('highlight');
    frontcell.style.transform = `${frontcell.style.transform} scale(${1/1.2})`;
    paused=false;
})

function changeCarousel() {
  cellCount = 11;
  theta = 360 / cellCount;
  let cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( let i=0; i < cells.length; i++ ) {
    let cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      let cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

changeCarousel();
