// Button + Input list
const input = document.getElementById("input");
const list = document.getElementById("list");

// Input + Go
function addTask(){
    if(input.value===''){
        alert("You must write something!");
    }
    else{
        const trash = document.createElement("span");
        trash.type = 'span';
        trash.name = 'button';
        trash.value = '';
        trash.innerHTML = "&#9746";
        trash.classList.add("styletrash");

        const checkbox = document.createElement("span");
        checkbox.type = 'span';
        checkbox.name = 'checkbox';
        checkbox.value = '';

        const li = document.createElement('li');
        li.innerHTML = input.value;

        list.appendChild(li);
        li.appendChild(trash);
        li.appendChild(checkbox);
    }
    input.value="";
}

// Click + Delete button
listitems.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("checked");
    }
    else if (e.target.className==="styletrash") { 
        e.target.parentElement.remove();
    }
}, false);
 



