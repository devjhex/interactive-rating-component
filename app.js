let component = document.querySelector(".rating-component");
let componentClasses = component.classList;

let thanksComponent = document.querySelector(".rating-component_thanks");
let thanksComponentClasses = thanksComponent.classList;

let string;
let buttons = document.querySelectorAll(".rating-component__choice-button");
let submitButton = document.querySelector(".rating-component__submit-button");


let thanksText = document.querySelector(".rating-component__select-text");

function send(){ //This function sends the rating selected by the user,writes it to the thank-you state of the component and toggles the hide class on the rating-component as well as on the mobile thank-you-state.


    thanksText.textContent = `You selected ${string} out of 5`; //writing the rating input by the user to the thank-you state of the rating component

    componentClasses.toggle("hide");//toggles the hide class on the rating-component so that it is not visible

    thanksComponentClasses.toggle("hide");
    //toggles the hide class on the thank-you state of the component so that it is visible
}

function selected(e){
    removeClicked();
    let num = Number(e.target.innerHTML);
    let componentClasses = buttons[num-1].classList;
    componentClasses.toggle("button-clicked");
    string = num+"";
}

function removeClicked (){
    buttons.forEach(btn=>{
        btn.classList.remove("button-clicked");
    })
 }

 for (let i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener("click",selected);
 }
 submitButton.addEventListener("click",send);
 