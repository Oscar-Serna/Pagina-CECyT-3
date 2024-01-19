const listContentS = document.querySelector('.listContentS');
const arrInfoItemsSlider = [
    // POSICION 0 ("NOMBRE DE LA IMAGEN"), POSICION 1 ("LINK DEL HIPERVÍNCULO"), POSICION 2 ("CLASE IDENTIFICADORA PARA MODALS")
    // AVISO: NO DEJAR ESPACIOS EN BLANCO EN EL NOMBRE DE LAS IMAGENES ORIGINALES
    ["banner_reinscripcion24-1.png", "#", "reinscripciones"],
    ["banner_neurobatman.png", "#", undefined],
    ["banner_certificacion_3a.png", "Documents/Slider/activos/Certificación Integral 23-2 3ra etapa.pdf", undefined],
    ["banner_asignacioncarrera.png", "http://148.204.233.10/eleccion_2023/", undefined],
    ["banner_teams_noeli.png", "#", undefined],
    ["banner_premio.png", "https://dgti-eig-uspghost2.apps.funcionpublica.gob.mx/premio-nacional-de-administracion-publica/", undefined],
    ["banner_unity.png", "#", undefined],
    ["banner_diplomado.png", "#", undefined],
    ["banner_canva.png", "#", undefined],
    ["banner_certificacion_2a.png", "Documents/Slider/activos/Certificación Integral 23-2 2da etapa.pdf", undefined],
    ["banner_teams.png", "#", undefined],
    ["banner_tutorias.png", "#", undefined],
    ["empleadores.png", "https://forms.office.com/r/GqrPtpVL9x", undefined],
    ["drogas_2023.png", "Documents/Slider/activos/Si_te_drogas_te_dañas_Guia_para_docentes.pdf", undefined],
    ["red_genero.png", "Documents/Slider/activos/Prevención_del acoso_y_hostigamiento_sexual.pdf", undefined],
    ["LGRA.jpg", "Documents/Slider/activos/LGRA.pdf", undefined],
    ["estudiolongitudinal2023.jpg", "https://forms.office.com/r/34AqA8HarQ", undefined],
    ["cursos-conapred.jpg", "Documents/Slider/activos/CURSOS_CONAPRED.pdf", undefined],
    ["cursosSICAVISP.jpg", "Documents/Slider/activos/CURSOS_SICAVISP.pdf", undefined],
    ["fechas_importantes.jpg", "https://view.genial.ly/63c09ec92807830012b946c5", undefined],
    ["aviso-denuncia.jpg", "Documents/Slider/activos/pasos_denuncia.pdf", undefined],
    ["pronunciamiento.jpg", "Documents/Slider/activos/pronunciamiento-del-xxxix-cgc.pdf", undefined],
    ["acoso.webp", "https://www.denunciasegura.ipn.mx/", undefined],
];

function setInfoSlider(){
    let urlImage = undefined;
    let itemSituation = undefined;
    let classModal = "";
    for(let i = 0; i < arrInfoItemsSlider.length; i++){
        if(i < 2){
            urlImage = arrInfoItemsSlider[i][0];
            itemSituation = "charged"
        }else{
            urlImage = "";
            itemSituation = "not-charged"
        }

        if(arrInfoItemsSlider[i][2] != undefined){
            classModal = "itemActionModal";
        }

        listContentS.innerHTML += `
            <a href="${arrInfoItemsSlider[i][1]}" class="aElement aElementSlider">
                <li class="itemListCS itemLCS-I ${classModal}" data-item-situation="${itemSituation}" data-item-modal="${arrInfoItemsSlider[i][2]}">
                    <img src="img/imgSliderHero/activas/${urlImage}" alt="${arrInfoItemsSlider[i][0]}">
                    <div>
                        <div></div>
                        <p>Cargado imagen...</p>
                    </div>
                </li>
            </a>
        `;
    }
}
setInfoSlider();