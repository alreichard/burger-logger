$(function() {
    $(".eat-it").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweaten");
    
        var wasEaten = {
          devoured: newEat
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: wasEaten
        }).then(
          function() {
            console.log("changed eaten", newEat);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  