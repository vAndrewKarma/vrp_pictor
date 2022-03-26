$(document).ready(function(){
    $(".contract1").hide();
$(".textcontr").hide();
$(".pictura").hide()
$(".chestienoughicit").hide()
$("#ceplmeasta").hide()
$(".lds-ellipsis").hide()
$(".licitatie").hide()
$("#secautavanzatori").hide()
$("#senegociazapretul").hide()
$("#semnacmcontractvanzare").hide()
$("#imaginesoldout").hide()
$("#tahnktouforpycash").hide()
$("#claimmoneybruhh").hide()
    window.addEventListener("message", function(event){
        var item = event.data;
     if(item.licitatie==true){
        $(".licitatie").fadeIn(200)   
     }
        if(item.examen == true){
$(".chestienoughicit").fadeIn(200)
            var blocks = document.querySelectorAll(".square");
            var rField = document.getElementById("r");
            var gField = document.getElementById("g");
            var bField = document.getElementById("b");
            var result = document.querySelector("h2"); //afiseaza bine sau rau
            var aRed, aBlue, aGreen, red, green, blue; 
            var correctColor = Math.floor(Math.random() * 6); 
            var data = []; // stocheaza culorile ca obiecte
            var isCorrect = document.querySelector("h2");
            var count=1;
            var f=0;
            var s="";
            var t="";
            var reset = document.querySelector("#reset");
            var num = 0;
            function changeBackground(tile)
            {
   // genereazaa culori random la intamplare
               red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
                tile.style.background = "rgb("+red+","+green+","+blue+")";
                data.push({redVal: red, greenVal: green, blueVal: blue});
            }
            var i;
            for(i=0 ; i<6; i++)
            {
                changeBackground(blocks[i]);
                blocks[i].addEventListener("click", function(){
                    num+=1;
                    if(this.style.background===blocks[correctColor].style.background)
                    {
                        isCorrect.textContent="Raspuns corect";
                        $.post(`https://${GetParentResourceName()}/aighicitoboss`, JSON.stringify({}));
                        $(".chestienoughicit").hide()
                         reset.classList.remove("hide");
                        for(var j=0; j<blocks.length; j++)
                            {
                                blocks[j].style.background=blocks[correctColor].style.background;
                            }
                    }
                    else if(count==5)
                    { 
                        for(var k=0; k<blocks.length; k++)
                            {
                            blocks[k].style.background=blocks[correctColor].style.background;
                            }
                        reset.classList.remove("hide");
                        $(".chestienoughicit").hide()
                        $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
                    }
                    else
                    {
                        this.style.background="transparent";
                        if(f!=1)
                            count++;
                    }
                    });
            }
            var s=data[correctColor].redVal+data[correctColor].blueVal+data[correctColor].greenVal;
            a=data[correctColor].redVal/s*100;
            b=data[correctColor].blueVal/s*100;
            c=data[correctColor].greenVal/s*100;
            rField.textContent=Math.round(a);
            bField.textContent=Math.round(b);
            gField.textContent=Math.round(c);
        }
        if(item.openmenu == true) {
        $(".contract1").fadeIn(500);
        }
        if(item.coloram == true){
            $(".pictura").fadeIn()
            $("#finishpictureframe").hide()
            $(function () {
                $('#slider').slider({
                    min: 3,
                    max: 40,
                    slide: function (event, ui) {
                        $('#circle').height(ui.value);
                        $('#circle').width(ui.value);
                    }
                });
                var paint = false; 
                var paintErase = 'paint';
                var canvas = document.getElementById("paint");
                var context = canvas.getContext("2d");
              var picteaza = false
                var container = $(".container34");
                /* prima poz a mouse ului */
                var mouse = { x: 0, y: 0 };
                if (localStorage.getItem('imgCanvas') != null) {
                    var img = new Image();
                    img.onload = function () {
                        context.drawImage(img, 0, 0);
                    }
                    img.src = localStorage.getItem('imgCanvas');
                }
                context.lineWidth = "3";
                context.lineCap = "round";
                context.lineJoin = "round";
           // cand da click inauntru
                container.mousedown(function (e) {
                    paint = true;
                    context.beginPath();
                    mouse.x = e.pageX - this.offsetLeft;
                    mouse.y = e.pageY - this.offsetTop;
                    context.moveTo(mouse.x, mouse.y);
                });
                container.mousemove(function (e) {
                    mouse.x = e.pageX - this.offsetLeft;
                    mouse.y = e.pageY - this.offsetTop;
                    if (paint == true) {
                        $("#finishpictureframe").fadeIn(1000)
                        if (paintErase == "paint") {
                            context.strokeStyle = $("#paintColor").val();
                            picteaza = true 
                        }
                        else {
                            context.strokeStyle = "white";
                        }
                        context.lineTo(mouse.x, mouse.y);
                        context.stroke();
                    }
                });
                container.mouseup(function () {
                    paint = false;
                });
                container.mouseleave(function () {
                    paint = false;
                });
                $('#erase').click(function () {
                    if (paintErase == "paint") {
                        paintErase = "erase";
                    }
                    else {
                        paintErase = "paint";
                    }
                    $(this).toggleClass('eraseMode');
                });
                $('#reset').click(function () {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    paintErase = "paint";
                    $("#erase").removeClass("eraseMode");
                });
                
$(document).on('click', "#finishpictureframe", function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    $.post(`https://${GetParentResourceName()}/amterminatpictura`, JSON.stringify({}));
    $(".pictura").fadeOut(200)
});
                
                $("#paintColor").change(function () {
                    console.log($(this).val());
                    $('#circle').css("background", $(this).val());
                });
                $('#slider').slider({
                    min: 3,
                    max: 40,
                    slide: function (event, ui) {
                        $('#circle').height(ui.value);
                        $('#circle').width(ui.value);
                        context.lineWidth = ui.value;
                    }
                });            
            })     
        }     
    });	
    document.onkeyup = function (data) {
       if (data.which == 27) { //esc
           $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
           $(".contract1").fadeOut(500);
            $(".textcontr").fadeOut(500);
            $(".licitatie").fadeOut(500);
            $(".chestienoughicit").fadeOut(500)
            $(".pictura").fadeOut(500)
        return
      }
    };   

   
}) 
function setTime() {
    var currentdate = new Date();
    $("#time").text( "Data: "+ currentdate.today());
    $('#Clock').show();
}  
        $(document).on('click', "#licitestebro", function() {
            $(".osafiescos").hide()
            $(".lds-ellipsis").fadeIn(2000)  
            $("#secautavanzatori").fadeIn(6000);
            setTimeout(function(){
                $("#senegociazapretul").fadeIn(6000);
            }, 6000);
            setTimeout(function(){
                $("#semnacmcontractvanzare").fadeIn(6000);
            }, 12000);
            setTimeout(function(){
                $("#imaginesoldout").fadeIn(6000);
                $(".lds-ellipsis").fadeOut(200)  
                $("#secautavanzatori").fadeOut(200);
                $("#senegociazapretul").fadeOut(200);
                $("#semnacmcontractvanzare").fadeOut(200);
                $("#tahnktouforpycash").fadeIn(6000)
                $("#claimmoneybruhh").fadeIn(6000)   
            }, 18000);
        });
        $(document).on('click', "#claimmoneybruhh", function() {
        $("#imaginesoldout").hide()
        $("#tahnktouforpycash").hide()
        $("#claimmoneybruhh").hide()
        $(".osafiescos").fadeIn()
            $(".licitatie").hide();
            $.post(`https://${GetParentResourceName()}/claimmoneybruhh`, JSON.stringify({}));
        });      
$(document).on('click', "#semnatura", function() {
	var semneaza = new Vara("#semnatura","SatisfySL.json", [{
		text: 'Accept.',
		fontSize: 18, 
		strokeWidth: 2,
		color: "#000",
		id: "",
		duration: 3000,
		textAlign: "center",
		x: 0,
		y: 0, 
		fromCurrentPosition:{ 
			x: true,
			y: true,
		},
		autoAnimation: true,
		queued: true,
		delay: 0,
		letterSpacing: 0
	}]);
	$("#semneaza").attr("disabled", true);
    $("#ceplmeasta").fadeIn(4000)
	setTimeout(function(){
        $(".contract1").fadeOut();
        $.post(`https://${GetParentResourceName()}/examenualabos`, JSON.stringify({}));
    }, 8000);  
});



Date.prototype.today = function() {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "." + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "." + this.getFullYear();
}
$(document).ready(function () {
    $('#Clock').hide();
    setInterval(setTime, 1000)
});