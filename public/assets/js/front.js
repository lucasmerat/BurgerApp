$( document ).ready(
    $(".devour-burger").on("click", function(){
        let id = $(this).data("id")
        let isDevoured = $(this).data("devoured")
        console.log(isDevoured)

        if(isDevoured === 0){
            let newDevouredState = {
                devoured: 1
            }
            updateDevoured(newDevouredState)
        } 
        if(isDevoured === 1){
            let newDevouredState = {
                devoured: 0
            }
            updateDevoured(newDevouredState)
        }

        function updateDevoured(newDevouredState){
            $.ajax("/api/burgers/" + id, {
                type:"PUT",
                data: newDevouredState
            }).then(
                function(){
                    location.reload();
                }
            )
        }        
    })
)
