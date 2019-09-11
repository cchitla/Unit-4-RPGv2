$(document).ready(function () {

    let chooseLuke;

    function displayChars() {
        let chooseLuke = $("<img>");
        chooseLuke.attr({ "src": "assets/images/luke.jpg", "name": "luke" });
        chooseLuke.css({ "border": "3px solid black", "position": "relative" });
        chooseLuke.addClass("m-2");
        $("#display-chars").append(chooseLuke);

        let chooseHan = $("<img>");
        chooseHan.attr({ "src": "assets/images/han.jpg", "name": "han" });
        chooseHan.css({ "border": "3px solid black", "position": "relative" });
        chooseHan.addClass("m-2");
        $("#display-chars").append(chooseHan);

        let chooseVader = $("<img>");
        chooseVader.attr({ "src": "assets/images/vader.jpg", "name": "vader" });
        chooseVader.css({ "border": "3px solid black", "position": "relative" });
        chooseVader.addClass("m-2");
        $("#display-chars").append(chooseVader);

        let choosePalpatine = $("<img>");
        choosePalpatine.attr({ "src": "assets/images/palpatine.jpg", "name": "palpatine" });
        choosePalpatine.css({ "border": "3px solid black", "position": "relative" });
        choosePalpatine.addClass("m-2");
        $("#display-chars").append(choosePalpatine);

    }

    displayChars();


    let userCharSelected = false;
    let defender1Selected = false;
    let defender2Selected = false;
    let defender3Selected = false;


    $("#display-chars").on("click", "img", function () {
        let clickedImage = this;

        if (!userCharSelected) {
            charIsNotSelected(clickedImage);
        }
        else if (userCharSelected) {
            charIsSelected();
        }

        if (userCharSelected) {
            charIsSelected();
        } else {
            charIsNotSelected(clickedImage);
        }

        console.log(userCharSelected);
    })


    function charIsNotSelected(param1) {
        $(param1).addClass("player-char");

        if ($(this).attr("name") === "luke") {
            $(this).animate({ top: "+=310px" });
        }
        else if (($(this).attr("name") === "han")) {
            $(this).animate({ top: "+=310px", right: "+=272px" });
        }
        else if (($(this).attr("name") === "vader")) {
            $(this).animate({ top: "+=310px", right: "+=544px" });
        }
        else if (($(this).attr("name") === "palpatine")) {
            $(this).animate({ top: "+=310px", right: "+=816px" });
        }

        userCharSelected = true;
    }




    // $("#display-chars").on("click", "img", function() {
    //     $(this).addClass("player-char");

    //     if ($(this).attr("name") === "luke") {
    //         $(this).animate({top:"+=310px"});
    //     }
    //     else if (($(this).attr("name") === "han")) {
    //         $(this).animate({top:"+=310px", right:"+=272px"});
    //     }
    //     else if (($(this).attr("name") === "vader")) {
    //         $(this).animate({top:"+=310px", right:"+=544px"});
    //     }
    //     else if (($(this).attr("name") === "palpatine")) {
    //         $(this).animate({top:"+=310px", right:"+=816px"});
    //     }
    // })





});