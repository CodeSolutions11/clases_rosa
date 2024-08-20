const div = document.querySelector('.div')
const input = document.querySelector('input')
const button = document.querySelector('.btn')
const body = document.querySelector('body')


const productos = JSON.parse(localStorage.getItem('productos'))

/*
button.addEventListener("click", function(e){

    console.log(e);

    const produto = input.value

    const codigoHtml = `
               <span>Nombre:</span><b>Laptop</b> 
               <span>Cantidad:</span><b>Laptop</b> 
               <span>Precio:</span><b>Laptop</b> 
            `;
    const error = `
        <div class="error">
            <h3>No existe ese producto</h3>    
        </div>
    `

    productos.forEach(element => {
        console.log(element);

        if(element.nombre == producto){
            div.insertAdjacentHTML('beforeend',codigoHtml)
        }else{
            body.innerHTML(error)
        }
    });
})

*/

button.onclick = ()=>{
    const produto = input.value

    const codigoHtml = `
               <span>Nombre:</span><b>Laptop</b> 
               <span>Cantidad:</span><b>Laptop</b> 
               <span>Precio:</span><b>Laptop</b> 
            `;
    const error = `
        <div class="error">
            <h3>No existe ese producto</h3>    
        </div>
    `
    console.log(error);
    // productos.forEach(element => {
    //     console.log(element);

    //     if(element.nombre == producto){
    //         div.insertAdjacentHTML('beforeend',codigoHtml)
    //     }else{
    //         body.innerHTML(error)
    //     }
    // });
} 