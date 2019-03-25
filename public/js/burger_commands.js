$(document).on("ready",function() {
  
    //  When user clicks "Eat Me" button for an existing burger 
        $("#devour").on("click",function() {
            $.ajax({
                method: "PUT",
                url: "/api/burgers/" + $(this).attr("burger-val"),
                data : {
                    devoured : true
                }
            }).then(result => {
                console.log(result);
                location.reload();
            })
        })
        $("#makeAgain").on("click",function() {
            $.ajax({
                method: "PUT",
                url: "/api/burgers/" + $(this).attr("data-value"),
                data : {
                    devoured : false
                }
            }).then(result => {
                console.log(result);
                location.reload();
            })
        })
        $("#addNewBurger").on("click",function(event) {
            console.log("add burger clicked");
            event.preventDefault();
            $.ajax("/api/burgers", {
                type:"POST",
                data : {burger_name : $("#newBurger").val()}
            }).then(() => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            })
        })
    })
  
