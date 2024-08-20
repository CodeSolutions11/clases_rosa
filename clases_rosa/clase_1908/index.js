
const btnInventario = document.querySelector('.btnInventario')
const btnBuscar = document.querySelector('.btnBuscar')

const dataInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')


let productList = JSON.parse(localStorage.getItem('productos')) || []

btnInventario.addEventListener("click", () =>{
    window.location.href = './inventario/inventario.html'
})
btnBuscar.addEventListener("click", () =>{
    window.location.href = './buscar/buscar.html'
})
btn.addEventListener('click', ()=>{
    
    guardarProducto()
})


function guardarProducto(){

    productList.push({
        nombre: dataInputs[0].value,
        cantidad: dataInputs[1].value,
        precio: dataInputs[2].value
    })

    localStorage.setItem('productos',JSON.stringify(productList))
}