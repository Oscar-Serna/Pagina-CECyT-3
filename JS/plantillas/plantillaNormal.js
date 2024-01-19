const header = document.querySelector('header');
const footer = document.querySelector('footer');

function setHeaderTemplate(){
    header.innerHTML = `
        <section class="sectGobH">
            <div class="mainGobH">
                <div class="contLogoGH">
                    <a href="https://www.gob.mx/" target="_blank" class="aElement"><img src="img/logob.svg" alt="" class="imgLogoGH"></a>
                </div>
                <nav class="contLinksGH contLGH-RES-I">
                    <ul class="listLinksGH">
                        <a href="https://mivacuna.salud.gob.mx/index.php" target="_blank" class="aElement">
                            <li class="itemListGH">
                                <p class="textItemListGH">Registro para Vacunación</p>
                            </li>
                        </a>
                        <a href="https://coronavirus.gob.mx/" target="_blank" class="aElement">
                            <li class="itemListGH">
                                <p class="textItemListGH">Información sobre COVID-19</p>
                            </li>
                        </a>
                        <a href="https://www.gob.mx/tramites" target="_blank" class="aElement">
                            <li class="itemListGH">
                                <p class="textItemListGH">Trámites</p>
                            </li>
                        </a>
                        <a href="https://www.gob.mx/gobierno" target="_blank" class="aElement">
                            <li class="itemListGH">
                                <p class="textItemListGH">Gobierno</p>
                            </li>
                        </a>
                        <a href="https://www.gob.mx/segob/en" target="_blank" class="aElement">
                            <li class="itemListGH">
                                <p class="textItemListGH">English</p>
                            </li>
                        </a>
                        <a href="https://www.gob.mx/busqueda" target="_blank" class="aElement">
                            <li class="itemListGH">
                                <img src="img/search.svg" alt="" class="imgItemListGH">
                            </li>
                        </a>
                    </ul>
                </nav>
                <img src="img/menuWhite.png" alt="" class="imgMenuBarLGH">
            </div>
            <div class="eduGobH">
                <div class="contImgEH">
                    <a href="https://www.gob.mx/sep" target="_blank" class="aElement">
                        <div class="contInfoImgEH">
                            <img src="img/pleca-educacion.svg" alt="" class="imgLogoEH">
                        </div>
                    </a>
                    <a href="https://www.ipn.mx/" target="blank" class="aElement">
                        <div class="contInfoImgEH">
                            <div>
                                <img src="img/logo_ipn_guinda.svg" alt="" class="imgLogoEH imgLogoIPN-EH">
                            </div>
                            <div>
                                <h4 class="titleLogoEH">Instituto Politécnico Nacional</h4>
                                <p class="textLogoEH">"La Técnica al Servicio de la Patria"</p>
                            </div>
                        </div>
                    </a>
                </div>
                <nav class="contLinksEH contLEH-RES-I">
                    <ul class="listLinksEH">
                        <a href="https://www.ipn.mx/directorio-telefonico.html" class="aElement" target="_blank">
                            <li class="itemListEH">
                                <b><p class="textItemListEH">Directorio</p></b>
                            </li>
                        </a>
                        <a href="https://www.ipn.mx/correo-electronico.html" class="aElement" target="_blank">
                            <li class="itemListEH">
                                <b><p class="textItemListEH">Correo institucional</p></b>
                            </li>
                        </a>
                        <a href="https://www.ipn.mx/calendario-academico.html" class="aElement" target="_blank">
                            <li class="itemListEH">
                                <b><p class="textItemListEH">Calendario</p></b>
                            </li>
                        </a>
                        <a href="https://www.ipn.mx/transparencia/" class="aElement" target="_blank">
                            <li class="itemListEH">
                                <b><p class="textItemListEH">Transparencia</p></b>
                            </li>
                        </a>
                        <a href="https://www.ipn.mx/proteccion-datos-personales/" class="aElement" target="_blank">
                            <li class="itemListEH itemEH-noBorder">
                                <b><p class="textItemListEH">Protección de datos</p></b>
                            </li>
                        </a>
                    </ul>
                </nav>
                <img src="img/menuWhite.png" alt="" class="imgMenuBarSGH">
            </div>
        </section>
        <section class="sectC3H">
            <div class="contLogoC3H">
                <div class="bgLogoC3H"></div>
                <a href="index.html" class="aElement aElementLogoC3H linkHC3" id="inicio">
                    <img src="img/logoC3.svg" alt="" class="imgLogoC3H">
                </a>
            </div>
            <div>
                <h3 class="titleLogoC3-RES"></h3>
                <h3 class="titleLogoC3-RES"></h3>
            </div>
            <!-- INICIO DE MENU PRINCIPAL - COMPUTADORA -->
            <nav class="contLinksC3H">
                <ul class="listLinkC3H">
                    <a href="index.html" class="aElement linkHC3" id="inicio">
                        <li class="itemListC3H">
                            <b><p class="textItemListC3H">Inicio</p></b>
                        </li>
                    </a>
                    <li class="itemListC3H">
                        <b><p class="textItemListC3H">Cónocenos</p></b>
                        <img src="img/arrowMenu.png" alt="" class="imgItemListC3H">
                    </li>
                    <li class="itemListC3H">
                        <b><p class="textItemListC3H">Estudiantes</p></b>
                        <img src="img/arrowMenu.png" alt="" class="imgItemListC3H">
                    </li>
                    <li class="itemListC3H">
                        <b><p class="textItemListC3H">Docentes</p></b>
                        <img src="img/arrowMenu.png" alt="" class="imgItemListC3H">
                    </li>
                    <a href="views/egresados/egresados.html" class="aElement linkHC3" id="egresados">
                        <li class="itemListC3H">
                            <b><p class="textItemListC3H">Egresados</p></b>
                        </li>
                    </a>
					<li class="itemListC3H">
						<b><p class="textItemListC3H">Investigación</p></b>
						<img src="img/arrowMenu.png" alt="" class="imgItemListC3H">
					</li>
                    <li class="itemListC3H">
                        <b><p class="textItemListC3H">Servicios</p></b>
                        <img src="img/arrowMenu.png" alt="" class="imgItemListC3H">
                    </li>
                    <a href="views/gestion-de-calidad/gestion-de-calidad.html" class="aElement linkHC3" id="gestion-de-calidad">
                        <li class="itemListC3H">
                            <b><p class="textItemListC3H">Sistema de Gestión (SIGOE)</p></b>
                        </li>
                    </a>
                    <a href="views/red-de-genero/red-de-genero.html" class="aElement linkHC3" id="red-de-genero">
                        <li class="itemListC3H">
                            <b><p class="textItemListC3H">Red de Género</p></b>
                        </li>
                    </a>
                    <a href="views/comite-ambiental/comite-ambiental.html" class="aElement linkHC3" id="comite-ambiental">
                        <li class="itemListC3H">
                            <b><p class="textItemListC3H">Comité Ambiental</p></b>
                        </li>
                    </a>
                </ul>
            </nav>
            <img src="img/menuWhite.png" alt="" class="imgMenuBarC3H">
        </section>

        <section class="menusC3H">
            <section class="sectMenuIndividual sectMI-I menuKnowUsH">
                <nav class="navMenuI">
                    <ul class="listMenuIndividual">
                        <a href="views/conocenos/historia.html" class="aElement linkHC3" id="historia">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Historia</p>
                            </li>
                        </a>
                        <a href="views/conocenos/organigrama.html" class="aElement linkHC3" id="organigrama">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Organigrama</p>
                            </li>
                        </a>
                        <a href="views/conocenos/directorio.html" class="aElement linkHC3" id="directorio">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Directorio</p>
                            </li>
                        </a>
                        <a href="views/conocenos/galería.html" class="aElement linkHC3" id="galeria">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Galería</p>
                            </li>
                        </a>
                        <a href="views/conocenos/identidad.html" class="aElement linkHC3" id="identidad">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Identidad</p>
                            </li>
                        </a>
                        <a href="index.html#technicalCareers" class="aElement linkHC3">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Oferta Educativa</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </section>
            <section class="sectMenuIndividual sectMI-I menuStudents">
                <nav class="navMenuI">
                    <ul class="listMenuIndividual">
                        <a href="views/estudiantes/subdireccion_academica.html" class="aElement linkHC3" id="">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Subdirección Académica</p>
                            </li>
                        </a>
                        <a href="views/estudiantes/subdireccion_servicios.html" class="aElement linkHC3" id="">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Subdirección de Servicios Educativos e Integración Social</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </section>
            <section class="sectMenuIndividual sectMI-I menuTeachersH">
                <nav class="navMenuI">
                    <ul class="listMenuIndividual">
                        <a href="views/SAES/saes.html" class="aElement">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">SAES</p>
                            </li>
                        </a>
                        <a href="views/docentes/proyecto-aula.html" class="aElement linkHC3" id="proyecto-aula">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Proyecto Aula</p>
                            </li>
                        </a>
                        <a href="views/docentes/tutores.html" class="aElement linkHC3" id="tutores">
                            <li class="itemListMI">
                                <img src="img/logoC3.png" alt="" class="imgItemListMI">
                                <p class="textItemListMI">Tutores</p>
                            </li>
                        </a>
                        <a href="views/docentes/materiales.html" class="aElement linkHC3" id="materiales">
                            <li class="itemListMI">
                                <img src="img/logoC3.png" alt="" class="imgItemListMI">
                                <p class="textItemListMI">Materiales</p>
                            </li>
                        </a>
                        <a href="https://mexicox.gob.mx/" class="aElement linkHC3" target="_blank" id="acciones-de-formacion-docente">
                            <li class="itemListMI">
                                <img src="img/logoC3.png" alt="" class="imgItemListMI">
                                <p class="textItemListMI">Acciones de Formación Docente</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </section>
            <section class="sectMenuIndividual sectMI-I menuInvestigacion">
                <nav class="navMenuI">
                    <ul class="listMenuIndividual">
                        <a href="views/servicios/upis.html" class="aElement linkHC3" id="upis">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">UPIS</p>
                            </li>
                        </a>
                        <a href="https://celex.cecyt3.ipn.mx/" class="aElement linkHC3" id="celex" target="_blank">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">CELEX</p>
                            </li>
                        </a>
                        <a href="views/servicios/bolsa-de-trabajo.html" class="aElement linkHC3" id="bolsa-de-trabajo">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Bolsa de trabajo</p>
                            </li>
                        </a>
                        <a href="views/servicios/capacitacion-profesional.html" class="aElement linkHC3" id="capacitacion-profesional">
                            <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Capacitación profesional</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </section>
            <section class="sectMenuIndividual sectMI-I menuKnowUsH">
                <nav class="navMenuI">
                    <ul class="listMenuIndividual">
					<a href="#" class="aElement linkHC3" id="">
                        <li class="itemListMI">
                            <img src="img/logoC3.png" alt="" class="imgItemListMI">
                            <p class="textItemListMI">Beca BEIFI</p>
                        </li>
					</a>
                    </ul>
                </nav>
            </section>

            <!-- FIN DE MENU - ESCRITORIO -->
            <!-- INCIO DE MENU - RESPONSIVE -->
            <!-- MENU RESPONSIVE -->
            <section class="sectMenuC3H-RES sectMenuC3H-RES-I mC3H">
                <nav class="navMenuC3H-RES mC3H">
                    <ul class="listMenuC3H-RES mC3H">
                        <a href="index.html" class="aElement mC3H linkHC3" id="inicio">
                            <li class="itemMenuC3H-RES mC3H">
                                <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                <p class="textMenuC3H-RES mC3H">Inicio</p>
                            </li>
                        </a>
                        <li class="itemMenuC3H-RES mC3H">
                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                            <p class="textMenuC3H-RES mC3H">Conócenos</p>
                            <img src="img/arrowMenu.png" alt="" class="imgArrowItemMC3H-RES mC3H">
                        </li>
                        <li class="itemSubMenuC3H-RES itemSMC3H-RES-I mC3H">
                            <!-- SUBMENU CONOCENOS -->
                            <nav class="navItemSubMC3H-RES mC3H">
                                <ul class="listItemSMC3H-RES mC3H">
                                    <a href="views/conocenos/historia.html" class="aElement mC3H linkHC3" id="historia">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Historia</p>
                                        </li>
                                    </a>
                                    <a href="views/conocenos/organigrama.html" class="aElement mC3H linkHC3" id="organigrama">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Organigrama</p>
                                        </li>
                                    </a>
                                    <a href="views/conocenos/directorio.html" class="aElement mC3H linkHC3" id="directorio">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Directorio</p>
                                        </li>
                                    </a>
                                    <a href="views/conocenos/galería.html" class="aElement mC3H linkHC3" id="galeria">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Galería</p>
                                        </li>
                                    </a>
                                    <a href="views/conocenos/identidad.html" class="aElement mC3H linkHC3" id="identidad">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Identidad</p>
                                        </li>
                                    </a>
                                    <a href="index.html#technicalCareers" class="aElement mC3H linkHC3">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Oferta Educativa</p>
                                        </li>
                                    </a>
                                </ul>
                            </nav>
                        </li>
                        <li class="itemMenuC3H-RES mC3H">
                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                            <p class="textMenuC3H-RES mC3H">Estudiantes</p>
                            <img src="img/arrowMenu.png" alt="" class="imgArrowItemMC3H-RES mC3H">
                        </li>
                        <li class="itemSubMenuC3H-RES itemSMC3H-RES-I mC3H">
                            <!-- SUBMENU ESTUDIANTES -->
                            <nav class="navItemSubMC3H-RES mC3H">
                                <ul class="listItemSMC3H-RES mC3H">
                                    <a href="views/estudiantes/subdireccion_academica.html" class="aElement mC3H linkHC3" id="">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Subdirección Académica</p>
                                        </li>
                                    </a>
                                    <a href="views/estudiantes/subdireccion_servicios.html" class="aElement mC3H linkHC3" id="">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Subdirección de Servicios Educativos</p>
                                        </li>
                                    </a>
                                </ul>
                            </nav>
                        </li>
                        <li class="itemMenuC3H-RES mC3H">
                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                            <p class="textMenuC3H-RES mC3H">Docentes</p>
                            <img src="img/arrowMenu.png" alt="" class="imgArrowItemMC3H-RES mC3H">
                        </li>
                        <li class="itemSubMenuC3H-RES itemSMC3H-RES-I mC3H">
                            <!-- SUBMENU DOCENTES -->
                            <nav class="navItemSubMC3H-RES mC3H">
                                <ul class="listItemSMC3H-RES mC3H">
                                    <a href="views/SAES/saes.html" class="aElement mC3H">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">SAES</p>
                                        </li>
                                    </a>
                                    <a href="views/docentes/proyecto-aula.html" class="aElement mC3H linkHC3" id="proyecto-aula">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Proyecto Aula</p>
                                        </li>
                                    </a>
                                    <a href="views/docentes/tutores.html" class="aElement mC3H linkHC3" id="tutores">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Tutores</p>
                                        </li>
                                    </a>
                                    <a href="views/docentes/materiales.html" class="aElement mC3H linkHC3" id="materiales">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Materiales</p>
                                        </li>
                                    </a>
                                    <a href="#" class="aElement mC3H linkHC3" id="acciones-de-formacion-docente">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Acciones de Formación Docente</p>
                                        </li>
                                    </a>
                                </ul>
                            </nav>
                        </li>
                        <a href="views/egresados/egresados.html" class="aElement mC3H linkHC3" id="egresados">
                            <li class="itemMenuC3H-RES mC3H">
                                <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                <p class="textMenuC3H-RES mC3H">Egresados</p>
                            </li>
                        </a>
						<li class="itemMenuC3H-RES mC3H">
							<img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
							<p class="textMenuC3H-RES mC3H">Investigación</p>
							<img src="img/arrowMenu.png" alt="" class="imgArrowItemMC3H-RES mC3H">
						</li>

						<li class="itemSubMenuC3H-RES itemSMC3H-RES-I mC3H">
                            <!-- SUBMENU INVESTIGACION -->
                            <nav class="navItemSubMC3H-RES mC3H">
                                <ul class="listItemSMC3H-RES mC3H">
                                    <a href="#" class="aElement mC3H linkHC3" id="">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Becas BEIFI</p>
                                        </li>
                                    </a>
                                </ul>
                            </nav>
                        </li>
                        <li class="itemMenuC3H-RES mC3H">
                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                            <p class="textMenuC3H-RES mC3H">Servicios</p>
                            <img src="img/arrowMenu.png" alt="" class="imgArrowItemMC3H-RES mC3H">
                        </li>
                        <li class="itemSubMenuC3H-RES itemSMC3H-RES-I mC3H">
                            <!-- SUBMENU SERVICIOS -->
                            <nav class="navItemSubMC3H-RES mC3H">
                                <ul class="listItemSMC3H-RES mC3H">
                                    <a href="views/servicios/upis.html" class="aElement mC3H linkHC3" id="upis">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">UPIS</p>
                                        </li>
                                    </a>
                                    <a href="https://celex.cecyt3.ipn.mx/" class="aElement mC3H linkHC3" id="celex" target="_blank">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">CELEX</p>
                                        </li>
                                    </a>
                                    <a href="views/servicios/bolsa-de-trabajo.html" class="aElement mC3H linkHC3" id="bolsa-de-trabajo">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Bolsa de Trabajo</p>
                                        </li>
                                    </a>
                                    <a href="views/servicios/capacitacion-profesional.html" class="aElement mC3H linkHC3" id="capacitacion-profesional">
                                        <li class="itemListISMC3H-RES mC3H">
                                            <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                            <p class="textMenuC3H-RES mC3H">Capacitación Profesional</p>
                                        </li>
                                    </a>
                                </ul>
                            </nav>
                        </li>
                        <a href="views/gestion-de-calidad/gestion-de-calidad.html" class="aElement mC3H linkHC3" id="gestion-de-calidad">
                            <li class="itemMenuC3H-RES mC3H">
                                <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                <p class="textMenuC3H-RES mC3H">Gestión de calidad</p>
                            </li>
                        </a>
                        <a href="views/red-de-genero/red-de-genero.html" class="aElement mC3H linkHC3" id="red-de-genero">
                            <li class="itemMenuC3H-RES mC3H">
                                <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                <p class="textMenuC3H-RES mC3H">Red de Género</p>
                            </li>
                        </a>
                        <a href="views/comite-ambiental/comite-ambiental.html" class="aElement mC3H linkHC3" id="comite-ambiental">
                            <li class="itemMenuC3H-RES mC3H">
                                <img src="img/imgMenuR.png" alt="" class="imgItemMC3H-RES mC3H">
                                <p class="textMenuC3H-RES mC3H">Comité Ambiental</p>
                            </li>
                        </a>
                    </ul>
                </nav>
            </section>
        </section>
    `
}

function setFooterTemplate(){
    footer.innerHTML = `
    <section class="sectLocation">
    <div class="contContactUs">
        <nav class="navContactUs">
            <ul class="listContactUs">
                <a href="https://www.facebook.com/cecyt3oficial" class="aElement" target="_blank" title="Facebook">
                    <li class="itemListCU">
                        <img src="img/facebook.png" alt="" class="imgListCU">
                    </li>
                </a>
                <a href="https://www.instagram.com/cecyt_3/" class="aElement" target="_blank" title="Instagram">
                    <li class="itemListCU">
                        <img src="img/instagram.png" alt="" class="imgListCU imgListCU-instagram">
                    </li>
                </a>
                <a href="#" class="aElement" target="_blank" title="TikTok">
                    <li class="itemListCU">
                        <img src="img/tiktok.png" alt="" class="imgListCU">
                    </li>
                </a>
                <a href="https://twitter.com/CECYT_3" class="aElement" target="_blank" title="Twitter">
                    <li class="itemListCU">
                        <img src="img/twitter.png" alt="" class="imgListCU">
                    </li>
                </a>
                <a href="tel:55 5624 2000" class="aElement" target="_blank" title="Teléfono">
                    <li class="itemListCU">
                        <img src="img/telephone.png" alt="" class="imgListCU imgListCU-telephone">
                    </li>
                </a>
                <a href="mailto:upis.cecyt3@ipn.mx" class="aElement" target="_blank" title="Correo electrónico">
                    <li class="itemListCU">
                        <img src="img/google.png" alt="" class="imgListCU">
                    </li>
                </a>
            </ul>
            <div class="contTextContactUs">
                <h3 class="titleContactUs">Siguenos en nuestras redes sociales</h3>
            </div>
        </nav>
    </div>
    <article class="artRadioIPN">
        <div class="contTitleRadio">
            <h2 class="titleRadio">¡Escuchanos en nuestra estación de radio!</h2>
        </div>
        <div class="contImgRadio">
            <a href="https://www.ipn.mx/radio/" target="_blank">
                <img src="img/radioIPN-medium.png" alt="" class="imgRadio">
            </a>
        </div>
    </article>
    <article class="artLocation">
        <div class="contLocation">
            <h3 class="titleLocation">Ubicación</h3>
            <div style="width: 100%">
                <div style="width: 100%">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Manzana%20CECyT No.3 'Estanislao Ramirez Ruíz',%2055118%20Ecatepec%20de%20Morelos,%20M%C3%A9x.+(Centro%20de%20Estudios%20Cient%C3%ADficos%20y%20Tecnol%C3%B3gicos%20N%C2%B0%203%20%E2%80%9CEstanislao%20Ram%C3%ADrez%20Ruiz%E2%80%9D%20IPN)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe>
                </div>
            </div>
            <p class="textLocation">Av. Carlos Hank González (Av. Central) S/N junto a Mausoleos de San Cristobal, Valle de Ecatepec 55119 Ecatepec de Morelos, Estado de México, México</p>
        </div>
        <div class="contFormContact">
            <form action="" class="formContact">
                <h3 class="titleFormContact">Contáctanos</h3>
                <p>Nombre:</p>
                <input type="text" name="nombre">
                <p>Correo electrónico</p>
                <input type="text" name="correo">
                <p>¿En qué te podemos ayudar?</p>
                <textarea type="text" name="message" class="messageFC"></textarea>
                <input type="button" value="Enviar" class="btnSendFC">
            </form>
        </div>
        <div class="contFacebook">
            <h3 class="titleFormContact" style="padding: .75rem 0 ;">Siguenos</h3>
            <div class="fb-page" data-href="https://www.facebook.com/cecyt3oficial/" data-tabs="timeline" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/cecyt3oficial/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cecyt3oficial/">CECyT No 3 &quot;Estanislao Ramírez Ruiz&quot; Oficial</a></blockquote></div>
        </div>
    </article>
</section>
<section class="sectEduPub">
    <article class="artEduPub">
        <div class="contInfoEP">
            <h3 class="titleEP">Instituto Politécnico Nacional</h3>
            <p class="textEP">
                D.R. 2022 Instituto Politécnico Nacional (IPN) - CECyT 3. Av. Carlos Hank González s/n, Col. Valle de Ecatepec, Ecatepec de Morelos, Edo. de México, CP 55119, Tel. 55 5624 2000 Ext: 74004 cecyt3@ipn.mx
                <br><br>
                Esta página es una obra intelectual protegida por la Ley Federal del Derecho de Autor, puede ser reproducida con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica; su uso para otros fines, requiere autorización previa y por escrito de la Dirección General del Instituto.</p>
        </div>
        <div class="contImgEP">
            <img src="img/educacion2.png" alt="" class="imgEP">
        </div>
    </article>
</section>
<section class="sectGobF">
    <div class="contImgGobF">
        <img src="img/logob.svg" alt="" class="imgGobF">
    </div>
    <nav class="navGobF">
        <ul class="listGobF">
            <li class="itemListGobF">
                <h4 class="titleItemGF">Enlaces</h4>
                <ul class="listItemGobF">
                    <li class="itemListIGF"><a href="https://participa.gob.mx/" class="aElement textItemLIGF">Participa</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/publicaciones" class="aElement textItemLIGF">Publicaciones Oficiales</a></li>
                    <li class="itemListIGF"><a href="http://www.ordenjuridico.gob.mx/" class="aElement textItemLIGF">Marco Jurídico</a></li>
                    <li class="itemListIGF"><a href="https://consultapublicamx.inai.org.mx/vut-web/" class="aElement textItemLIGF">Plataforma Nacional de Transparencia</a></li>
                    <li class="itemListIGF"><a href="https://alertadores.funcionpublica.gob.mx/" class="aElement textItemLIGF">Alerta</a></li>
                    <li class="itemListIGF"><a href="https://sidec.funcionpublica.gob.mx/" class="aElement textItemLIGF">Denuncia</a></li>
                </ul>
            </li>
            <li class="itemListGobF">
                <h4 class="titleItemGF">¿Qué es gob.mx?</h4>
                <p class="textItemGF">Es el portal único de trámites, Información y participación ciudadana. <a href="https://www.gob.mx/que-es-gobmx" class="aElement textItemLIGF">Leer más</a></p>
                <ul class="listItemGobF">
                    <li class="itemListIGF"><a href="https://datos.gob.mx/" class="aElement textItemLIGF">Portal de datos abiertos</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/accesibilidad" class="aElement textItemLIGF">Declaración de accesibilidad</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/privacidadintegral" class="aElement textItemLIGF">Aviso de privacidad integral</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/privacidadsimplificado" class="aElement textItemLIGF">Aviso de privacidad simplificado</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/terminos" class="aElement textItemLIGF">Términos y Condiciones</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/terminos#medidas-seguridad-informacion" class="aElement textItemLIGF">Política de seguridad</a></li>
                    <li class="itemListIGF"><a href="https://www.gob.mx/sitemap" class="aElement textItemLIGF">Mapa de sitio</a></li>
                </ul>
            </li>
            <li class="itemListGobF">
                <h4 class="titleItemGF">Contacto</h4>
                <ul class="listItemGobF">
                    <li class="itemListIGF"><a href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54" class="aElement textItemLIGF">Denuncia contra servidores públicos</a></li>
                </ul>
                <h4 class="titleItemGF">Síguenos en</h4>
                <div class="contImgItemListGF">
                    <a href="https://www.facebook.com/gobmexico" target="_blank" class="aElement"><img src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png" alt="" class="imgItemListGF"></a>
                    <a href="https://twitter.com/GobiernoMX" target="_blank" class="aElement"><img src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png" alt="" class="imgItemListGF"></a>
                </div>
            </li>
        </ul>
    </nav>
</section>
    `
}
setHeaderTemplate();
setFooterTemplate();