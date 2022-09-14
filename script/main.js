const popUp = document.querySelector('.pop_up');
const popUppers = document.querySelectorAll('.pop_upper');

  popUppers.forEach(button => {
    button.addEventListener('click', () => {
      popUp.classList.add('pop_up_active');       
      });
  });

  popUp.addEventListener('mousedown', (event) => {
    if (event.target === popUp) {
    popUp.classList.remove('pop_up_active');}   
  });

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {  
      popUp.classList.remove('pop_up_active');
   }
});


