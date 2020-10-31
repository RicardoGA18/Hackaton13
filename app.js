const btnStart = document.getElementById("btnStart");
const btnAdd = document.getElementById("btnAdd");
const close = document.getElementById("close");
const btnClose=document.getElementById("btnClose");
const btnAccept=document.getElementById("btnAccept");

let numCards = 0;

const modal = document.getElementById("modal");
const container = document.getElementById("container");

btnStart.addEventListener("click", openModalAdd);
btnAdd.addEventListener("click", openModalAdd);

close.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

function openModalAdd(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}

btnAccept.addEventListener("click", acceptModal);

function acceptModal(event){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let raza = document.getElementById("raza").value;
    let tel = document.getElementById("tel").value;
    let url = document.getElementById("url").value;
    let pais = document.getElementById("pais").value;
    let description = document.getElementById("description").value;
    if((nombre) && (apellido) && (tel) &&(raza) && (pais) && (description)){
        event.preventDefault();
        modal.style.display = "none";
        
        let boton = document.getElementById("btnStart");
        if(boton){
            container.innerHTML = "";
            container.style.justifyContent = "space-evenly";
            container.style.flexDirection = "row";

        }

        container.innerHTML += `
       
            <div class="Card">
                <div class="Card-Edit">
                    <img src="./img/edit.svg">
                    <p>Edit</p>
                </div>
                <div class="Card-Delete">
                    <img src="./img/delete.svg">
                    <p>Delete<p>
                </div>
                <div class="Card-Img">
                    <img src="${url}"</img>
                </div>
                <h3 class="Card-Name">${nombre} ${apellido}</h3>
                <p>${tel} | ${raza}</p>
                <p>${pais}</p>
                <p>${description}</p>
            </div>
       
        `    
        numCards++;    
    }
    
}

container.addEventListener("click", (e)=>{
    if(e.target.className == "Card-Delete"){
        card = e.target.parentNode;
        console.log(card);
        container.removeChild(card);
        numCards--;

        if(numCards == 0){
            container.innerHTML = `
            <div class="Btn-Box">
                 <button class="Btn-Add" id="btnStart">Agregar Mascota</button>
            </div>
            `
            const btnStart = document.getElementById("btnStart");
            btnStart.addEventListener("click", openModalAdd);
        }
    }
    else if(e.target.parentNode.className == "Card-Delete"){
        card = e.target.parentNode.parentNode;
        console.log(card);
        container.removeChild(card);
        numCards--;

        if(numCards == 0){
            container.innerHTML = `
            <div class="Btn-Box">
                 <button class="Btn-Add" id="btnStart">Agregar Mascota</button>
            </div>
            `
            const btnStart = document.getElementById("btnStart");
            btnStart.addEventListener("click", openModalAdd);
        }
    }
    else if((e.target.className=="Card-Edit")||(e.target.parentNode.className=="Card-Edit")){
        //openModalAdd();
        if(e.target.parentNode.className=="Card-Edit"){
            posicion = e.target.parentNode 
        }
        else{
            posicion = e.target
        }

        let name = posicion.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;

        let nombre = name.textContent;
        console.log(nombre);
    }

})

numCards = 8;
container.innerHTML = "";

for(let i = 1; i<=8; i++){

    container.innerHTML += `
       
            <div class="Card">
                <div class="Card-Edit">
                    <img src="./img/edit.svg">
                    <p>Edit</p>
                </div>
                <div class="Card-Delete">
                    <img src="./img/delete.svg">
                    <p>Delete<p>
                </div>
                <div class="Card-Img">
                    <img src="./img/dog${i}.jpg"</img>
                </div>
                <h3 class="Card-Name">Nombre Apellido</h3>
                <p>Telefono | Raza</p>
                <p>Pais</p>
                <p>About me About me About me About me About me About me About me About me About me About me About me</p>
            </div>
       
        `    
}