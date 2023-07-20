x=0
y=0
draw_Rect=""
draw_circle=""

var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function setup(){
canvas = createCanvas(900,600)

}
function start(){
    document.getElementById("status").innerHTML="System Is Listening Please Speak"
    Recognition.start()
}
 Recognition.onresult = function(event){
    console.log(event)

    var content = event.results[0][0].transcript
    console.log(content)
    x=Math.floor(Math.random()*850)
    y=Math.floor(Math.random()*600)
    random_no = Math.floor((Math.random()*array_1.length)+1)
    Element_of_array=array_1[random_no]
    content=content.toLowerCase()

    document.getElementById("status").innerHTML="The Speech Has Been Recognised As " + content
    if(content=="circle"){
     draw_circle="set"
     document.getElementById("status").innerHTML="Started Drawing Circle" 
    }else if(content=="rectangle"){
        draw_Rect="set"
        document.getElementById("status").innerHTML="Started Drawing Rectangle"
     }
     
    
      
    }

    function draw(){
    fill("red")
        if(draw_circle=="set"){
           radius=Math.floor(Math.random() * 100)
            circle(x,y,radius)
            draw_circle=""
            document.getElementById("status").innerHTML="Circle Is Drawn"
             

        }
        if(draw_Rect=="set"){
             rect(x,y,70,50)
             draw_Rect=""
             document.getElementById("status").innerHTML="Rectangle Is Drawn"
              
 
         }
    }
 