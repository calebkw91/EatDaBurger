$(function() {
    $(".change-devoured").on("click", (event) =>
    {
        let thisBurger = $(this);
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");
        console.log(thisBurger);
        console.log(id);
        console.log(newDevoured);

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

    $(".create-form").on("submit", (event) =>
    {
        event.preventDefault();

        let newBurger = 
        {
            burger_name: $("#burger-name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        console.log(newBurger);

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