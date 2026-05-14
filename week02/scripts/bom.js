
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
    if (input.value != ""){
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        li.append(deleteBtn);
        list.append(li);
        deleteBtn.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        }) 
        input.value = "";
        input.focus();
    }
});

