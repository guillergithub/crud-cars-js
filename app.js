'use strict';

const container = document.getElementById('container');
const data = [];

const addCar = () => {
    const inputBrand = document.getElementById('inputBrand'), 
    inputModel = document.getElementById('inputModel'), 
    inputYear = document.getElementById('inputYear'),
    inputColor = document.getElementById('inputColor'),
    inputPrice = document.getElementById('inputPrice'),
    inputUrl = document.getElementById('inputUrl');


    let newCar = {
        brand: inputBrand.value, 
        model: inputModel.value, 
        year: inputYear.value, 
        color: inputColor.value, 
        price: inputPrice.value, 
        state: true        
    }

    data.push(newCar);
    printCars();
    resetForm();
}

const printCars = () => {
    container.innerHTML = '';

    data.forEach((elem, index) => {
       if (elem.state) {
            container.innerHTML += `
            <div class="col-">
                <div class="card h-100">
                    <button type="button" id="${index}" onclick="deleteCar(${index})" class="btn-close" aria-label="Close" id=></button>
                    <img src="./asserts/images/jeep-jimny.jpg"  class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="d-flex container-card-body">
                            <h5>Price: $</h5><p>${elem.price}</p>                                            
                        </div>
                        <div class="d-flex container-card-body">
                            <p>Brand: ${elem.brand} </p>
                            <p>Year: ${elem.year}</p>
                        </div>
                        <div class="d-flex container-card-body">
                            <p>Model: ${elem.model}</p>
                            <p>Color: ${elem.color}</p>
                        </div>
                        <a href='#search'><button type="button" onclick="editCar(${index})" class="btn btn-warning mt-2">Edit Item</button></a>
                    </div>
                </div>
            </div>`
       }
    })
}



const editCar = (index) => {
    console.log(index)
    changeToEditButton(index);
    document.getElementById('inputBrand').value = data[index].brand
    document.getElementById('inputModel').value = data[index].model
    document.getElementById('inputPrice').value = data[index].price
    document.getElementById('inputYear').value = data[index].year 
    document.getElementById('inputColor').value = data[index].color
}

const saveChanges = (index) => {
   
    data[index].brand = document.getElementById('inputBrand').value;
    data[index].model = document.getElementById('inputModel').value;
    data[index].price = document.getElementById('inputPrice').value;
    data[index].year  = document.getElementById('inputYear').value;
    data[index].color = document.getElementById('inputColor').value;
    console.log('Guardamos datos')    
    printCars()
    resetForm()
    removeEditButton();
}



const changeToEditButton = (index) => {
    const containerBtn = document.getElementById('container-edit-button')
    containerBtn.innerHTML = ''
    containerBtn.innerHTML += `<button type="button" id='saveChangesBtn' onclick="saveChanges(${index})" class="btn btn-warning mt-2">
                                    Save Changes
                                </button>`;           
    
}

const removeEditButton = () => {
    // const containerEditBtn = document.getElementById('saveChangesBtn') 
    const containerBtn = document.getElementById('container-edit-button')
    containerBtn.innerHTML = ''
}


const deleteCar = (index) => {
    data[index].state = false;
    printCars();
}

const deleteAll = () => {
    if (confirm("Do you really want to delete the inventory?")) {
        alert("Thanks for Visiting!");
        container.innerHTML = '';
        data.length = 0;
      }  
}

const resetForm = () => {
    const userForm = document.getElementById('userForm')
    userForm.reset()
}


