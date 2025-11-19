import {skills} from './singlepagewebsitemodile.js'

const thememode = document.querySelector('#Thememode')
const body = document.body

thememode.addEventListener("click",()=> {

    body.classList.toggle('dark-theme')

    const lightmode = document.querySelector('.lightmode');
    const darkmode = document.querySelector('.darkmode');

    if(body.classList.contains('darkmode')){
        lightmode.style.display = "none";
        darkmode.style.display = "inline-block"
    }
    else{
        lightmode.style.display = "inline-block";
        darkmode.style.display = "none"
    }
})


function renderskill(skills){
    console.log(skills)
  const htmloutput = skills.map(skill => {
        const {skillname,progress,Experience,icon} = skill
      return  `
      <div class="skills-card">
            <h2>${skillname}</h2>
            <progress value="${progress}" max="100">${progress}%</progress>
            <p>${progress}%</p>
            <h2>${Experience}</h2>
            <p>${icon}</p>
        </div>
        `
    })
    return htmloutput.join("")
}


document.querySelector('.protfolio-container').innerHTML = renderskill(skills)