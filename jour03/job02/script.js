$(document).ready(function(){
    $("#shuffle-btn").click(function(){
        const parent = $("#rangees");
        const divs = parent.children();

        while(divs.length){
            parent.append(divs.splice(Math.floor(Math.random()*divs.length),1)[0]);
        }

        $("#message").text("");
        $("#ordonnees").children().appendTo("#rangees");
    });

    $("img").click(function(){

        const image = $(this);

        if(image.parent().attr("id") === "rangees"){

            image.appendTo("#ordonnees");
        }else{
            image.appendTo("#rangees");
        }

        checkOrder();
    });

    function checkOrder(){
        const imagesInBox2 = $("#ordonnees").children();

        if(imagesInBox2.length === 6){
            let correct = true;

            imagesInBox2.each(function(index){
                const currentId = $(this).attr("id");
                const correctId = "arc" + (index +1);

                if(currentId !== correctId){
                    correct = false;
                }
            });

            if(correct){
                $("#message").text("Vous avez gagné !").css("color" , "green");
            }else{
                $("#message").text("Vous avez perdu !").css("color","red");
            }
        }
    }
});