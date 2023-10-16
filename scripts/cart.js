

// get products from cart Array
let cartItems;

   const cartProducts =  localStorage.getItem('cart') 
cartProducts ?  cartItems = JSON.parse(cartProducts):  cartItems=[]

document.querySelector('.return-to-home-link').innerHTML=`${cartItems.length} Items`


// cartQuantitiy = document.querySelector('.cart-quantity').innerHTML= cartItems.length
// let cartQuantitiy;

//show Items in cart page

const diplayCartItems = ()=>
{
    let box = ''
    let totalprice = 0;
    let tax;
  
        cartItems.forEach(item =>
            {
                const { id, image, keywords, name, priceCents, rating,quantity } = item;
            totalprice = totalprice + (priceCents * quantity);
            
            tax = Number(((totalprice / 100) / 10).toFixed(2))
           
                // totalQuantity = Number(totalQuantity) + Number(item.quantity);
                // console.log(totalprice/100);
                 // console.log(totalQuantity,);
                
                    return box += `
            
                    <div class="cart-item-container">
                    <div class="delivery-date">
                      Delivery date: Tuesday, June 21
                     </div>
            
                     <div class="cart-item-details-grid">
                      <img class="product-image"
                        src="${image}">
            
                      <div class="cart-item-details">
                        <div class="product-name">
                         ${name}
                        </div>
                        <div class="product-price">
                          $${priceCents / 100}
                        </div>
                        <div class="product-quantity">
                          <span>
                            Quantity: <span class="quantity-label">${quantity}</span>
                          </span>
                          <span class="update-quantity-link link-primary">
                            Update
                          </span>
                          <span class="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
                      </div>
            
                      <div class="delivery-options">
                        <div class="delivery-options-title">
                          Choose a delivery option:
                        </div>
                        <div class="delivery-option">
                          <input type="radio" checked
                            class="delivery-option-input"
                            name="delivery-option-1">
                          <div>
                            <div class="delivery-option-date">
                              Tuesday, June 21
                            </div>
                            <div class="delivery-option-price">
                              FREE Shipping
                            </div>
                          </div>
                        </div>
                        <div class="delivery-option">
                          <input type="radio"
                            class="delivery-option-input"
                            name="delivery-option-1">
                          <div>
                            <div class="delivery-option-date">
                              Wednesday, June 15
                            </div>
                            <div class="delivery-option-price">
                              $4.99 - Shipping
                            </div>
                          </div>
                        </div>
                        <div class="delivery-option">
                          <input type="radio"
                            class="delivery-option-input"
                            name="delivery-option-1">
                          <div>
                            <div class="delivery-option-date">
                              Monday, June 13
                            </div>
                            <div class="delivery-option-price">
                              $9.99 - Shipping
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                        
                    `
            
             
        }) 

    document.querySelector('.js-order-summary').innerHTML =box
    document.querySelector('.payment-summary').innerHTML = `
    <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${cartItems.length}):</div>
    <div class="payment-summary-money">${totalprice/100}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$4.99</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${totalprice/100}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${tax}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${((totalprice/100) + tax).toFixed(2)}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>
    `
        
    
    
   
};

    diplayCartItems();
  
