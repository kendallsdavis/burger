$(function() {
  
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
            event.preventDefault();
            $.ajax({
                method:"POST",
                url : "/api/burgers",
                data : {
                    burger_name : $("#newBurger").val()
                }
            }).then(result => {
                console.log(result);
                location.reload();
            })
        })
    })
  
