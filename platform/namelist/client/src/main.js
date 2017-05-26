$(document).ready(function () {

    //hide cancel update button
    $(".btn-link").hide()

    //list available names
    ListNames()
    $(".btn-link").click(function(){
        $("a.btn-success").text("Add Name");
        $("input[name='name']").val("")
        $(".btn-link").hide()
        ListNames()
    })
    //bind the button click function to add /update name
    $(".btn-success").click(function(){
        var nm = $("input[name='name']").val();
        if(nm==undefined || nm =="") {
            alert("Enter a name")
            return false;
        }
        if($(".btn-success").text() == "Add Name") {
            $.post("/add", {name:nm}, function (result) {
                console.log(result)
                
                if(result.statusCode === "FAIL") {
                    $(".status").html('<strong>Error writing to DB</strong>').show()
                } else {
                    $(".status").html('<strong>Name added to list</strong>').show()
                    $("input[name='name']").val("")
                    ListNames()
                }
                setTimeout(function(){
                     $(".status").fadeOut('slow');
                }, 3000)
            })
        } else {
            var on = $("input[name='hid']").val();
            var nm = $("input[name='name']").val();
            console.log(nm)
            $.post("/update", {key:on, name:nm}, function (result) {
                console.log(result)
                
                if(result.statusCode === "FAIL") {
                    $(".status").html('<strong>Error updating the record</strong>').show()
                } else {
                    $(".status").html('<strong>Name updated</strong>').show()
                    $("a.btn-success").text("Add Name");
                    $("input[name='name']").val("")
                    $(".btn-link").hide()
                    ListNames()
                }  
                setTimeout(function(){
                     $(".status").fadeOut('slow');
                }, 3000)          
            })
        }
    })
//------------------------------------------------------
//delete a name
    $(document).on("click", ".glyphicon-remove", function(){
        var id= $(this).prop('id');
        $.get("/delete/"+id, function (result) {
            console.log(result)
            
            if(result.statusCode === "FAIL") {
                
                $(".status").html('<strong>Error deleting the record</strong>').show()
            } else {
                $(".status").html('<strong>Name deleted</strong>').show()
                ListNames()
            }    
            setTimeout(function(){
                    $(".status").fadeOut('slow');
            }, 3000)        
        })
    })
//-----------------------------------------------------------------
//edit a n ame
    $(document).on("click", ".glyphicon-pencil", function(){
        var id= $(this).attr('id');
        var name= $(this).attr('name');
        $("input[name=name").val(name);
        $("input[name='hid']").val(id);
        $("a.btn-success").text("Update");
        $(this).parent().parent().siblings().css("background", "#FFF")
        $(this).parent().parent().css("background", "#DDD")
        $(".btn-link").show()
        

    })
//list names function
    function ListNames() {
        $.get("/list", function (names) {
            var arr = jQuery.parseJSON(names)

            $("#names").html("");
            for (let i = 0; i < arr.length; i++) {
                $("#names").append("<li><h4>" + arr[i].name + "<span class='glyphicon glyphicon-remove' id="+ arr[i]._id+"></span><span class='glyphicon glyphicon-pencil' id="+ arr[i]._id + " name='"+ arr[i].name+"'></span></h4></li>")
            }
        })
    }

})