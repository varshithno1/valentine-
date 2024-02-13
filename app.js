const no = document.querySelector(".no");
const yes = document.querySelector(".yes");


const change = () => {
    const i = Math.floor(Math.random()*400) + 1;
    const j = Math.floor(Math.random()*200) + 1;
    no.style.left = `${i}px`;
    no.style.top = `${j}px`;
}

no.addEventListener("mouseover", change);
no.addEventListener("click", change);

