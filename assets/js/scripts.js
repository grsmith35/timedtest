questions = [
    {
        "q": "Inside which HTML element do we put the JavaScript?",
        "a": "<scripting>",
        "b": "<script>",
        "c": "<javascript>",
        "d": "<js>",
        "ca": "1"
    },
    {
        "q": "What is the correct JavaScript syntax to change the content of the HTML element below? \n<p id='demo'>This is a demonstration.</p>",
        "a": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "b": "document.getElementByName('p').innerHTML = 'Hello World!';",
        "c": "#demo.innerHTML = 'Hello World!';",
        "d": "document.getElement('p').innerHTML = 'Hello World!';",
        "ca": "0"
    },

];
var countdown = document.getElementById("timeleft");
var questiona = document.getElementById("questionarea");
var askedquestions = [];
var time = 10;
var questionanswer = "";
var qn = 0;
var answeredcorrectly = 0;

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
            var questionsection = document.getElementById("questionarea");
            var oldquestion = document.getElementById("questionbox");
            var testfinished = document.createElement("h4");
            testfinished.textContent = "Test time finished! Your score is " + answeredcorrectly + "/10!";
            if(oldquestion){
                oldquestion.remove();
            }
            questionsection.appendChild(testfinished);
        }    
    }, 1000);
};

var askquestion = function() {
    if(askedquestions.length < questions.length) {
        var questiontoask = questions[qn].q;
        askedquestions.push(questions[qn]);
        var answerOptions = [];
        questionanswer = questions[qn].ca;
        answerOptions.push(questions[qn].a);
        answerOptions.push(questions[qn].b);
        answerOptions.push(questions[qn].c);
        answerOptions.push(questions[qn].d);
        console.log(answerOptions);

        var qform = document.createElement("form");
        qform.setAttribute("id", "questionbox");
        var qfield = document.createElement("h2");
        qfield.textContent = questiontoask;
        qform.appendChild(qfield);
        for(var i = 0; i < answerOptions.length; i++){
            var aoption = document.createElement("input");
            aoption.setAttribute("name", 'answer_options');
            aoption.setAttribute("id", "option" + i);
            aoption.setAttribute("type", 'radio');
            var aoptionlabel = document.createElement("label");
            aoptionlabel.setAttribute("for", "option" + i);
            aoptionlabel.textContent = answerOptions[i];
            //aoption.textContent = "'" + answerOptions[i] + "'";
            //aoption.innerHTML = "<input name='answer_options' type='radio' value=" + answerOptions[i] + "></input>";
            qform.appendChild(aoption);
            qform.appendChild(aoptionlabel);
        }
        var subbutton = document.createElement("button");
        subbutton.setAttribute("type", 'button');
        subbutton.setAttribute("id", "submitbutton");
        subbutton.textContent ="Submit";
        qform.appendChild(subbutton);
        questiona.appendChild(qform);
        qn++;
    }
};

document.addEventListener('click', function(event){
    if(event.target.id === 'submitbutton'){
        console.log("answered question");
        var inputanswer = "";
        var radios = document.getElementsByTagName("input");
        for(i in radios){
            if (radios[i].type === 'radio' && radios[i].checked){
                var inputanswer = radios[i].id;
                var aordernumber = inputanswer.replace("option", "");
                console.log(aordernumber);
                if(aordernumber === questionanswer){
                    console.log("You got it right.");
                    answeredcorrectly++;
                }
            }
        }
        var oldquestion = document.getElementById("questionbox");
        oldquestion.remove();
        askquestion();
    }
});


document.getElementById("starttest").addEventListener("click", starttimer);
document.getElementById("starttest").addEventListener("click", askquestion);