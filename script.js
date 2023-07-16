const Hamburger = document.getElementById('hamburger')
const Closer = document.getElementById('closer')
const Menu = document.getElementById('nav-menu')

// function showMenu (){
//     Menu.classList.toggle('show')
// }

function showMenu() {
  Menu.classList.toggle('show');
  Closer.classList.toggle('show');
  Hamburger.classList.toggle('hide');



  const menuItems = Menu.getElementsByTagName('li');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeMenu);
  }

//   document.addEventListener('click', function(event) {
//     const targetElement = event.target;
//     if (!Menu.contains(targetElement) && !targetElement.matches('#hamburger')) {
//       closeMenu();
//     }
//   });
}

function closeMenu() {
  Menu.classList.remove('show');
  Closer.classList.remove('show')
  Hamburger.classList.remove('hide')
  
}






