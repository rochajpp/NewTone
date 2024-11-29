const help = document.querySelector(".help");

help.onmouseover = () => {
    const span = document.querySelector(".help");
    span.style.right = "0";
}

help.onmouseout = () => {
    const span = document.querySelector(".help");
    span.style.right = "-40rem";
}
