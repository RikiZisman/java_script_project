const all_companies = document.getElementsByClassName('all_companies');
const divDisplatOneCar = document.getElementsByClassName('divDisplatOneCar');
const all_picturs = document.getElementById('all_picturs');
// const all_companies = document.getElementById('kia') ;
// console.log(all_companies);
const cars = document.getElementById('cars');
const listCars = document.getElementById('carsInList');
function handleButtonClick(buttonId) {
        cars.innerHTML = '';
        // sortBy(buttonId);
        sessionStorage.setItem("company_name", buttonId);
}

for (let i = 0; i < all_companies.length; i++) {
        console.log("אני ברשימת הכפתורים");
        all_companies[i].addEventListener('click', function () {
                sessionStorage.setItem('company_name', this.id);
                cars.innerHTML = '';
                window.location.href= "../companies/kia/kia.html"
        });
        
};
//the garbage cart
const drawPrice = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("the products from the local storage:");
        console.log(cart);
        cart.forEach(element => {
                const btnDelete = document.createElement("button")
                btnDelete.innerHTML = '❌';
                //        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                //         onclick="removeFromCart('example model')">DELETE</button>
                const li = document.createElement("li");
                li.innerHTML = element.price;
                listCars.appendChild(li);
                listCars.appendChild(btnDelete)
        });

        // products.forEach(p => {
        //   //  if(cart?.includes(p.model)){
        //   const productDiv = document.createElement('div');
        //   productDiv.classList.add('product');
        //   productDiv.innerHTML = `
        //  <h3>${company}</h3>
        //  <p>מחיר: ${p.model}</p>
        //  <p>מחיר: ${p.price}</p>
        //  <img src="${p.image}">`
        //   cart.appendChild(productDiv);
        //   //  }
        // })
}


const removeFromCart = (model) => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        console.log("im in this removeFromCart function!!!!!!!!!!!!!!!!!!!!");
        // const cart = JSON.parse(localStorage.getItem("cart"))
        // console.log(model);
        // console.log(cart);
        for (let i = 0; i < cart.length; i++) {
                if (cart[i].model === model)
                        cart.splice(i, 1)
        }
        localStorage.setItem("cart", cart)
        listCars.innerHTML='';
        drawPrice();
}
        
var searchButton = document.getElementById("Magnifying-Glass");
searchButton.onclick = function() {
  var TheModel = document.getElementById("look_for").value;
  localStorage.setItem("TheModel", TheModel);
  console.log(TheModel);
  window.location.href= "../companies/kia/kia.html";
};

const enter = document.getElementById("enter");
const conect = document.getElementById("conect");
enter.onclick = () => {
  window.location.href = "../open/entery.html";
}
conect.onclick = () => {
  window.location.href = "../open/conectt.html";
}

