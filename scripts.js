displayDate = () => {
    let date = new Date();
    date = date.toString().split(" ")
    let dateElement = document.querySelector("#date");
    dateElement.innerText = date[2] + ' ' + date[3] + ' ' + date[1];

}
// display date
window.onload=()=>displayDate();

//local storage
listItems=localStorage.getItem('items')?JSON.parse(localStorage.getItem("items")):
[]
console.log(listItems);