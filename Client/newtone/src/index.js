const select = document.querySelector(".box-select")

function closeSelect(){
    const options = document.querySelector(".options");
    const optionsA = document.querySelectorAll(".options a");

    const open = document.querySelector(".icon-open");

    open.style.rotate = "0deg";

    optionsA.forEach((a, index) => {
        a.style.top = "0";      
     })
   

    options.style.top = "0";

    setTimeout(() => {
        options.style.display = "none";
    }, 100);
    
    select.onclick = openSelect;
}

function openSelect(){
    const options = document.querySelector(".options");
    const optionsA = document.querySelectorAll(".options a");

    const open = document.querySelector(".icon-open");

    open.style.rotate = "180deg";

    options.style.display = "flex";

    setTimeout(() => {
        options.style.top = "3rem";
    }, 1)

    optionsA.forEach((a, index) => {
       if(index != 0){
            setTimeout(() => {
                a.style.top = (index * 2.724) + "rem";
            }, 1 * index);
       }
    });
  

    select.onclick = closeSelect;
}

select.onclick = openSelect;


document.addEventListener('scroll', () => {
    const top = document.querySelector(".top");

    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;

    if(scrollY == windowHeight){
        top.style.bottom = "-100vh";
    } else if(scrollY > 0){
        top.style.bottom = "2rem";
    } else{
        top.style.bottom = "-100vh"
    }
})