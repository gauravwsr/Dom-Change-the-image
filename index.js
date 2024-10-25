let showcatbtn = document.getElementById("showcat");
let hidecatbtn = document.getElementById("hidecat");
let catimg = document.getElementById("catimg");
let text = document.getElementById("heading");

function hidecat(){
    catimg.src = "img/bluebg_catt.jpeg";
    showcatbtn.style.backgroundColor='grey';
    hidecatbtn.style.backgroundColor='green';
    text.textContent = "switch off";
}

function showcat(){
    catimg.src="img/pink_cat.jpg";
    hidecatbtn.style.backgroundColor='grey';
    showcatbtn.style.backgroundColor='red';
    text.textContent = "switch on";
}