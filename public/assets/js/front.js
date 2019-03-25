$( document ).ready(
    $(".devour-burger").on("click", function(){
        let id = $(this).data("id")
        let isDevoured = $(this).data("devoured")

        let newDevouredState = {
            devoured: isDevoured
        }

        $.ajax("/api/burgers/" + id, {
            type:"PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log('The burger was devoured and new true false is ' + isDevoured)
                location.reload();
            }
        )
    })
)
