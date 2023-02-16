const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-15-1.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


//Korean Foodlist
const koreanFoodList = menu.filter(foodList => foodList.category.includes("Korea")).map(obj => ({ "id": obj.id, "title": obj.title, "category": obj.category, "price": obj.price, "img": obj.img, "desc": obj.desc }));
//Japan Foodlist
const japanFoodList = menu.filter(foodList => foodList.category.includes("Japan")).map(obj => ({ "id": obj.id, "title": obj.title, "category": obj.category, "price": obj.price, "img": obj.img, "desc": obj.desc }));
//China Foodlist
const chinaFoodList = menu.filter(foodList => foodList.category.includes("China")).map(obj => ({ "id": obj.id, "title": obj.title, "category": obj.category, "price": obj.price, "img": obj.img, "desc": obj.desc }));

// BUTTONS INNERHTML
function innerHTML() {
  let buttons = document.getElementsByClassName("btn-container")[0];
  let text = ["All", "Korea", "Japan", "China"];
  text.forEach(function (el) {
    var button = document.createElement("button");
    button.className = "btn btn-outline-dark btn-item";
    button.setAttribute('onclick', `${el}()`)
    button.innerText = el;
    buttons.appendChild(button);
  });
}
innerHTML();


menuItems = document.getElementsByClassName('section-center row')[0];

//DEFAULT INNERHTML 

function defaultFunction(foodListDOM) {
  let items = document.createElement('div');
  menuItems.appendChild(items);
  items.className = "menu-items col-lg-6 col-sm-12";
  let image = document.createElement('img');
  image.className = "photo"
  image.setAttribute('src', `${foodListDOM.img}`);
  items.appendChild(image);
  let menuInfo = document.createElement('div');
  menuInfo.className = "menu-info";
  items.appendChild(menuInfo);

  menuTitle = document.createElement('div');
  menuTitle.className = 'menu-title';
  menuInfo.appendChild(menuTitle);

  titleH4 = document.createElement('h4');
  titleH4.innerHTML = (foodListDOM.title);
  menuTitle.appendChild(titleH4);

  priceH4 = document.createElement('h4');
  priceH4.innerHTML = (foodListDOM.price);
  priceH4.className = ('price')
  menuTitle.appendChild(priceH4);


  menuText = document.createElement('div');
  menuText.className = 'menu-text';
  menuText.innerHTML = (foodListDOM.desc);
  menuInfo.appendChild(menuText);
};

// ALL THE MENU
const menuAll = document.getElementsByClassName('menu')[0];

// KOREAN MENU 
function Korea() {
  menuItems.remove();
  menuItems = document.createElement('div');
  menuItems.className = 'section-center row'
  menuAll.appendChild(menuItems);
  koreanFoodList.forEach(function (e) {
    defaultFunction(e);
  });
};

// JAPAN MENU 
function Japan() {
  menuItems.remove();
  menuItems = document.createElement('div');
  menuItems.className = 'section-center row'
  menuAll.appendChild(menuItems);
  japanFoodList.forEach(function (e) {
    defaultFunction(e);
  });
};

// CHINA MENU 
function China() {
  menuItems.remove();
  menuItems = document.createElement('div');
  menuItems.className = 'section-center row'
  menuAll.appendChild(menuItems);
  chinaFoodList.forEach(function (e) {
    defaultFunction(e);
  });
};

// ALL MENU 
function All() {
  menuItems.remove();
  menuItems = document.createElement('div');
  menuItems.className = 'section-center row'
  menuAll.appendChild(menuItems);
  menu.forEach(function (e) {
    defaultFunction(e);
  });
};
