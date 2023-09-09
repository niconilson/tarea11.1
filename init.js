document.addEventListener('DOMContentLoaded', () => {

const api = 'https://api.frankfurter.app/latest?from=USD';

function showMoney(itemsArray) {
    let htmlContentToAppend = "";
    //for (let i = 0; i < itemsArray.length; i++) {     
        htmlContentToAppend += `
        <div>
            <div>
            <div id="coment">
                <div class="d-flex w-100 justify-content-between">
                <p class="mb-1"> Actualmente un dolar equivale a ${itemsArray.rates.EUR} Euros.</p>
                <p class="mb-1"> Actualmente un dolar equivale a ${itemsArray.rates.JPY} Yenes japonéses.</p>
                <p class="mb-1"> Actualmente un dolar equivale a ${itemsArray.rates.NZD} Dólares neozelandéses.</p>
            </div> 
        </div>    
        </div>
       
    `
    document.getElementById("mostrar").innerHTML = htmlContentToAppend
    }

fetch(api)
  .then(resp => resp.json())
  .then((data) => {
    //document.getElementById("mostrar").innerHTML = (${data.rates});  
    showMoney(data)
  });
})