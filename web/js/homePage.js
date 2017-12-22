
function homePage() {
    $.ajax({
        url: "templates/homePage.html",
        type: "GET"
    })
            .done(function (tmp) {
                $("#page").html("");
                $("#page").append(tmp);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log("Error: Unable to load home page");
            });
}