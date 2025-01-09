function flexStart() {
const button = document.querySelectorAll("button")
const ;
console.log("flex-start");
}
//For clicking on the ai pictures and making them pop up
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const thumbnail = document.getElementsByClassName("thumbnail");
function showModal() {
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
}
function hideModal(){
  modal.style.display = "none";
}