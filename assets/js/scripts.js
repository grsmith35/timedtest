questions = [
    {
        "q": "Inside which HTML element do we put the JavaScript?",
        "a": "<scripting>",
        "b": "<script>",
        "c": "<javascript>",
        "d": "<js>",
        "ca": "<script>"
    },
    {
        "q": "What is the correct JavaScript syntax to change the content of the HTML element below? \n<p id='demo'>This is a demonstration.</p>",
        "a": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "b": "document.getElementByName('p').innerHTML = 'Hello World!';",
        "c": "#demo.innerHTML = 'Hello World!';",
        "d": "document.getElement('p').innerHTML = 'Hello World!';",
        "ca": "document.getElementById('demo').innerHTML = 'Hello World!';"
    },

];

askedquestions = [];
time = 10;


var starttimer = setInterval(function() {
    if(time > 1){
        console.log(time);
       // document.getElementById("#timeleft").innerHTML = "<p>'You have ' + time + ' seconds left.'</p>";
        time--;
    }
    else if(time === 1){
        //document.getElementById("#timeleft").value = time;
        console.log(time);
        time--;
    }
    else if(time === 0) {
        console.log(time);
        //document.getElementById("#timeleft").value = time;
        clearInterval(starttimer);
        //document.getElementById("#timeleft").value = "Times up!";
    }    
}, 1000);



/*
$("#starttest").click(function() {
    //while(askedquestions.length < questions.length) {
        //Math.floor(Math.random())
    //}
    timer();
});

var timer = setInterval(function() {
    if(time > 1) {
        $("#timeleft").val("You have " + time + " seconds left");
        time--;
    }
    else if(time === 1) {
        $("#timeleft").val("You have " + time + " second left");
        time--;
    }
    else if(time === 0) {
        clearInterval(timer);
        $("#timeleft").val("Times up!");
    }
}, 1000);*/

document.getElementById("starttest").addEventListener("click", starttimer);