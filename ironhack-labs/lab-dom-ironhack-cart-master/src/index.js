// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = Number(product.querySelector('.price span').innerText)
  let qty  = product.querySelector(".quantity input").value
  let subtotal = price * qty
  let subtotalTag = product.querySelector('.subtotal span')
  subtotalTag.innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.getElementsByClassName('product')
  let total = 0
  for (let i = 0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
    //console.log(total)
  }

  // ITERATION 3
  //... your code goes here
  let totalTag = document.getElementById('total-value')
  totalTag.innerText = (`Total: $${total.toFixed(2)}`)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  let targetNode = target.parentNode
  let removeFrom = targetNode.parentNode
  console.log('The target in remove is:', target);
  //... your code goes here
  removeFrom.removeChild(targetNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const targetTable = document.querySelector('tbody')
  const elementTable = targetTable.firstElementChild
  const newProduct = elementTable.cloneNode(true)

  const addLine = event.currentTarget.parentNode.parentNode
  const newElementName = addLine.firstElementChild.querySelector('input').value
  const newElementPrice = addLine.children[1].querySelector('input').value

  targetTable.appendChild(newProduct)
  newProduct.firstElementChild.innerText = newElementName
  newProduct.children[1].innerHTML = (`$<span>${newElementPrice}</span>`)
  newProduct.children[2].querySelector('input').placeholder = 0


  const allRemoveBtns = document.querySelectorAll('.btn-remove')
  allRemoveBtns.forEach((element) => {
    element.addEventListener('click', removeProduct)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allRemoveBtns = document.querySelectorAll('.btn-remove')
  allRemoveBtns.forEach((element) => {
    element.addEventListener('click', removeProduct)
  })

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct)
});
