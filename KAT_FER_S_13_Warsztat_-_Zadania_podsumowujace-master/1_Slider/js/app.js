const prevButton = document.querySelector("#prevPicture")
const nextButton = document.querySelector("#nextPicture")
const pictures = document.querySelectorAll(".li")
const tabOfPictures = [pictures];
tabOfPictures[0][0].classList.add('visible');
let counter = 0;
nextButton.addEventListener("click", function(){
    if(counter === pictures.length - 1){
        counter = 0;
        tabOfPictures[0][pictures.length - 1].classList.remove('visible');
    }else{
        counter++;
        tabOfPictures[0][counter-1].classList.remove('visible');
    }
    tabOfPictures[0][counter].classList.add('visible');
})
prevButton.addEventListener("click", function(){
    counter--;
    if (counter === -1){
        counter = pictures.length -1;
        tabOfPictures[0][0].classList.remove('visible');
        tabOfPictures[0][counter].classList.add('visible');
    }else{
        tabOfPictures[0][counter+1].classList.remove('visible');
        tabOfPictures[0][counter].classList.add('visible');
    }
    
})