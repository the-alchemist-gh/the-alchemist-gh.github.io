let userName = document.getElementById('visitor-name');
let buttonClicked = document.querySelectorAll(".btn");
let favBtn = document.querySelectorAll('.fav-btn');
let favDesc = document.querySelector('#fav-desc');
let favDescText = document.createElement('h4');

let projectMenu = document.querySelectorAll('.project-menu-item');


// Play Sound
buttonClicked.forEach(btnClick => btnClick.addEventListener('click', ()=>{
    console.log(btnClick.id)
    const audio = document.querySelector('audio')
    if(!audio) return; // stop function from running
    audio.currentTime = 0; //rewind to start
    // audio.play();

    // Dark mode and Light Mode
    if (btnClick.id === 'darkMode'){
        document.querySelector("link[href='styles.css']").href = 'lightmode.css';
        btnClick.id = 'lightMode';
        document.getElementById('bg-img').src = 'https://res.cloudinary.com/malikbanks/image/upload/v1642127164/Website/guNa48ED_400x400-removebg-preview.png'

    } else if(btnClick.id === 'lightMode') {
        document.querySelector("link[href='lightmode.css']").href = 'styles.css';
        btnClick.id = 'darkMode';
        document.getElementById('bg-img').src = 'https://res.cloudinary.com/malikbanks/image/upload/v1642717595/Website/herobg-removebg-preview.png'
    }
}));
// for (let i=0; i<buttonClicked.length; i++){
//   buttonClicked[i].addEventListener('click',function(e){
//     console.log(e)
//     const audio = document.querySelector('audio')
//     if(!audio) return; // stop function from running
//     audio.currentTime = 0; //rewind to start
//     audio.play();
//     // console.log(audio);
//   });
// }

favBtn.forEach(favBtnClicked => favBtnClicked.addEventListener(
    'click', ()=>{

        for(let i=0; i<favBtn.length; i++){
            favBtn[i].classList.remove('active-fav-btn');
        }
        // favBtnClicked.classList.remove('active-fav-btn');


        if(favBtnClicked.id === 'quoteBtn'){
            favDescText.innerText = 'When you want something, all the Universe conspires in helping you to achieve it.';
            favDesc.style.display = 'block'
            favDesc.appendChild(favDescText);
            favBtnClicked.classList.add('active-fav-btn');
        } else if(favBtnClicked.id === 'bookBtn'){
            // if(favBtn.classList.contain('active-fav-btn')){
            //     favBtn.classList.remove('active-fav-btn');
            // };
            favDescText.innerText = 'The Alchemist, Who moved my Cheese';
            favDesc.style.display = 'block'
            favDesc.appendChild(favDescText);
            favBtnClicked.classList.add('active-fav-btn');

        } else if(favBtnClicked.id === 'movieBtn'){

            favDescText.innerText = '3 Idiots, InTime';
            favDesc.style.display = 'block'
            favDesc.appendChild(favDescText);
            favBtnClicked.classList.add('active-fav-btn');

        } 
        // else if(favBtnClicked.id === 'peopleBtn'){
            
        //     favDescText.textContent = 'Samira';
        //     favDesc.style.display = 'block'
        //     favDesc.appendChild(favDescText);
        //     favBtnClicked.classList.add('active-fav-btn');
        // }
    }
));


// Project Menu Click
projectMenu.forEach(projectMenuClicked => projectMenuClicked.addEventListener(
    'click', ()=>{

      console.log('jh')
        let projectItem = document.querySelectorAll('.project');
        for(let i=0; i<projectItem.length; i++){
          projectItem[i].classList.remove('hide');

            if(projectMenuClicked.id === 'custom-built'){
              if(projectItem[i].classList.contains('custom-built')=== false){
                projectItem[i].classList.add('hide');
              }
            }
            if(projectMenuClicked.id === 'design-project'){
              if(projectItem[i].classList.contains('design-project')=== false){
                projectItem[i].classList.add('hide');
              }
            }
            if(projectMenuClicked.id === 'wordpress-project'){
              if(projectItem[i].classList.contains('wordpress-project')=== false){
                projectItem[i].classList.add('hide');
              }
            }
            
        }
    }
));
