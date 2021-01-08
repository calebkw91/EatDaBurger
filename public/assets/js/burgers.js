$(function() {
    $(".change-devoured").on("click", function(event)
    {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");

        let newDevouredState = 
        {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, 
        {
            type: "PUT",
            data: newDevouredState
        }).then( () => 
        {
            console.log("changed devoured to", newDevoured);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event)
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

    $(".delete-button").on("click", function(event)
    {
        let id = $(this).data("id");
        console.log(id);

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