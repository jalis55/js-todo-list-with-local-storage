displayDate = () => {
    let date = new Date();
    date = date.toString().split(" ")
    let dateElement = document.querySelector("#date");
    dateElement.innerText = date[2] + ' ' + date[1] + ' ' + date[3];

}
// display date


//local storage
listItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items")) :
    []


let submitBtn=document.querySelector("#enter")
//add event listener
submitBtn.addEventListener('click',(e)=>{
    
    e.preventDefault();
    let item=document.querySelector("#item");
    if(item.value==="" || item.value==null){
        document.querySelector("#warning").innerText="Item can not be empty";
        return false;
        
    }
    else{
        createItem(item.value);
        item.value=""
        displayItems();
    }
})

let createItem=(item)=>{
    listItems.push(item);
    localStorage.setItem("items",JSON.stringify(listItems));
    // location.reload();
    
}
let displayItems=()=>{
    let items=""
    listItems.map((item)=>{
       items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${item}</textarea>
                  <div class="edit-controller">
                    <i class="fa-solid fa-check deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
    })
    document.querySelector(".to-do-list").innerHTML=items;
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
}

function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
  }
  
  function activateEditListeners(){
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eB, i) => {
      eB.addEventListener("click", () => { 
        updateController[i].style.display = "block"
        inputs[i].disabled = false })
    })
  }
  
  function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sB, i) => {
      sB.addEventListener("click", () => {
        updateItem(inputs[i].value, i)
      })
    })
  }
  
  function activateCancelListeners(){
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cB, i) => {
      cB.addEventListener("click", () => {
        updateController[i].style.display = "none"
        inputs[i].disabled = true
        inputs[i].style.border = "none"
      })
    })
  }
  

  
  function deleteItem(i){
    listItems.splice(i,1)
    localStorage.setItem('items', JSON.stringify(listItems))
    location.reload()
  }
  
  function updateItem(text, i){
    listItems[i] = text
    localStorage.setItem('items', JSON.stringify(listItems))
    location.reload()
  }

window.onload = () =>{
    displayDate();
    displayItems();
};


