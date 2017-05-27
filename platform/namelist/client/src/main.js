$(document).ready(function () {

    //list available names
    ListNames()
    //bind the button click function to add /update name
    $("#names").on('click', '.glyphicon-plus', function(){
        var nm = $("input[name='name']").val();
        if(nm==undefined || nm =="") {
            alert("Enter a name")
            return false;
        }
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

    })
        //save updated record
    $('#names').on("click",'.glyphicon-floppy-disk', function(){
        event.stopPropagation();
                //get values
        var id= $(this).attr('id');
        var name = $(this).parent().siblings('.listname').text();
        $.post("/update", {key:id, name:name}, function (result) {
            console.log(result)
            
            if(result.statusCode === "FAIL") {
                $(".status").html('<strong>Error updating the record</strong>').show()
            } else {
                $(".status").html('<strong>Name updated</strong>').show()
                $(this).hide();
                ListNames()
            }  
            setTimeout(function(){
                    $(".status").fadeOut('slow');
            }, 3000)          
        })
    })
//------------------------------------------------------
//delete a name
    $(document).on("click", ".glyphicon-remove", function(){
        if(confirm("Do you want to delete this record?") == true) {
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
        } else {
            return false;
        }
    })
//-----------------------------------------------------------------
//edit a n ame
    $('#names').on("click",'.listname' ,function(){
        
        //editable div
        if($(this).prop("contenteditable") =='false' ) {
            event.stopPropagation();
            $("div.listname").prop("contenteditable", "false").css('border', '0px').css('background', '#FFF')
            $('.glyphicon-floppy-disk').hide()
            //changes props and styles
            $(this).prop("contenteditable", "true").css('border', '1px solid #398439')
            $(this).css("background", "#EEE")
            $(this).siblings(".listicons").children('.glyphicon-floppy-disk').show();
        } else {
           event.stopPropagation();
        }
    }) 
 
    // cancel udpate operation
    $(document).click(function(){
      $("div.listname").prop("contenteditable", "false").css('border', '0px').css('background', '#FFF')
      $('.glyphicon-floppy-disk').hide()
    })


//list names function
    function ListNames() {
        $.get("/list", function (names) {
            var arr = jQuery.parseJSON(names)

            $("#names").html("");
            for (let i = 0; i < arr.length; i++) {
                $("#names").append("<li><div class='listname' contenteditable='false'>" + arr[i].name + "</div><div class='listicons'><span class='glyphicon glyphicon-remove' id="+ arr[i]._id+"></span><span class='glyphicon glyphicon-floppy-disk' id="+ arr[i]._id + " name='"+ arr[i].name+"'></span></div></li>")
            }
             $("#names").append("<li class='addItem'><input type='text' name='name' placeholder='Add name'><span class='glyphicon glyphicon-plus'></span></li>")
        })
    }

})