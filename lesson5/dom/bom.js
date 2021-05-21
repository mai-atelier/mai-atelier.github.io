const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const myList = document.querySelector('.list');

button.addEventListener('click', ()=> {  
    if (input.value !=''){
    let item = document.createElement('li');
    item.textContent = input.value ;

	let deletebutton = document.createElement('button');
    deletebutton.textContent = '❌';
    
    item.append(deletebutton);
    myList.append(item);	
   

deletebutton.addEventListener('click', function() {
    myList.removeChild(item);
    input.focus();
});
    input.value = '';
    input.focus();
}
});