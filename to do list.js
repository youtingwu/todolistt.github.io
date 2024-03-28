function additem() {
    const ul=document.getElementById("list");
    const input=document.getElementById("input");
    const text=input.value;
    if (text==="") {
        alert("請輸入文字")
        return;
    }

    const newItem=document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText=text;

    newItem.onclick=checkItem;

    const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;
  newItem.appendChild(deleteButton);
    input.value="";
    ul.appendChild(newItem);
}

function checkItem() {
    const item=this;
    item.classList.toggle("checked");
}

function deleteItem() {
   
    const item = this.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
    
}


const addbuttom=document.getElementById("add-buttom");
addbuttom.addEventListener("click",additem);

const form=document.getElementById("input-wrapper");
form.addEventListener("submit",(e)=>{
e.preventDefault();
});