const btn = document.querySelector('button')
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const content = document.querySelector('.content')



function addCuadro(){
    const cuadro = `
        <div class"cuadro">
            <p> dkgjakdlsgjslkad</p>
        </div>
    `;
    content.insertAdjacentHTML("beforeend", cuadro)

}


btn.addEventListener('click', function(event){
    console.log(event);
    addCuadro()
})

input.addEventListener("keyup", e => {

    console.log(e);
    if(e.key == "Enter"){
        const value = input.value 
    
        h1.textContent = value

    }
    
})