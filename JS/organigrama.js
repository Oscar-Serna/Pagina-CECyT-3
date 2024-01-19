const memberOrg = document.querySelectorAll('.memberOrg');
const textMemberOrg = document.querySelectorAll('.textMemberOrg');
const imgMemberOrg = document.querySelectorAll('.imgMemberOrg');
const sectionOrganization = document.querySelector('.sectionOrganization');

//  VARIBALES DE LA VENTANA: INFORMACION DEL EMPLEADO
const sectionInfoMember = document.querySelector('.sectionInfoMember');
const titleMemberWindow = document.querySelector('.titleMember');
const imgMemberWindow = document.querySelector('.imgMember');
const nameMemberWindow = document.querySelector('.nameMember');
const extMemberWindow = document.querySelector('.extMember');
const emailMember = document.querySelector('.emailMember');
const btnCloseMember = document.querySelector('.btnCloseMember');


const arrInfoMembers = [
    ["M. en E. José Diego Rubén Aguila Chávez", "Ext. 74004", "cecyt3@ipn.mx"],
    [null],
    [null],
    ["Quím. Otilia Torres Vivanco", "Ext. 74019", null],
    ["Lic. Jarumi Lizzette Pano Díaz", "Ext. 74020", "ceget.cecyt3@ipn.mx"],
    ["Lic. Erik Benjamin Herrera López", "Ext. 74050", "udi.cecyt3@ipn.mx"],
    ["M. en E. Alejandrina González Morales", "Ext. 74013", "subacad.cecyt3@ipn.mx"],
    ["M. en C. Viridiana Viveros Chávez", "Ext. 74032", null],
    ["M. en E. Juan Felipe Vazquez Vergara", "Ext. 74028", null],
    ["Lic. David Hernandez Ponce", "Ext. 74027", null],
    ["Ing. Pablo Indalecio Estrella Conde", "Ext. 74026", null],
    ["Lic. José Luis Vázquez Piñón", "Ext. 74001", null],
    ["M. en C. Carlos Antonio Madrid Trejo", "Ext. 74035", null],
    ["Lic. José Camilo Martínez Ochoa", "Ext. 74011", "seeis.cecyt3@ipn.mx"],
    ["Lic. Saúl Rojas Tentle", "Ext. 74012", "dge.cecyt3@ipn.mx"],
    ["M. en A.F. Jesús Ernesto Moreno Salas", "Ext. 74030", null],
    ["Ing. Mónica Martínez Chávez", "Ext. 74015", null],
    ["Lic. Gemma Velazquez Delgado", "Ext. 74008", null],
    ["Dra. Magdalena Mireya Sosa Núñez", "Ext. 74025", "subadmin.cecyt3@ipn.mx"],
    ["Lic. Raquel Grisel Gómez Godínez", "Ext. 74040", "dch.cecyt3@ipn.mx"],
    ["M.A.N. Mónica Alejandra García Muñoz", "Ext. 74029", null],
    ["Ing. Juan Alberto Montaño Archundia", "Ext. 74037", "remys.cecyt3@ipn.mx"]
];

function SetIdMemberOrg(){
    for(let i = 0; i < memberOrg.length; i++){
        memberOrg[i].id = i;
     }
}
SetIdMemberOrg();


function getImageURL(pos){
    return imgMemberOrg[pos].src;
}

function getNameJobMember(pos){
    return textMemberOrg[pos].textContent;
}

function setInfoMember(cases, id){
    if(cases === undefined || id == undefined) return;
    if(arrInfoMembers[id][0] === null) return;
    showWindowInfoMember();
    imgMemberWindow.src = getImageURL(id);
    titleMemberWindow.textContent = getNameJobMember(id);
    nameMemberWindow.textContent = arrInfoMembers[id][0];
    extMemberWindow.textContent = arrInfoMembers[id][1];
    emailMember.textContent = arrInfoMembers[id][2];
}

sectionOrganization.addEventListener('click', (event) => {
    const target = event.target;
    let caseClassList = undefined;
    let idMember = undefined;

    if(target.classList.contains('memberOrg')){
        caseClassList = 'own';
        idMember = target.id;
    }else if(target.parentNode.classList.contains('memberOrg')){
        caseClassList = 'children';
        idMember = target.parentNode.id;
    }else if(target.parentNode.parentNode.classList.contains('memberOrg')){
        caseClassList = 'childrenOfChildren';
        idMember = target.parentNode.parentNode.id;
    }

    setInfoMember(caseClassList, idMember);
})

function showWindowInfoMember(){
    if(sectionInfoMember.classList.contains('sectionIM-I')){
        sectionInfoMember.classList.replace('sectionIM-I', 'sectionIM-A');
        return;
    }
    sectionInfoMember.classList.replace('sectionIM-A', 'sectionIM-I');
}

sectionInfoMember.addEventListener('click', (event) => {
    if(event.target.classList.contains('sectionInfoMember')){
        showWindowInfoMember();
    }
})

btnCloseMember.addEventListener('click', () => {
    showWindowInfoMember();
})