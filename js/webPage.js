function popupfunction(x)
{
	 document.getElementById('popup'+x).style.display='block';
	 document.getElementById('fade'+x).style.display='block';
}

function popupclose(x)
{
	document.getElementById('popup'+x).style.display='none';
	document.getElementById('fade'+x).style.display='none';
}
function popupCart(){
	document.getElementById("addCart").style.display = 'block';
	document.getElementById('fadeCart').style.display='block';

	
}
function popupcloseCart()
{
	document.getElementById('addCart').style.display='none';
	document.getElementById('fadeCart').style.display='none';
}


let cartItems = [];
let cartPrices = [];
let totalPrice = 0;


function addToCart(name, price) {
	cartItems.push(name);
	cartPrices.push(price);
	totalPrice += price;
	alert("Product Addedt to your Cart!!!"); 
}
  
  function showCart() {
	//I learned this at: https://careerkarma.com/blog/javascript-innertext-innerhtml/
	//#:~:text=What%20is%20JavaScript%20innerHTML%3F,of%20a%20element.

	let cartPoducts = document.getElementById("addCart");
	let cartHTML = ` <a href = "javascript:void(0)" onclick = "popupcloseCart()" class="closeText">X</a>
	  <table>
	  <tr>
	  <th>  REVIEW YOUR CART </th>
	  </tr>
		<tr>
		  <th>Item</th>
		  <th>Price</th>
		</tr>`;
	for (let i = 0; i < cartItems.length; i++) {
	  cartHTML += ` <tr>
		  <td>${cartItems[i]}</td>
		  <td>$${cartPrices[i].toFixed(2)}</td>
		</tr>`;
	}
	cartHTML += `
	<tr>
	<td>-------------------------------------</td>
	</tr><tr><td>Total:</td><td>$${totalPrice.toFixed(2)}</td></tr></table>`;
	cartPoducts.innerHTML = cartHTML;
}
  
  