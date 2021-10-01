console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', () => {
	alert("The form has been successfully submitted!")
});

let picture =document.querySelector("img")
picture.addEventListener("mouseover", () => {
	alert("Haha you're so funny!") 
});
