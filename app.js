function newDoc() {
    // let favoritenumber = document.getElementById("favoritenumber").value;

    // window.location.assign("https://www.serebii.net/pokedex-xy/" + favoritenumber + ".shtml#:~:text=Tranquill%20-%20%23520%20-%20Serebii.net%20Pok%C3%A9dex" + '<br>' + "Create By Kanchai Wongchaiya 1630901559")

    window.location.assign("https://www.serebii.net/pokedex-xy/" + (Math.floor(Math.random() * (721 - 100)) + 100) + ".shtml#:~:text=Tranquill%20-%20%23520%20-%20Serebii.net%20Pok%C3%A9dex" + '<br>' + "Create By Kanchai Wongchaiya 1630901559")
}

function arceus() {
    document.getElementById("arceus").innerHTML = "<img src=\"arceus.gif\" width=\"70px\" height=\"80px\">";
}

function celebi() {
    document.getElementById("celebi").innerHTML = "<img src=\"celebi.gif\" width=\"70px\" height=\"60px\">";
}

function suicune() {
    document.getElementById("suicune").innerHTML = "<img src=\"suicune.gif\" width=\"100px\" height=\"80px\">";
}

function hitokage() {
    document.getElementById("hitokage").innerHTML = "<img src=\"hitokage.gif\" width=\"55px\" height=\"70px\">";
}

function lugia() {
    document.getElementById("lugia").innerHTML = "<img src=\"lugia.gif\" width=\"110px\" height=\"90px\">";
}

function megarayquaza() {
    document.getElementById("megarayquaza").innerHTML = "<img src=\"megarayquaza.gif\" width=\"110px\" height=\"90px\">";
}

function objForOf(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let studentid = document.getElementById("studentid").value;
    let phonenumber = document.getElementById("phonenumber").value;
    var favoritenum;
    var favnum;
    favoritenum = document.getElementById("favoritenumber").value;
    if(favoritenum == 0){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Beginner" + '<br>' + "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else if(favoritenum > 0 && favoritenum <= 166){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Beginner" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else if(favoritenum >= 167 && favoritenum <= 332){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Great" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else if(favoritenum >= 333 && favoritenum <= 498){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Expert" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else if(favoritenum >= 499 && favoritenum <= 664){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Veteran" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else if(favoritenum >= 665 && favoritenum <= 830){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Ultra" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else if(favoritenum >= 831 && favoritenum <= 1000){
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Master" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
    else{
        document.getElementById("ex14-3").innerHTML = "<strong><h4>Your Information</h4></strong>" + "Player level : Unable to calculate" + '<br>' +  "Name : " + firstname + " " + lastname + '<br>' +"Student ID : " + studentid + '<br>' + "Phone Number : " + phonenumber + '<br>';
    }
}

function getname(){
    let pokemonname = document.getElementById("pokemonname").value;
    var obj = [pokemonname];
    for(item of obj){
        document.getElementById("getnamepokemon").innerHTML += "Pokemon name : " + item + '<br>';
    }
}
 