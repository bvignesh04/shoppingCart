let label = document.getElementById('label')
let shoppingCard  = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem('data')) || [];

let calculation = ()=>{
    let cartIcon = document.getElementById('cart-amount').innerHTML = basket.map((x)=> x.item).reduce((x,y)=>x+y,0)
 };
 
 calculation() //This is for quick calculation which mean depending upon the order it should updates it on cart
 

 let generateCart = ()=>{
    if(basket.length !== 0){
       return(shoppingCard.innerHTML = basket.map((x)=>{
        let {id,item} = x;
        let search = shopItemsData.find((y)=> y.id == id) || [];
        return `
        <div class='cart-item'> 
        <img width ="100" src = ${search.img} alt="" />
        <div class="details">
        <div class="title-price-x">
            <h4 class="title-price">
                <p>${search.name}</p>
                <p class ="price"> $ ${search.price}</p>

            </h4>
            <i onclick = removeCart(${id}) class="bi bi-x-lg"></i>

        </div>
        <div class="buttons">
        <i  onclick = decrement(${id}) class="bi bi-dash-lg"></i>
        <div id =${id} class="quantity">${item}</div>
        <i onclick = increment(${id}) class="bi bi-plus-lg"></i>
    </div>
          <h3>$ ${item * search.price}</h3>
         </div>
        </div>`
    }).join(''))
    }
    else{

        shoppingCard.innerHTML = ``;
        label.innerHTML = `<h2 class="empty">Cart is Empty</h2>
        <a href ="shopping.html">
        <button class="Homebtn">Back to Store</button></a>`;


    }
 }

 generateCart();

 
let increment = (id)=>{
    console.log(id)
  
    let search = basket.find((x)=>x.id === id);
    if(search === undefined){
      basket.push({id:id,
        item: 1});
       
    }
    else{
      search.item += 1;
    }
    generateCart();
    
    update(id);
    localStorage.setItem('data',JSON.stringify(basket));
    
  };
  let decrement = (id)=>{
    
    let search = basket.find((x)=>x.id === id);
    if(search === undefined){return;}
   else if(search === 0)
      return;
    
    else{
      search.item -= 1;
    }
  
  
    // CHECK BUG IS HERE - GOES NEGATIVE
    update(id)
    basket = basket.filter((x)=> x.item !== 0)
    generateCart(); // this call help to remove look at the mechanism keenly
   localStorage.setItem('data',JSON.stringify(basket));
  };
  let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount()
  
  };



  let removeCart = (id)=>{
    // console.log(id)
    basket = basket.filter((x)=> x.id !== id);
    generateCart();
    TotalAmount();
    calculation();
     localStorage.setItem('data',JSON.stringify(basket));
  }


  let clearCart = ()=>{
    basket =[]
    generateCart();
    calculation();
    localStorage.setItem('data',JSON.stringify(basket));
  }


  let TotalAmount =()=>{
    if(basket.length !== 0){
        let amount = basket.map((x)=>{
            let {id,item} =x;
            let search = shopItemsData.find((y)=> y.id == id) || [];
            return item * search.price;

        }).reduce((x,y)=>x+y,0);
        // console.log(amount)
        label.innerHTML = `
        <div class="final-cart-details">
        <h2 class="totalbill">Total Bill : $ ${amount}</h2>


        <buttton class="checkout">Checkout</buttton>
        <buttton onclick ="clearCart()" class="removeAll" >Clear cart</buttton></div>
       `
    }
   
    else return;
    
    

  };

  TotalAmount()

  