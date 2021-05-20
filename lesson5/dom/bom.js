const input = document.querySelector('.input');
const add = document.querySelector('button');
const myList = document.querySelector('.list');

add.addEventListener(function(){ 
    if (input != ''){
    const item = document.createElement('li');
    item.textContent = input.value ;

	const cancel = document.createElement('button');
	cancel.textContent = '❌';
	
    item.append(cancel);
    myList.append(item);	

cancel.addEventListener('click', function(e) {
    myList.removeChild(item)
});
    }

    let clean = input.value;
    input.value = '';
    input.focus();																																						
});