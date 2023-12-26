const icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "https://www.iconpacks.net/icons/2/free-icon-sun-3334.png"
    }else{
        icon.src  = "c:\Users\acesn\Downloads\moon.svg";
    }
}