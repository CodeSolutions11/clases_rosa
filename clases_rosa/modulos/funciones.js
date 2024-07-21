function crearBoton(content, name){
    const containerButton = document.querySelector('.containerButton')
    
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.textContent =  content

    containerButton.appendChild(btn)

    btn.onclick = function () { alert('hola ' + name)}

    console.log(document);
}

const crearTable = ()=>{

    const containerTable = document.querySelector('.containerTable')

    const table = document.createElement('table')

    const tr1 = document.createElement('tr')
    const tr2 = document.createElement('tr')
    const tr3 = document.createElement('tr')

    const th1 = document.createElement('th')
    const th2 = document.createElement('th')
    const th3 = document.createElement('th')

    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    const td6 = document.createElement('td')

    th1.textContent = 'Product'
    th2.textContent = 'Stock'
    th3.textContent = 'Price'

    td1.textContent = 'Harina'
    td2.textContent = '4'
    td3.textContent = '2$'

    td4.textContent = 'Pasta'
    td5.textContent = '7'
    td6.textContent = '5$'


    containerTable.append(table)

    table.append(tr1)
    table.append(tr2)
    table.append(tr3)

    tr1.append(th1)
    tr1.append(th2)
    tr1.append(th3)

    tr2.append(td1)
    tr2.append(td2)
    tr2.append(td3)

    tr3.append(td4)
    tr3.append(td5)
    tr3.append(td6)

    console.log(table)

}

export{
    crearBoton,
    crearTable
}