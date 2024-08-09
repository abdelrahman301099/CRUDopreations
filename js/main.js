let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productCat = document.getElementById("productCat")
let productDesc = document.getElementById("productDesc")

let productsArr = [];

function getProduct() {
      let product = {
            name: productName.value,
            price: productPrice.value,
            category: productCat.value,

            desc: productDesc.value
      }
      productsArr.push(product);

      console.log(productsArr)
      productName.value = ""
      productCat.value = ""
      productDesc.value = ""
      productPrice.value = ""
      showProduct(productsArr)
}

function showProduct(pArr) {
      let body = document.getElementById("productTable")
      body.innerHTML = ""
      let row = document.createElement('tr');
      for (let i = 0; i < pArr.length; i++) {
            let row = document.createElement('tr');
            row.innerHTML = ` 
            <th scope="row">${i + 1}</th>
                              <td >${pArr[i].name}</td>
                              <td>${pArr[i].price}</td>
                              <td>${pArr[i].category}</td>
                              <td>${pArr[i].desc}</td>
                              <td> <button class="btn btn-primary" >DELETE</button>
  <button class="btn btn-primary" >UPDATE</button></td>

                        `


            body.appendChild(row)
      }
}