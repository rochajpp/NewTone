const select = document.querySelector(".box-select")

function closeSelect(){
    const options = document.querySelector(".options");
    const optionsA = document.querySelectorAll(".options a");

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

    options.style.display = "flex";

    setTimeout(() => {
        options.style.top = "3rem";
    }, 1)

    

    optionsA.forEach((a, index) => {
       if(index != 0){
            setTimeout(() => {
                a.style.top = (index * 2.724) + "rem";
            }, 90 * index);
       }
    });
  

    select.onclick = closeSelect;
}

select.onclick = openSelect;


