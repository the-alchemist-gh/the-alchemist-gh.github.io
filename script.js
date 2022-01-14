let userName = document.getElementById('visitor-name');
let getUserName = prompt('Wozop, Kindly enter your name');
buttonClicked = document.querySelectorAll(".btn");


userName.innerHTML = getUserName;

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
        document.getElementById('bg-img').src = 'https://res.cloudinary.com/malikbanks/image/upload/v1640548289/Website/bg-hero.svg'
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
