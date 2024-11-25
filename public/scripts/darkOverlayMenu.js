// darkmode
const toggleThemeBtnLg = document.querySelector("#toggle-theme-large");
const toggleThemeBtnSm = document.querySelector("#toggle-theme-small");

toggleThemeBtnLg.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})
toggleThemeBtnSm.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})




// overlay and menu
const overlay = document.querySelector('.overlay');

// desktop ver 
const buttonBox = document.querySelector('.button-box');
const userBox = document.querySelector('.user-box');


// phone ver 
const bergerIcon = document.querySelector('.nav-icon');
const menuPhone = document.querySelector('.nav');
const buttonBoxFather = document.querySelector('.button-box-father');
const navCloseBtn = document.querySelector('.nav-close-btn');


overlay.addEventListener('click', () => {
    overlay.classList.add("invisible");
    overlay.classList.add("opacity-0");
    userBox.classList.add('hidden');
    menuPhone.classList.remove("right-0")
    menuPhone.classList.add("-right-64")
})

buttonBox.addEventListener('click' , () =>{
    buttonBoxFather.classList.add("z-50");

    if (overlay.className.includes('invisible') && overlay.className.includes('opacity-0')) {
        overlay.classList.remove('invisible');
        overlay.classList.remove('opacity-0');
        userBox.classList.remove('hidden');
    } else {
        overlay.classList.add('invisible');
        overlay.classList.add('opacity-0');
        userBox.classList.add('hidden');
    }
})

bergerIcon.addEventListener('click' , () => {
    menuPhone.classList.remove("-right-64")
    menuPhone.classList.add("right-0")
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")
    overlay.classList.add("visible")
    overlay.classList.add("opacity-100")
    buttonBoxFather.classList.remove("z-50")
})

navCloseBtn.addEventListener('click' , () => {
    menuPhone.classList.add("-right-64")
    menuPhone.classList.remove("right-0")
    overlay.classList.remove("visible")
    overlay.classList.remove("opacity-100")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
})

//submenu
const lies = document.querySelectorAll('.submenu-open');



lies.forEach(function (item) { 

    item.addEventListener('click' , function (e) { 
        console.log(e.target.tagName);


            if (e.currentTarget.children[1].className.includes('flex') && ((e.target.tagName === 'DIV') || (e.target.tagName === 'svg'))) {
                e.currentTarget.children[1].classList.remove('flex');
                e.currentTarget.children[0].children[0].classList.remove('text-textMain');
                e.currentTarget.children[0].children[1].classList.remove('text-textMain');
                e.currentTarget.children[0].children[1].classList.remove('-rotate-90');
            } else {
                e.currentTarget.children[1].classList.add('flex');
                e.currentTarget.children[0].children[0].classList.add('text-textMain');  
                e.currentTarget.children[0].children[1].classList.add('-rotate-90');
                e.currentTarget.children[0].children[1].classList.add('text-textMain');  
            }


    })    
})


// lies.forEach(function (item) { 

//     item.addEventListener('click' , function (e) { 
//         console.log(e.target.tagName);

//             if (e.currentTarget.children[1].className.includes('flex') && ((e.target.tagName === 'DIV') || (e.target.tagName === 'svg'))) {
//                 e.currentTarget.children[1].classList.remove('flex');
//                 e.currentTarget.children[0].children[0].classList.remove('text-textMain');
//                 e.currentTarget.children[0].children[1].classList.remove('text-textMain');
//                 e.currentTarget.children[0].children[1].classList.remove('-rotate-90');
//                 e.currentTarget.children[0].children[1].classList.remove('transform');
//                 // e.currentTarget.children[0].children[1].removeAttribute("style");
//             } else {
//                 e.currentTarget.children[1].classList.add('flex');
//                 e.currentTarget.children[0].children[0].classList.add('text-textMain');  
//                 e.currentTarget.children[0].children[1].classList.add('transform');
//                 e.currentTarget.children[0].children[1].classList.add('-rotate-90');
//                 // e.currentTarget.children[0].children[1].setAttribute("style", "transform:rotate(260deg)");
//                 e.currentTarget.children[0].children[1].classList.add('text-textMain');  
//             }
//     })    
// })