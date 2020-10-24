$(document).ready(function () {

    //When the form is submitted, the posts are done
    $(".search").on("submit", function (event) {
        event.preventDefault();

        var sunlight = $('#sun').val();
        var humidity = $('#humidity').val();
        var maintenance = $('#maintenance').val();
        // var price = $('#price').val();
        var poison = $('#pets').val();

        const url = `/api/plants?sunlight=${sunlight}&humidity=${humidity}&maintenance=${maintenance}&poison=${poison}`
        $.ajax({
            type: "GET",
            url: url
        }).then(function (response) {
            console.log(response);
            // window.location = "/";
        });
    });
});


            // $.ajax({
            //     type: "GET",
            //     url: "/api/plants/Sunlight_Needs/:Sunlight_Needs/?&q=" +sunlight + "&Primarykey=id" ,
            //     data: sunlight
            // }).then (function (response) {
            //     window.location.replace("results");
            //     res.render(path.join(__dirname, "../partials/results"));
            //     res.render("results");
            // });

        //     $.ajax({
        //         type: "POST",
        //         url: "/api/plants/Humidity/:Humidity?Humidity${id}&q=true",
        //         data: humidity
        //     }).then(function (response) {
        //         res.render(path.join(__dirname, "../partials/results"));
        //         res.render("results");
        //     });

        //     $.ajax({
        //         type: "POST",
        //         url: "/api/plants/Maintenance_Level/:Maintenance_Level?",
        //         data: maintenance
        //     }).then(function (response) {
        //         res.render(path.join(__dirname, "../partials/results"));
        //         res.render("results");
        //     });
        //     $.ajax({
        //         type: "POST",
        //         url: "/api/plants/Poisonous/:Poisonous",
        //         data: poison
        //     }).then(function (response) {
        //         res.render(path.join(__dirname, "../partials/results"));
        //         res.render("results");

        //     });
        //     $.ajax({
        //         type: "POST",
        //         url: "/api/plants/Price/:Price",
        //         data: price
        //     }).then(function (response) {
        //         res.render(path.join(__dirname, "../partials/results"));
        //         res.render("results");

        // });




