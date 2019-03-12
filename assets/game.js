$(document).ready(function () {


    var wins = 0;
    var loss = 0;

    $("#wins").text('Wins: ' + wins);
    $("#loss").text('Losses: ' + loss);
    var myCrystals = ["assets/images/crystal2.png", "assets/images/crystal10.png", "assets/images/crystal12.png", "assets/images/crystal1.png"];

    function cryVals() {
        for (var i = 0; i < myCrystals.length; i++) {

            var cryImg = $("<img>");
            cryImg.addClass("crystal-pic");
            cryImg.attr("src", myCrystals[i]);
            cryImg.attr("data-cryst", Math.floor(Math.random() * 15) + 1);
            $(".crystals").append(cryImg);
        }

    }

    function resetGame() {
        var count = 0;

        $("crystalscore").text("You have " + count);

        var getNum = Math.floor(Math.random() * (150 - 23) + 23);
        $("#numguess").text(getNum);
        console.log(getNum);

        $(".crystal-pic").on("click", function () {
            if (count === 0) {
                $('#crystallose').hide();
                $('#crystalwin').hide();
            }
            crystClicked = true;
            var cryVal = ($(this).attr("data-cryst"));
            cryVal = parseInt(cryVal);
            count += cryVal;
            console.log(cryVal);
            console.log(count);
            $("#crystalscore").show();
            $("#crystalscore").text("You have " + count);


            if (count === getNum) {
                $('#crystalwin').show();
                wins++;
                $("#wins").text("Wins: " + wins);
                $(".crystals").empty();
                $("#crystalscore").text("Click a crystal to play again!");
                cryVals();
                resetGame();
                console.log(wins);

            }

            else if (count > getNum) {
                $('#crystallose').show();
                loss++;
                $("#loss").text("Losses: " + loss);
                $(".crystals").empty();
                $("#crystalscore").text("Click a crystal to try again!");
                cryVals();
                resetGame();
                console.log(loss);
            }



        });
    }

    cryVals();
    resetGame();

});
