$(document).ready(function () {
    console.log ("hellow");
    var pictures = ["https://farm5.staticflickr.com/4069/4448466798_7afaba3b07_b.jpg",
    "https://farm7.staticflickr.com/6179/6190152453_59164baf40_b.jpg",
    "https://farm4.staticflickr.com/3737/33203327482_66cfbdb643_z.jpg",
    "https://farm8.staticflickr.com/7163/6483844063_d12ee5ab99.jpg",
    "https://farm3.staticflickr.com/2219/2058486062_0763206461.jpg",
    "https://farm1.staticflickr.com/43/116327035_95f0709abc.jpg",
    "https://farm8.staticflickr.com/7522/15837690549_8be4baba02.jpg"]

    var getNewJoke = function(myurl){
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function (json) {
                console.log(json);
                var results = "";
                results += "<h2>" + json.value.joke + "</h2>";
                results += "<img src=" + pictures[Math.floor(Math.random() * (pictures.length))] + ">";
                $("#chucksults").html(results);
            }
        });
    };

    getNewJoke("http://api.icndb.com/jokes/random");


    $("#chokes").click(function (e){
        e.preventDefault();
        var myurl= "http://api.icndb.com/jokes/random";
        getNewJoke(myurl);
    });

   $("#nameSubmit").click(function(e) {
       e.preventDefault();
        var firstName = $("#firstNameInput").val();
        var myurl = "http://api.icndb.com/jokes/random?firstName=" + firstName + "&amp;lastName=" + "Norris";
       getNewJoke(myurl);
    });

});

