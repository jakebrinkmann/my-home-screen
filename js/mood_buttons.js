function openMood(evt, moodName) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    if(moodName === "Calm"){
        document.body.style.backgroundColor = "#2b8cbe";
    };
    if(moodName === "Confident"){
        document.body.style.backgroundColor = "#de2d26";
    };
    if(moodName === "Creative"){
        document.body.style.backgroundColor = "#2ca25f";
    };
}
