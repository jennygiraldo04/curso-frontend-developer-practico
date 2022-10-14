const menuEmail= document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const  mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const asideClosed = aside.classList.contains ('inactive');
    if(!asideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideClosed = aside.classList.contains ('inactive');
    if(!asideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')}


function toggleCarritoAside(){
    const mobilMenuClosed = mobileMenu.classList.contains('inactive');
    if(!mobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')}
    

    const productList=[];
    productList.push({
        name: 'Bike',
        price:120,
        image: ' https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

    }); 

    productList.push({
        name: 'Compu',
        price: 400,
        image: ' https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg',

    }); 

    productList.push({
        name: 'Iphone',
        price: 800,
        image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/158444-phones-review-apple-iphone-13-review-images-image1-clh15n2ocg.jpg',
    });

    productList.push({
        name: 'Cuerda',
        price: 30,
        image:'https://kingsbox.com/blog/wp-content/uploads/2019/11/corda-per-saltare-in-alluminio.jpg',
    });



    // <!-- <div class="cards-container">

    //   <div class="product-card">
    //     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    //     <div class="product-info">
    //       <div>
    //         <p>$120,00</p>
    //         <p>Bike</p>
    //       </div>
    //       <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="">
    //       </figure>
    //     </div>
    //   </div> -->
    function renderProducts (arr) {
        for (product of arr) {
            const productCard = document.createElement('div');
             productCard.classList.add('product-card');
    
             const productImg= document.createElement('img');
             productImg.setAttribute('src', product.image);
    
             const productInfo = document.createElement('div');
             productInfo.classList.add('product-info');
    
             const productInfoDiv = document.createElement('div');
    
             const productPrice = document.createElement('p');
             productPrice.innerText = '$' + product.price;
    
             const productName= document.createElement ('p');
             productName.innerText = product.name;
    
             productInfoDiv.appendChild(productPrice);
             productInfoDiv.appendChild(productName);
    
             const productInfoFigure = document.createElement('figure');
             const productImgCart = document.createElement('img');
             productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
             productInfoFigure.appendChild(productImgCart);
    
             productInfo.appendChild(productInfoDiv);
             productInfo.appendChild(productInfoFigure);
    
             productCard.appendChild(productImg);
             productCard.appendChild(productInfo);
    
             cardsContainer.appendChild(productCard);
             
             
    
             
        }
    }

    renderProducts(productList);
    

    
