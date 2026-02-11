/*function convinientstore() {                                      My idea for the scrip (didnt work)
    document.getElementById("choseGame").style.display ="none";
    document.getElementById("Cybr").style.display="none";

    document.getElementById("convinientstore").style.display="block"
}
*/
function showGame(sectionId) {      /*chat gpts script that dose work*/
    // hide all sections
    document.getElementById("choseGame").style.display = "none";
    document.getElementById("convinentstore").style.display = "none";
    document.getElementById("Cybr").style.display = "none";

    // show the selected section
    document.getElementById(sectionId).style.display = "block";
}