//variables globales
const d = document;
let dash = d.querySelector(".tablero");
let nameImg = [];
let posImg = [];
let attempts = 0;
let successes = 0;
let time = 20;
let showSuccesses = d.querySelector(".aciertos");
let showAttempts = d.querySelector(".intentos");
let showTime = d.querySelector(".tiempo");
let btnStart = d.querySelector('.boton-iniciar');


showTime.textContent = time;

btnStart.addEventListener("click", function(){
    
    let timeT = setInterval(function(){
        time--;
        showTime.textContent = time;
        if(time == 10){
            showTime.setAttribute("style", "color:red; font-size:30px");
        }else if(time==0){
            
            clearInterval(timeT);
            alert("You Lose! 😒😒😒😒 You didn't guess everything");
            location.reload();
        }
    }, 1000)
    addImages();

});
//iniciar jeugo setTime

let images = [
    {
        "nombre":"red dead redemption 2",
        "url":"./img/img1.jpg"
    },
    {
        "nombre":"grand theft auto v",
        "url":"./img/img2.jpg"
    },
    {
        "nombre":"resident evil 2",
        "url":"./img/img3.jpg"
    },
    {
        "nombre":"the last of us",
        "url":"./img/img4.jpg"
    },
    {
        "nombre":"god of war",
        "url":"./img/img5.jpg"
    },
    {
        "nombre":"spider man",
        "url":"./img/img6.jpg"
    },
    {
        "nombre":"red dead redemption 2",
        "url":"./img/img1.jpg"
    },
    {
        "nombre":"grand theft auto v",
        "url":"./img/img2.jpg"
    },
    {
        "nombre":"resident evil 2",
        "url":"./img/img3.jpg"
    },
    {
        "nombre":"the last of us",
        "url":"./img/img4.jpg"
    },
    {
        "nombre":"god of war",
        "url":"./img/img5.jpg"
    },
    {
        "nombre":"spider man",
        "url":"./img/img6.jpg"
    }
    
];

let board = d.querySelector(".tablero");

//agregar imagenes
function addImages(){
    for(let i = 0; i<images.length;i++){
        let div = d.createElement("div");
        let img = d.createElement("img");
        div.setAttribute("class", "col-3");
        img.setAttribute("src", "./img/ocultar.png");
        img.setAttribute("class", "img-fluid altoimg");
        img.setAttribute("id", i);
        img.addEventListener("click", showImages);
        div.appendChild(img);
        board.appendChild(div);

    }
}


//mostrar las imagenes
function showImages(){
    let imgId = this.getAttribute("id");
    //mostrar imagenes ocultas
    this.setAttribute("src", images[imgId].url);
    //guardar el nombre y id de la imagen
    nameImg.push(images[imgId].nombre);
    posImg.push(imgId);
    //alert(nameImg[0]+ " " + posImg[0]);
    //ejecutar la funcion comparar imagenes
    if(nameImg.length === 2){
        setTimeout(compareImages, 500);
        
    }
}


//comparar las imagenes 
function compareImages(){
    let totalImg = d.querySelectorAll(".tablero .col-3 img");
    //comparar si las imagenes son iguales
    if(nameImg[0]=== nameImg[1]){ //las imagenes son iguales
        if(posImg[0]!= posImg[1]){ //imagenes en diferente pos
            totalImg[posImg[0]].setAttribute("src", "./img/acierto.jpg");
            totalImg[posImg[1]].setAttribute("src", "./img/acierto.jpg");
            totalImg[posImg[0]].removeEventListener("click", showImages);
            totalImg[posImg[1]].removeEventListener("click", showImages);
            alert('Excellent. God Job 😎👌😎');
            successes++;
            showSuccesses.textContent = successes;

        }else{
            alert('Please choose another image');
            totalImg[posImg[0]].setAttribute("src", "./img/ocultar.png");
            attempts++;
            showAttempts.textContent = attempts;
            
        }
        
    }else{
        totalImg[posImg[0]].setAttribute("src", "./img/ocultar.png");
        totalImg[posImg[1]].setAttribute("src", "./img/ocultar.png");
        alert('You Lose. Try Again ✖️😒');
        attempts++;
        showAttempts.textContent = attempts;
    }
    nameImg = []; //arrays vacios
    posImg = [];
}

