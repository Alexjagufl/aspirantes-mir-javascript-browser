const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
  ];

// Función recursiva para crear el menú
function createMenu(menuData, parentElement) {
  const ul = document.createElement('ul');
  ul.classList.add('menu');

  menuData.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.link; 
    li.appendChild(link);

// Agregar clase "active" al hacer clic en un enlace del menú
    link.addEventListener('click', (event) => {
    event.preventDefault();
    const activeElement = document.querySelector('.menu .active');
      if (activeElement) {
        activeElement.classList.remove('active');
        }
      link.classList.add('active');
    });

    if (item.items.length > 0) {
// Agregar botón para expandir/contraer submenús
    const button = document.createElement('button');
    button.textContent = '+';
    button.addEventListener('click', (event) => {
    event.stopPropagation();
    li.classList.toggle('expanded');
      if (li.classList.contains('expanded')) {
        button.textContent = '-';
          } else {
            button.textContent = '+';
              }
    });
    li.appendChild(button);
// Llamar recursivamente a la función para crear el submenú
    const submenu = document.createElement('div');
    submenu.classList.add('submenu');
    createMenu(item.items, submenu);
      li.appendChild(submenu);
    }
  ul.appendChild(li);
});
  parentElement.appendChild(ul);
}

const menuContainer = document.getElementById('menu-container');
createMenu(menu, menuContainer);