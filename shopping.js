let shop = document.getElementById('shop')


let basket = JSON.parse(localStorage.getItem('data')) || [];

let generateShop = ()=>{
     return( shop.innerHTML = shopItemsData.map((x)=>{
      let{id,name,price,description,img} = x;
      let search = basket.find((x)=> x.id == id) || [];
        return  `<div id = product-id-${id} class="item">
        <img width="220" src="${img}" alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i  onclick = decrement(${id}) class="bi bi-dash-lg"></i>
                <div id =${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                <i onclick = increment(${id}) class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
    </div>`
     }).join(''))}
    


generateShop()

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
  // console.log(basket);
  
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
  // console.log(basket);
 localStorage.setItem('data',JSON.stringify(basket));
};
let update = (id)=>{
  let search = basket.find((x)=> x.id === id);
  console.log(search.item);
  
  document.getElementById(id).innerHTML = search.item;
  
  calculation();

};

let calculation = ()=>{
   let cartIcon = document.getElementById('cart-amount').innerHTML = basket.map((x)=> x.item).reduce((x,y)=>x+y,0)
};

calculation() //This is for quick calculation which mean depending upon the order it should updates it on cart
