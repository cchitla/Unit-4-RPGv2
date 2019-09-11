$(document).ready(function () {


    let luke = {
        hp: 120,
        ap: 20,
        cp: 15,
    }

    let han = {
        hp: 100,
        ap: 15,
        cp: 20
    }

    let vader = {
        hp: 110,
        ap: 15,
        cp: 10
    }

    let palpatine = {
        hp: 140,
        ap: 20,
        cp: 5
    }


    function displayChars() {
        let chooseLuke = $("<img>");
        chooseLuke.attr({ "src": "assets/images/luke.jpg", "name": "luke" });
        chooseLuke.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        chooseLuke.addClass("luke");
        $("#luke").append(chooseLuke);

        let chooseHan = $("<img>");
        chooseHan.attr({ "src": "assets/images/han.jpg", "name": "han" });
        chooseHan.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        chooseHan.addClass("han");
        $("#han").append(chooseHan);

        let chooseVader = $("<img>");
        chooseVader.attr({ "src": "assets/images/vader.jpg", "name": "vader" });
        chooseVader.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        chooseVader.addClass("vader");
        $("#vader").append(chooseVader);

        let choosePalpatine = $("<img>");
        choosePalpatine.attr({ "src": "assets/images/palpatine.jpg", "name": "palpatine" });
        choosePalpatine.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        choosePalpatine.addClass("palpatine");
        $("#palpatine").append(choosePalpatine);

    }

    displayChars();

   

    $(".display-chars").mouseover(function(){
        console.log($(this))
        let stats = $("<span>");
        stats.addClass("luke-stats");
        stats.text(`HP:${luke.hp} AP:${luke.ap} CP:${luke.cp}`);
        $("#luke-stats").append(stats);
    })
    $(".display-chars").mouseout(function(){
        $(".luke-stats").remove();
    })



    let userCharSelected = false;
    let defender1Selected = false;
    let defender2Selected = false;
    let defender3Selected = false;

    let defender1Defeated = false;
    let defender2Defeated = false;
    let defender3Defeated = false;


    //choosing user character and defenders
    $(".display-chars").on("click", "img", function () {
        let clickedImage = this;

        if (userCharSelected && !defender1Selected) {
            selectDefender1(clickedImage);
        } else if (defender1Defeated && !defender2Selected) {
            selectDefender2(clickedImage);
        } else if (defender2Defeated && !defender3Selected) {
            selectDefender3(clickedImage);
        } else {
            charIsNotSelected(clickedImage);
        }

    })

    //moves user character to position
    function charIsNotSelected(char) {
        $(char).addClass("attacker");

        if ($(char).attr("name") === "luke") {
            $(char).animate({ top: "+=335px" });
        }
        else if (($(char).attr("name") === "han")) {
            $(char).animate({ top: "+=335px", right: "+=286px" });
        }
        else if (($(char).attr("name") === "vader")) {
            $(char).animate({ top: "+=335px", right: "+=570px" });
        }
        else if (($(char).attr("name") === "palpatine")) {
            $(char).animate({ top: "+=335px", right: "+=855px" });
        }

        userCharSelected = true;
    }


    function selectDefender1(opponent) {
        $(opponent).addClass("defender1");
        let passthrough = opponent;
        moveDefenders(passthrough);
        defender1Selected = true;
    }

    function selectDefender2(opponent) {
        $(opponent).addClass("defender2");
        let passthrough = opponent;
        moveDefenders(passthrough);
        defender2Selected = true;
    }

    function selectDefender3(opponent) {
        $(opponent).addClass("defender3");
        let passthrough = opponent;
        moveDefenders(passthrough);
        defender3Selected = true;
    }

    //moves defenders to position
    function moveDefenders(opponent) {
        if ($(opponent).attr("name") === "luke") {
            $(opponent).animate({ top: "+=335px", left: "+=590px" });
        }
        else if (($(opponent).attr("name") === "han")) {
            $(opponent).animate({ top: "+=335px", left: "+=303px" });
        }
        else if (($(opponent).attr("name") === "vader")) {
            $(opponent).animate({ top: "+=335px", left: "+=20px" });
        }
        else if (($(opponent).attr("name") === "palpatine")) {
            $(opponent).animate({ top: "+=335px", right: "+=264px" });
        }
    }



    function defeatDefender() {
        //add transparent red
        //make smaller and move to defeat area
    }



    //AUTO DEFEAT BUTTON
    $("#auto-defeat").on("click", function () {
        if (!defender1Defeated) {
            defender1Defeated = true;
            $(".defender1").toggle("scale");
        }
        //this defeats defender2
        else if (!defender2Defeated) {
            defender2Defeated = true;
            $(".defender2").toggle("scale");
        }
        //this defeats defender3
        else if (!defender3Defeated) {
            defender3Defeated = true;
            $(".defender3").toggle("scale");
        }
    });




});