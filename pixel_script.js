/*function convinientstore() {                                      My idea for the scrip (didnt work)
    document.getElementById("choseGame").style.display ="none";
    document.getElementById("Cybr").style.display="none";

    document.getElementById("convinientstore").style.display="block"
}
*/

/*----- js for chosegame section----*/
function showGame(sectionId) {      /*chat gpts script that dose work*/
    /*hides the other parts when the function is clicked*/
    document.getElementById("choseGame").style.display = "none";       
    document.getElementById("convinentstore").style.display = "none";
    document.getElementById("Cybr").style.display = "none";

    /*opens the part you clicked */
    document.getElementById(sectionId).style.display = "block";

    /*opens the one that is opend*/
    if (sectionId === "convinentstore") { /*chat gpt made clener version*/
        storeIndex = 1;
        storeShowSlides(storeIndex);
    }

    if (sectionId === "Cybr") {
        cybrIndex = 1;
        cybrShowSlides(cybrIndex);
    }
}

/*---- js for store slide show ---  disclamer i did not program the slide show i found and copypasted from w3school i have read trough it and understand most of it*/
/*opens store part*/
let storeIndex = 1;
storeShowSlides(storeIndex);

// Next/previous controls
function storePlusSlides(n) {
  storeShowSlides(storeIndex += n);
}

// Thumbnail image controls
function storeCurrentSlide(n) {
  storeShowSlides(storeIndex = n);
}

function storeShowSlides(n) {   /* opens the n img and gets the dots. not sure exacly how the rest works */
  let i;                
  let slides = document.getElementsByClassName("storeSlides");
  let dots = document.getElementsByClassName("storedot");
  if (n > slides.length) {storeIndex = 1}
  if (n < 1) {storeIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[storeIndex-1].style.display = "block";
  dots[storeIndex-1].className += " active";
}


/*---- js for cybr slide show---  disclamer i did not program the slide show i found and copypasted from w3school i have read trough it and understand most of it*/
/*opens the cybr part*/
let cybrIndex = 1;
cybrShowSlides(cybrIndex);

// Next/previous controls
function cybrPlusSlides(n) {
  cybrShowSlides(cybrIndex += n);
}

// Thumbnail image controls
function cybrCurrentSlide(n) {
  cybrShowSlides(cybrIndex = n);
}

function cybrShowSlides(n) {     /* opens the n img and gets the dots. not sure exacly how the rest works */
  let i;
  let slides = document.getElementsByClassName("cybrSlides");
  let dots = document.getElementsByClassName("cybrdot");
  if (n > slides.length) {cybrIndex = 1}
  if (n < 1) {cybrIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[cybrIndex-1].style.display = "block";
  dots[cybrIndex-1].className += " active";
}
