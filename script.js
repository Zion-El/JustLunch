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

  // document.addEventListener('click', function(event) {
  //   const targetElement = event.target;
  //   if (!Menu.contains(targetElement) && !targetElement.matches('#hamburger')) {
  //     closeMenu();
  //   }
  // });
}

function closeMenu() {
  Menu.classList.remove('show');
  Closer.classList.remove('show')
  Hamburger.classList.remove('hide')
  
}


const profiler = document.getElementById('drawer')

function showProfiler() {
  profiler.classList.toggle('show');

  const menuItems = profiler.getElementsByTagName('li');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeProfiler);
  }

  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!profiler.contains(targetElement) && !targetElement.matches('#drawer')) {
      closeMenu();
    }
  });
}

function closeProfiler() {
  profiler.classList.remove('show');
  
}




    const index = document.getElementById('home')
    const gallery = document.getElementById('gallery')
    const menu = document.getElementById('menu')
    const contact = document.getElementById('contact')


function indexAlone() {
    home.classList.remove('hide');
    menu.classList.add('hide');
    // transaction.classList.toggle('hide');
    contact.classList.add('hide');
}

// function galleryAlone() {
//     contact.classList.remove('hide');
//     menu.classList.add('hide');
//     // transaction.classList.toggle('hide');
//     home.classList.add('hide');
// }
function menuAlone() {
    contact.classList.add('hide');
    menu.classList.remove('hide');
    // transaction.classList.toggle('hide');
    home.classList.add('hide');
}
function contactAlone() {
    menu.classList.add('hide');
    contact.classList.remove('hide');
    // transaction.classList.toggle('hide');
    home.classList.add('hide');
}





