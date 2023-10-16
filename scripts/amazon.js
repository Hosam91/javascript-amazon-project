
let products;
let getProducts = localStorage.getItem('products');

if (getProducts)
{
    products = JSON.parse(getProducts)
} else
{
    products = [];
    }
   

const getData = async () =>
{
    const response = await fetch(`../backend/products.json`);
    products = await response.json();
    localStorage.setItem('products',JSON.stringify(products))
}


const displayData = () =>
{
    getData();
    let box =''
    products.forEach((item,index) =>
    {
        
        const {id,image,keywords,name,priceCents,rating}=item
        return box+=`<div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src=${image}>
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-${rating.stars *10}"
            src="images/ratings/rating-40.png">
          <div class="product-rating-count link-primary">
            ${rating.count}
          </div>
        </div>

        <div class="product-price">
          $${priceCents/100}
        </div>

        <div class="product-quantity-container js-select-quantity">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary"
        data-product-id='${id}'
        >
          Add to Cart
        </button>
      </div>`
    })
   
    document.querySelector('.js-products-grid').innerHTML =box
};

displayData();



//Add to Cart Functions 
let btns = document.querySelectorAll('.add-to-cart-button');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartQuantitiy = document.querySelector('.cart-quantity')
cartQuantitiy.textContent = cart.length





//feach all btns and make them work to add product to cart
btns.forEach((btn) =>
{
    btn.addEventListener('click', () =>
    {
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        let cartQuantitiy = document.querySelector('.cart-quantity')
     const productId = btn.getAttribute('data-product-id');

        let selectedProduct = products.find((product) => product.id === productId)
        
        

        const selectQuantity = btn.closest('.product-container').querySelector('select');        
        selectedProduct.quantity  = selectQuantity.value;


        let existingProduct = cart.find((item) =>item.id === selectedProduct.id)
        
        if(existingProduct)
        {
            existingProduct.quantity+=selectedProduct.quantity
        } else
        {
             cart.push(selectedProduct); 
        }


        localStorage.setItem('cart', JSON.stringify(cart))

       
        // console.log(cartQuantitiy);
        cartQuantitiy.textContent = cart.length
    });
});
