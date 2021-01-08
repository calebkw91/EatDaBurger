$(function() {
    $(".change-devoured").on("click", (event) =>
    {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newDevoured");

        let newDevouredState = 
        {
            devoured: newDevoured
        };

        $.ajax("/api/cats/" + id, 
        {
            type: "PUT",
            data: newDevouredState
        }).then( () => 
        {
            console.log("changed sleep to", newSleep);
            location.reload();
        });
    });

    $(".create-form").on("submit", (event) =>
    {
        event.preventDefault();

        let newBurger = 
        {
            burger_name: $("#burger-name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", 
        {
            type: "POST",
            data: newBurger
        }).then(() => 
        {
            console.log("created new burger");
            location.reload();
        });
    });

    $(".delete-button").on("click", (event) =>
    {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, 
        {
            type: "DELETE"
        }).then(() =>
        {
            console.log("deleted " + id);
            location.reload();
        });
    });
});