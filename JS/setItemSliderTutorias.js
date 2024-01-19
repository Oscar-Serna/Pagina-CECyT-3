const listContentS = document.querySelector('.listContentS');

const arrInfoItemsSlider = [
    // POSICION 0 ("NOMBRE DE LA IMAGEN") Y POSICION 1 ("LINK DEL HIPERVÍNCULO")
    ["infografia-titulacion.jpg", "#"],
    ["infografia-titulacion2.jpg", "#"],
    ["algebra.jpg", "#"],
    ["algebrasemanal.jpg", "#"],
    ["asesoria-algebra.jpg", "#"],
    ["circuitos.jpg", "#"],
    ["integral.jpg", "#"],
    ["quimica4.jpg", "#"],
];

function setInfoSlider(){
    for(let i = 0; i < arrInfoItemsSlider.length; i++){
        listContentS.innerHTML += `
            <a href="${arrInfoItemsSlider[i][1]}" class="aElement aElementSlider">
                <li class="itemListCS itemLCS-I" style="background: url('../../img/imgSliderTutorias/${arrInfoItemsSlider[i][0]}'); background-position: center; background-repeat: no-repeat; background-size: contain;  background-color: rgba(125, 2, 66, .25);"></li>
            </a>
        `;
    }
}
setInfoSlider();