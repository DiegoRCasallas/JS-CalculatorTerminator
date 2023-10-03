

//links 
const linkDivisionEntera='https://www.youtube.com/embed/6quxZwipPxU?si=gjRhRPEgXQZtsdul';
const linkMCD='https://www.youtube.com/embed/JoHfq8hswmY?si=MgzBVTC7POXQNlv8';
const linkMCM='https://www.youtube.com/embed/Hxkb3i85qDw?si=6AFAwcQcUMqRQOSQ';
const linkPrimo='https://www.youtube.com/embed/_9SYCAbh5oA?si=dLa0l3b9EEkDbUmj';
const link_ncr='https://www.youtube.com/embed/ec8TQjfQrGY?si=k7N7F9Nw6-ON_69a';
const link_npr='https://www.youtube.com/embed/dRN15Or4o00?si=p8VJpRrU5SDrs7yb';
const linkCongruencia='https://www.youtube.com/embed/mRdH3XemUkU?si=z50ehI1EUFp-gp8p';
const linkFibonacci='https://www.youtube.com/embed/yDyMSliKsxI?si=1e3mDY0po2P5jcxh';
const linkEuler='https://www.youtube.com/embed/yDyMSliKsxI?si=1e3mDY0po2P5jcxh';


const btnMostrarInfo=document.querySelector(".button-ayuda");
const ventanaVideo=document.querySelector(".video");
const cardInfo=document.querySelector(".card");


btnMostrarInfo.addEventListener("click",ajustarVentana);

function ajustarVentana(){
    let estadoVentana = cardInfo.getAttribute('id');
    if (estadoVentana==="visible"){
        cardInfo.setAttribute('id','oculto');
    }
    if(estadoVentana==="oculto"){
        cardInfo.setAttribute('id','visible')
    }
}

function ajustarLinkVideo(link){
    ventanaVideo.setAttribute('src',link);
}



