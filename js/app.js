const rateBtn = document.querySelectorAll("button.btn");
const submitBtn = document.getElementById("submit");
const rate = document.querySelector(".rate");
const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card")

rateBtn.forEach((element) => {
    element.addEventListener("click", () => {
        rateBtn.forEach((remove) => {
        remove.classList.remove("active");
      });
      element.classList.add("active");
    });
});

let submitFunc = () => {
    
    rateBtn.forEach((btn)=>{
        if (btn.classList.contains("active")) {
            rate.innerHTML = `You selected ${btn.innerHTML} out of 5`
            firstCard.classList.add("d-none");
            secondCard.classList.remove("d-none")


        }
    })
    
    
}
submitBtn.addEventListener("click",submitFunc);

