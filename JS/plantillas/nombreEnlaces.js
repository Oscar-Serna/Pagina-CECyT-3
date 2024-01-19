// NOMBRE DE TODAS LAS PÁGINAS PLANTILLA
const arrNamePages = [
    "inicio",
    "galeria",
    "historia",
    "organigrama",
    "materiales",
    "proyecto-aula",
    "tutores",
    "egresados",
    "gestion-escolar",
    "gestion-de-calidad",
    "investigacion",
    "aeronautica",
    "automotriz",
    "computacion",
    "control-electrico",
    "mac",
    "sistemas-digitales",
    "red-de-genero",
    "biblioteca",
    "bolsa-de-trabajo",
    "capacitacion-profesional",
    "celex",
    "poliemprende",
    "servicio-medico",
    "upis",

    // AGREGAR NOMBRE DE NUEVAS PAGINAS
    "comite-ambiental",
    "identidad",
    "saes",
];

const linkHC3 = document.querySelectorAll('.linkHC3');
function setAnchorElementsHC3(){
    for(let i = 0; i < arrNamePages.length; i++){
        if(arrNamePages[i] === body.id){
            for(let j = 0; j < linkHC3.length; j++){
                if(linkHC3[j].id == body.id){
                    linkHC3[j].href = "#";
                }
            }
        }
    }
}

setAnchorElementsHC3();