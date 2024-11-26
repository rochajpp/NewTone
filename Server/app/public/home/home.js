const select = document.querySelector(".box-select")

function closeSelect(){
    const options = document.querySelector(".options");
    const optionsA = document.querySelectorAll(".options a");

    setTimeout(() => {
        options.style.top = "0";
    }, 1)

    options.style.display = "none";

    setTimeout(() => {
        optionsA.forEach((a) => {
            a.style.position = "absolute";
        })
    }, 1000);

    select.onclick = openSelect;
}

function openSelect(){
    const options = document.querySelector(".options");
    const optionsA = document.querySelectorAll(".options a");
    options.style.display = "flex";

    setTimeout(() => {
        options.style.top = "3rem";
    }, 1)

    setTimeout(() => {
        optionsA.forEach((a) => {
            a.style.position = "relative";
        })
    }, 1000);

    select.onclick = closeSelect;
}

select.onclick = openSelect;