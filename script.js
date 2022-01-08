let userName = document.getElementById('visitor-name');
// let getUserName = prompt('Wozop, Kindly enter your name');
buttonClicked = document.querySelectorAll(".btn");


// userName.innerHTML = getUserName;
buttonClicked.forEach(btnClick => btnClick.addEventListener('click', ()=>{
    // console.log(e)
    const audio = document.querySelector('audio')
    if(!audio) return; // stop function from running
    audio.currentTime = 0; //rewind to start
    audio.play();
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
