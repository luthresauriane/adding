const buttonElmn=document.querySelector('button');
const inputVal=document.querySelector('input');
const ulListe=document.querySelector('ul');

function addgoal(){
 const valeurEnter= inputVal.value;
 const listElmnt=document.createElement('li');
 listElmnt.textContent=valeurEnter;
 ulListe.appendChild(listElmnt);
 inputVal.value='';
}

buttonElmn.addEventListener('click', addgoal);
