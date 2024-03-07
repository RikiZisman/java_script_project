const company_name = sessionStorage.getItem("company_name");
console.log(company_name);
const cars = document.getElementById('cars');
const divDisplatOneCar = document.getElementsByClassName('divDisplatOneCar');
let tempElemnt;
console.log(TheModel);


$.ajax({
  url: "../../enterance/cars_riki.json",
  success: (result) => {
    result.forEach(element => {
      if (company_name === element.company) {
        // console.log(element);
        //sort by company
        const car = document.createElement("li")
        car.classList.add('myClass');
        car.innerHTML = element.model;
        car.innerHTML += `<img src="${element.image}" width="26%" class="img"/>`;
        // car.innerHTML +=  <button type="submit" id="love">אהבתי</button>
        cars.appendChild(car);
        //display by ul
        car.addEventListener('click', function () {
          const currentCar = this.innerHTML;
          console.log(currentCar);
          console.log(`${element.model}<img src="${element.image}" width="26%" class="img">`);
          dispayOnecar(currentCar);
          all_details(currentCar, result);
          //remove the ul
        });
      }
    });
  }
})


dispayOnecar = (model) => {
  // console.log("im in dispayOnecar");
  // console.log(model);
  $.ajax({
    url: "../../enterance/cars_riki.json",
    success: (result) => {
      result.forEach(element => {
        console.log(model === `${element.model}<img src="${element.image}" width="26%" class="img">`);
        if (model === `${element.model}<img src="${element.image}" width="26%" class="img">`) {
          const description = document.createElement("p");
          description.innerHTML = element.description;
          const company = element.company;

        }
      });
    }
  })
}



function all_details(currentCar, result) {
  // Remove existing DIVs
  const carContainer = document.getElementById("carContainer");
  while (carContainer.firstChild) {
    carContainer.firstChild.remove();
  }

  result.forEach(element => {
    console.log(currentCar === `${element.model}<img src="${element.image}" width="26%" class="img"/>`);
    if (currentCar === `${element.model}<img src="${element.image}" width="26%" class="img">`) {
      let carContainer = document.getElementById('carContainer');
      console.log(carContainer);
      // console.log(JSON.stringify(element).replace(/"/g, '&quot;'));
      // const x = JSON.stringify(element).replace(/"/g, '&quot;')
      // Generate the modal HTML
      tempElemnt = element.modal;
      let modalHTML = `
        <div class="modal" id="myModal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${element.model}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <button onclick=addToCart(${element.id}) id="i_love"><img src="../../../pictures1/empty_heart.JPG" width="50px" height="40px"></button>
                <img src="${element.image}" width="120%"></img>
                <p>${element.description}</p>
                <p>${element.engine_type}</p>
                <p> מחיר:${element.price}</p>
              </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        `;

      // Set the modal HTML to the carContainer
      carContainer.innerHTML = modalHTML;
      $('#myModal').modal('show'); // Open the modal window
    }
  });
}

const addToCart = async(carId) => {
  let carringarr = JSON.parse(sessionStorage.getItem('carringarr'));
  if (!carringarr)
    carringarr = [];
  let flag = false;

  carringarr.forEach(element => {
      if (element.id === carId.toString())
          flag = true;
  });

  const currentProduct = await getSpecificCar(carId);
  console.log("retur value  " + JSON.stringify(currentProduct) );
  if (!flag) {
    console.log("im in !flag");
    carringarr.push(currentProduct);
    sessionStorage.setItem('carringarr', JSON.stringify(carringarr));
    alert("הרכב נוסף בהצלחה לרשימת המועדפים");
  }

}

const timefunction = (e) => {
  setTimeout(() => {
    e.remove();
  }, 5000);
}

 const getSpecificCar = async (carId) => {
  let tempCar ;
  await $.ajax({
    url: `../../enterance/cars_riki.json`,
    success(data) {
      tempCar =  data.find(car => car.id === carId.toString());
    }

  })
  console.log(tempCar);
  return tempCar;
}

var TheModel = localStorage.getItem("TheModel");

$.ajax({
  url: "../../enterance/cars_riki.json",
  success: (result) => {
    result.forEach(element => {
      if (TheModel === element.model.toString()) {
        const car = document.createElement("li");
        car.classList.add('myClass');
        car.innerHTML = element.model;
        car.innerHTML += `<img src="${element.image}" width="26%" class="img"/>`;
        cars.appendChild(car);

        car.addEventListener('click', function () {
          const currentCar = this.innerHTML;
          console.log(currentCar);
          console.log(`${element.model}<img src="${element.image}" width="26%" class="img">`);
          dispayOnecar(currentCar);
          all_details(currentCar, result);
        });
      }
    });
  }
});
//              <button onclick=addToCart(${element.id}) id="i_love"><img src="../../../pictures1/empty_heart.JPG" width="50px" height="40px"></button>