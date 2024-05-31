let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-container');
searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

let cartItem = document.querySelector('.search-form');
searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-containers');
searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    avbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}