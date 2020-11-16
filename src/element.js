
export default (price, name) => {
    const wrapper =  document.createElement('div')
    const retailname = document.createElement('h2')
    retailname.innerText = name;
    const storeWrapper = document.createElement('div');
    storeWrapper.className = 'storewrap'
    const storeIcon = document.createElement('p');
    storeIcon.innerText = 'Amazon Icon'
    const productprice = document.createElement('p')
    productprice.innerText = price;
    const cart = document.createElement('p')
    cart.innerText = 'Cart'
    wrapper.appendChild(retailname);
    storeWrapper.appendChild(storeIcon);
    storeWrapper.appendChild(productprice);
    storeWrapper.appendChild(cart);
    wrapper.appendChild(storeWrapper);;
    return wrapper
}

// export default (pic,title, reviews) => {
//     const productDiv = document.createElement('div')
//     const image = document.createElement('img');
//     const productTitle = document.createElement('h3');
//     const productReviews = document.createElement('h4');
//     const allStores = document.createElement('div');
    
    
// }