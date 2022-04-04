function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
function closeLightboxModal() {
    const modal = document.querySelector(".lightbox");
    modal.style.display = "none";
}

function sendForm() {
const allInputText = document.querySelectorAll("input[type='text']")
console.log(allInputText[0].value);
console.log(allInputText[1].value);
console.log(allInputText[2].value);
console.log(document.querySelector(".message_label").value);

}


