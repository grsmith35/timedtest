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
var countdown = document.getElementById("timeleft");
var questiona = document.getElementById("questionarea");
var askedquestions = [];
var time = 10;

var starttimer = function() {
    var timeinterval = setInterval(function() {
        if(time > 1){
            console.log(time);
            countdown.textContent = "You have "  + time + " seconds left.";
            time--;
        }
        else if(time === 1){
            countdown.textContent = "You have "  + time + " second left.";
            console.log(time);
            time--;
        }
        else if(time === 0) {
            console.log(time);
            clearInterval(timeinterval);
            countdown.textContent = "Times up!";
        }    
    }, 1000);
};

var askquestion = function() {
    var qn = 0;
    if(askedquestions.length < questions.length) {
        var questiontoask = questions[qn].q;
        //questiona.innerHTML = questiontoask;
        var answerOptions = [];
        var answer = questions[qn].ca;
        answerOptions.push(questions[qn].a);
        answerOptions.push(questions[qn].b);
        answerOptions.push(questions[qn].c);
        answerOptions.push(questions[qn].d);

        var qform = document.createElement("form");
        var qfield = document.createElement("h2");
        qfield.setAttribute("text", questiontoask);
        qform.appendChild(qfield);
        questiona.appendChild(qform);
    }
};


document.getElementById("starttest").addEventListener("click", starttimer);
document.getElementById("starttest").addEventListener("click", askquestion);