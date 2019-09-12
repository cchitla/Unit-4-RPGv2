$(document).ready(function () {

    let attacker = {};
    let defender = {};

    let luke = {
        name: "luke",
        hp: 120,
        ap: 18,
        cp: 15,
    }

    let han = {
        name: "han",
        hp: 100,
        ap: 10,
        cp: 20
    }

    let vader = {
        name: "vader",
        hp: 110,
        ap: 15,
        cp: 10
    }

    let palpatine = {
        name: "palpatine",
        hp: 140,
        ap: 20,
        cp: 8
    }

    let userCharSelected = false;
    let defender1Selected = false;
    let defender2Selected = false;
    let defender3Selected = false;

    let defender1Defeated = false;
    let defender2Defeated = false;
    let defender3Defeated = false;

    function displayChars() {
        let chooseLuke = $("<img>");
        chooseLuke.attr({ "src": "assets/images/luke.jpg", "name": luke.name });
        chooseLuke.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        chooseLuke.addClass("luke");
        $("#luke").append(chooseLuke);

        let chooseHan = $("<img>");
        chooseHan.attr({ "src": "assets/images/han.jpg", "name": han.name });
        chooseHan.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        // chooseHan.addClass("han");
        $("#han").append(chooseHan);

        let chooseVader = $("<img>");
        chooseVader.attr({ "src": "assets/images/vader.jpg", "name": vader.name });
        chooseVader.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        // chooseVader.addClass("vader");
        $("#vader").append(chooseVader);

        let choosePalpatine = $("<img>");
        choosePalpatine.attr({ "src": "assets/images/palpatine.jpg", "name": palpatine.name });
        choosePalpatine.css({ "border": "3px solid black", "position": "relative", "width":"100%" });
        // choosePalpatine.addClass("palpatine");
        $("#palpatine").append(choosePalpatine);

    }

    displayChars();


   

    // mouse over stat info ===============================================================

    $("#luke").mouseover(function() {
        console.log($(this).attr("id"));
        let stats = $("<span>");
        stats.addClass("luke-stats");
        stats.text(`HP:${luke.hp} AP:${luke.ap} CP:${luke.cp}`);
        $("#luke-stats").append(stats);
    })
    $("#luke-stats").mouseleave(function(){
        $(".luke-stats").remove();
    })

    $("#han").mouseover(function() {
        console.log($(this).attr("id"));
        let stats = $("<span>");
        stats.addClass("han-stats");
        stats.text(`HP:${han.hp} AP:${han.ap} CP:${han.cp}`);
        $("#han-stats").append(stats);
    })
    $("#han-stats").mouseleave(function() {
        $(".han-stats").remove();
    })

    $("#vader").mouseover(function() {
        console.log($(this).attr("id"));
        let stats = $("<span>");
        stats.addClass("vader-stats");
        stats.text(`HP:${vader.hp} AP:${vader.ap} CP:${vader.cp}`);
        $("#vader-stats").append(stats);
    })
    $("#vader-stats").mouseleave(function() {
        $(".vader-stats").remove();
    })

    $("#palpatine").mouseover(function() {
        console.log($(this).attr("id"));
        let stats = $("<span>");
        stats.addClass("palpatine-stats");
        stats.text(`HP:${palpatine.hp} AP:${palpatine.ap} CP:${palpatine.cp}`);
        $("#palpatine-stats").append(stats);
    })
    $("#palpatine-stats").mouseleave(function() {
        $(".palpatine-stats").remove();
    })



   // ===========================================================================================





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

    //moves user character to position, displays their stats
    function charIsNotSelected(char) {
        $(char).addClass("attacker");

        if ($(char).attr("name") === "luke") {
            $(char).animate({ top: "+=335px" });
            attacker = luke;
            attackerStats();
        }
        else if (($(char).attr("name") === "han")) {
            $(char).animate({ top: "+=335px", right: "+=286px" });
            attacker = han;
            attackerStats();
        }
        else if (($(char).attr("name") === "vader")) {
            $(char).animate({ top: "+=335px", right: "+=570px" });
            attacker = vader;
            attackerStats();
        }
        else if (($(char).attr("name") === "palpatine")) {
            $(char).animate({ top: "+=335px", right: "+=855px" });
            attacker = palpatine;
            attackerStats();
        }

        userCharSelected = true;
        
    }

    function attackerStats () {
        $("#attacker-hp").text(attacker.hp);
        $("#attacker-ap").text(attacker.ap);
        $("#attacker-cp").text(attacker.cp);

    }

    // when defender selected call move defender functions =================================================

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

    //moves defenders to position and display stats
    function moveDefenders(opponent) {
        if ($(opponent).attr("name") === "luke") {
            $(opponent).animate({ top: "+=335px", left: "+=590px" });
            defender = luke;
            defenderStats();
        }
        else if (($(opponent).attr("name") === "han")) {
            $(opponent).animate({ top: "+=335px", left: "+=303px" });
            defender = han;
            defenderStats();
        }
        else if (($(opponent).attr("name") === "vader")) {
            $(opponent).animate({ top: "+=335px", left: "+=20px" });
            defender = vader;
            defenderStats();
        }
        else if (($(opponent).attr("name") === "palpatine")) {
            $(opponent).animate({ top: "+=335px", right: "+=264px" });
            defender = palpatine;
            defenderStats();
        }
    }

    function defenderStats () {
        $("#defender-hp").text(defender.hp);
        $("#defender-ap").text(defender.ap);
        $("#defender-cp").text(defender.cp);
    }


    // ==========================================================================================================

    //attack button to attack
    $("#attack").on("click", function() {
        defender.hp = defender.hp - attacker.ap;
        $("#defender-hp").text(defender.hp);
        attacker.ap = attacker.ap + 6;
        $("#attacker-ap").text(attacker.ap);
        attacker.hp = attacker.hp - defender.cp;
        $("#attacker-hp").text(attacker.hp);

        if (defender.hp <= 0) {
            $(".defender1").toggle("scale");
            setTimeout(deleteDefender1, 400);
            defender1Defeated = true;
        }

        if (defender.hp <= 0) {
            $(".defender2").toggle("scale");
            setTimeout(deleteDefender2, 400);
            defender2Defeated = true;
        }
        if (defender.hp <= 0) {
            $(".defender3").toggle("scale");
            setTimeout(deleteDefender3, 400);
            defender3Defeated = true;
        }

    });

    //functions for setTimeout of defeat
    function deleteDefender1 () {
        $(".defender1").remove();
    };

    function deleteDefender2 () {
        $(".defender2").remove();
    };

    function deleteDefender3 () {
        $(".defender3").remove();
    };


});