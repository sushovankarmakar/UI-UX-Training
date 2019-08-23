var toDoListArray = [];

function addNewElement(){

	var inputValue = document.getElementById("textInput").value;
	if(inputValue == ''){
		alert("You should write something");
	}
	else{
		toDoListArray.push(inputValue);
		var text = document.createTextNode(inputValue);

		var tableRow = document.createElement("tr");
	
		var editButton = document.createElement("button");
		editButton.type = "button";
		editButton.innerHTML = "Edit";
		editButton.onclick = function(){
			editElement(this);
		} 

		var deleteButton = document.createElement("button");
		deleteButton.type = "button";
		deleteButton.innerHTML = "Delete";
		deleteButton.onclick = function(){
			deleteElement(this);	
		}

		tableRow.insertCell(0).appendChild(text);
		tableRow.insertCell(1).appendChild(editButton);
		tableRow.insertCell(2).appendChild(deleteButton);
	
		document.getElementById("toDoTable").appendChild(tableRow);
	}
	document.getElementById("textInput").value = "";	
}


function searchElement(){
	var inputValue = document.getElementById("textInput").value;
	var found = false;
	console.log(inputValue);
	console.log(toDoListArray);
	toDoListArray.find(function(inputValue){

			
			for (var i = 0; i < toDoListArray.length; i++) {
		 		if(toDoListArray[i] === inputValue) {
		 			found = true;
		 			console.log("Found");
		 			break;
		 		}
			}

			if(!found) console.log("Not Found");
		}   
	);
}


function editElement(editButton){
	editButton.innerHTML = "Save";
	
	var taskName = editButton.parentNode.parentNode.getElementsByTagName("td")[0];
	taskName.innerHTML = "";

	var textBox = document.createElement("input");
	textBox.type = "text";
	textBox.placeholder = "Edit your task";

	taskName.appendChild(textBox);
	//editButton.parentNode.parentNode.insertCell(0);

	editButton.onclick = function(){
		var val = document.createTextNode(textBox.value);
        taskName.appendChild(val); 
        taskName.removeChild(textBox);
		editButton.innerHTML = "Edit";
		editButton.onclick = function() {
			editElement(this);
		}
	}
}

function deleteElement(deleteButton){
	var toDoTable = document.getElementById("toDoTable");
	var rowToDelete = deleteButton.parentNode.parentNode;
	toDoTable.deleteRow(rowToDelete.rowIndex);
	toDoListArray.splice(rowToDelete.rowIndex[0]);
}

