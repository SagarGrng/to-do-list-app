var addNew = document.querySelector('#div-1 > #add-list');
var addBtn = document.getElementById('add-btn');
var searchItem = document.querySelector('#div-1 > #div-2 > input');
var ulDiv = document.getElementById('task-list');
var clickedUl = document.getElementById('lists');


addBtn.addEventListener('click',addList);
ulDiv .addEventListener('click',deleteItem);
clickedUl.addEventListener('click',addClass);
searchItem.addEventListener('keyup',searchList);


function addList(){
	var addNew = document.querySelector('#div-1 > input');
	//var ul = document.getElementById('task-list');
	var ulList = document.getElementById('lists');
	var addNewList = addNew.value;
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(addNewList));
	li.setAttribute('id','lists');
	var button1 = document.createElement('button');
	button1.appendChild(document.createTextNode('X'));
	button1.setAttribute('class','delete-btn');
	li.appendChild(button1);
	ulDiv.appendChild(li);
	//ulDiv.insertAfter(li,ulList);
}
function deleteItem(e){
	if(e.target.classList.contains('delete-btn')){
		if(confirm("Delete?")){
			var list = e.target.parentElement;
			ulDiv.removeChild(list);
		}
	}
}
function addClass(){
	clickedUl.classList.add('clicked');
}
function searchList(e){
	var searchItem = document.querySelector('#div-1 > #div-2 > input').value.toLowerCase();
	var lists = document.getElementsByTagName('li');

	Array.from(lists).forEach(function(list){
		var listName = list.textContent;
		if(listName.toLowerCase().indexOf(searchItem) != -1){
			list.style.display='block';
		}else{
			list.style.display='none';
		}
	});

}


