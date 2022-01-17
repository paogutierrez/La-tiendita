const url = 'http://localhost:3000/productos'

const getProductos = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    let mostrarProductos = document.querySelector('.grid-elementos')
    mostrarProductos.innerHTML = ''

    data.forEach(productos =>{
        const{imagen, name, price, descuento} = productos 
        mostrarProductos.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <span>${descuento}</span>
        <img src="${imagen}" class="card-img-top  imagenp" alt="...">
        <div class="card-body">
          <p class="card-text price" >${price}</p>
          <h5 class="card-title name">${name}</h5>
          <a href="#" class="btn btn-primary agregar">Agregar</a>
        </div>
      </div>      
        `
    })
      console.log(data);

}   



   getProductos(url)


const cerraModalUbicacion = document.getElementById('btn-close');
const abrirModalUbicacion = document.getElementById('modalUbicacion');
const primerModal = document.getElementById('modalLugar');
const modalC = document.getElementById('modalContainer');

abrirModalUbicacion.addEventListener('click', function(e){
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  primerModal.classList.toggle("modal-close");
})

cerraModalUbicacion.addEventListener('click', function(e){
  e.preventDefault();
  primerModal.classList.toggle("modal-close");
  modalC.style.opacity = "0";
  modalC.style.visibility = "hidden"
})

const agregarProductos = document.querySelector('.agregar');

agregarProductos.addEventListener('click', function(e){
  e.preventDefault();
   agregarProductos.style.opacity = "1"
})