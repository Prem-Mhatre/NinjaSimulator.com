document.onkeydown = function(e){
    console.log("key = " + e.keyCode);
    // Game Variables
    var Cmove = false;
    // Variable Elements & Position
    var ninja = document.querySelector(".ninja");
    var carnage = document.querySelector(".carnage");
    var Chealth = document.querySelector(".Chealth");
    var Nhealth = document.querySelector(".Nhealth");
    var ninjaX = parseInt(window.getComputedStyle(ninja).getPropertyValue("left"));
    var ninjaY = parseInt(window.getComputedStyle(ninja).getPropertyValue("top"));
    var carnageX = parseInt(window.getComputedStyle(carnage).getPropertyValue("left"));
    var carnageY = parseInt(window.getComputedStyle(carnage).getPropertyValue("top"));
    var Chealth_width = Chealth.clientWidth;
    var Nhealth_width = Nhealth.clientWidth;
    // Variable Carnage & Ninja Events
    var carnage_punch = false;
    var carnage_kick = false;
    var carnage_spilt = false;
    var carnagemove = true;
    var ninja_punch = false;
    var ninja_kick = false;
    var ninja_spilt = false;

    // Carnage & Ninja Controls
    // ninja controls
    if(e.keyCode == 81 && Nhealth_width > 1 && Chealth_width > 1){
        if(ninja.classList == "ninja_punch"){return};
        ninja.classList.add("ninja_punch");
        ninja_punch = true;
        setTimeout(function() {
            ninja.classList.remove("ninja_punch");
            ninja_punch = false;
        },300);
    }
    if(e.keyCode == 87 && Nhealth_width > 1 && Chealth_width > 1){
        if(ninja.classList == "ninja_kick"){return}
        ninja.classList.add("ninja_kick");
        ninja_kick = true;
        setTimeout(function(){
            ninja.classList.remove("ninja_kick");
            ninja_kick = false;
        },300)
    }
    if(e.keyCode == 38 && Nhealth_width > 1 && Chealth_width > 1){
        if(ninja.classList =="ninja_spilt"){return};
        ninja.classList.add("ninja_spilt");
        ninja_spilt = true;
        setTimeout(function(){
            ninja.classList.remove("ninja_spilt");
            ninja_spilt = false;
        },300)
    }
    if(e.keyCode == 37 && Nhealth_width > 1 && Chealth_width > 1){
        ninja.style.left = ninjaX - 50 + "px";
    }
    if(e.keyCode == 39 && Nhealth_width > 1 && Chealth_width > 1){
        ninja.style.left = ninjaX + 50 + "px";
    }

    // carnage controls
    if(carnagemove = true){
    carnage.style.left = ninjaX + "px";
    }
    if(Chealth_width > 1 && Nhealth_width > 1){
        Cmove = true;
    }
    if(Cmove == true){
        var randomMove = Math.floor(Math.random() * 4);
        if(randomMove == 1){
            carnage_punch = true;
        }
        if(randomMove == 2){
            carnage_kick = true;
        }
        if(randomMove == 3){
            carnage_spilt = true;
        }
    }

    console.log(ninjaX);
    console.log(Nhealth_width);
    
    setInterval(() => { 
    // carnage touches ninja
    if(carnage_punch == true){
        carnage.classList.add("carnagepunch");
        carnage_punch = true;
        setTimeout(() => {
            carnage_punch = false;
            carnage.classList.remove("carnagepunch")
        }, 1000);
    }
    if(carnage_spilt == true){
        carnage.classList.add("carnage_spilt");
        carnage_spilt = true;
        setTimeout(() => {
            carnage_spilt = false;
            carnage.classList.remove("carnage_spilt");
        },1000);
    }
    if(carnage_kick == true){
        carnage.classList.add("carnage_kick");
        carnage_kick = true;
        setTimeout(() => {
            carnage_kick = false;
            carnage.classList.remove("carnage_kick");
        },1000);
    }
    if(carnageX == ninjaX && carnage_punch == true){
        Nhealth_width-=3;
        Nhealth.style.width = Nhealth_width + "px";
    }
    if(carnageX == ninjaX && carnage_kick == true){
        Nhealth_width-=4;
        Nhealth.style.width = Nhealth_width + "px";
    }
    if(carnageX == ninjaX && carnage_spilt == true){
        ninja.style.left = ninjaX - 10 + "px";
        Nhealth_width-=5;
        Nhealth.style.width = Nhealth_width + "px";
    }
    // ninja touches carnage
    if(carnageX == ninjaX && ninja_punch == true){
        Chealth_width-=2;
        Chealth.style.width = Chealth_width + "px";
        carnage.style.left = carnageX + 10 + "px";
    }
    if(carnageX == ninjaX && ninja_kick == true){
        Chealth_width-=3;
        Chealth.style.width = Chealth_width + "px";
        carnage.style.left = carnageX + 10 + "px";
    }
    if(carnageX == ninjaX && ninja_spilt == true){
        Chealth_width-=4;
        Chealth.style.width = Chealth_width + "px";
        carnage.style.left = carnageX + 10 + "px";
    }
    if(Chealth_width < 50){
        if(carnageX == ninjaX && ninja_punch == true){
            Chealth_width-=1;
            Chealth.style.width = Chealth_width + "px";
            carnage.style.left = carnageX + 10 + "px";
        }
        if(carnageX == ninjaX && ninja_kick == true){
            Chealth_width-=2;
            Chealth.style.width = Chealth_width + "px";
            carnage.style.left = carnageX + 10 + "px";
        }
        if(carnageX == ninjaX && ninja_spilt == true){
            Chealth_width-=3;
            Chealth.style.width = Chealth_width + "px";
            carnage.style.left = carnageX + 10 + "px";
        }
    }
  }, 200);
  if(ninjaX > 1500){
    ninja.style.left = 1500 + "px";
}
if(ninjaX < 0){
    ninja.style.left = 0 + "px";
} 
if(carnageX > 1500){
    carnage.style.left = 1500 + "px";
}
if(carnageX < 0){
    carnage.style.left = 0 + "px";
}
    // winning function
    if(Chealth_width < 1){
        carnage_punch = false;
        carnage_kick = false;
        carnage_spilt = false;
        Cmove = false;
        carnage.classList.add("carnage_die");
        carnage.style.left = carnageX + "px";
        carnagemove = false;
        alert("EPIC!, You Won The Game, Reload To Play Again, You take the carnage on 0%")
    }
    // loss function
    if(Nhealth_width < 1){
        carnage_punch = false;
        carnage_kick = false;
        carnage_spilt = false;
        ninja.classList.add("ninja_die");
        carnage.classList.remove("carnage_punch");
        alert("Game over, You Lose, Reload To Play Again, You Damage Carnage: " + Chealth_width + "%")
    }
}