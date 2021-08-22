//questions
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
    {
        "q": "What is the correct syntax to close the <title> element?",
        "a": "</title>",
        "b": "<!title>",
        "c": "<?title>",
        "d": "<endtitle>",
        "ca": "0"
    },
    {
        "q": "What is the purpose of the <body> element?",
        "a": "The body element connects to the head element.",
        "b": "This is where all the webpage's content will go.",
        "c": "The body element will remain an empty placeholder.",
        "d": "The body element is how you start a webpage and contains all HTML code.",
        "ca": "1"
    },
    {
        "q": "What is the difference between <h1> and <h2>?",
        "a": "An <h2> is visually larger.",
        "b": "There is no difference.",
        "c": "An <h1> is the more important heading and is visually larger.",
        "d": "An <h1> has a lower number making it less important.",
        "ca": "2"
    },
    {
        "q": "What CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?",
        "a": "text-align: center;",
        "b": "overflow: auto;",
        "c": "margin: auto;",
        "d": "display: inline-block;",
        "ca": "1"
    },
    {
        "q": "Why is it important to be careful of the source when embedding an <iframe>?",
        "a": "Copyright infringement.",
        "b": "Security risks from bad websites.",
        "c": "Your web address can change making it hard to find your page.",
        "d": "Answers A, and B.",
        "ca": "3"
    },
    {
        "q": "What would you use to get input from the user?",
        "a": "A prompt box",
        "b": "A confirm box",
        "c": "A alert box",
        "d": "None of the above",
        "ca": "0"
    },
    {
        "q": "What would you use to check the users screen size and adjust the page contect accordingly?",
        "a": "Screen reader.",
        "b": "A Screen filter.",
        "c": "A media query.",
        "d": "Screen getter.",
        "ca": "2"
    },
    {
        "q": "Which one of these is NOT a valid media type for media queries?",
        "a": "all",
        "b": "screen",
        "c": "speech",
        "d": "tablet",
        "ca": "3"
    },
];

//global variables
var countdown = document.getElementById("timeleft");
var questiona = document.getElementById("questionarea");
var askedquestions = [];
var time = 1000;
var questionanswer = "";
var qn = 0;
var answeredcorrectly = 0;
var username = "";
    
//function to start the timer
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
            savescores();
        }    
    }, 1000);
};

//function to see if user wants to save score
var savescores = function() {
    var savescore = confirm("You scored " + answeredcorrectly + "/10. Would you like to save your score?");
    if(savescore) {
        while(username === ""){
            username = prompt("Please Enter your initials.");
        }
        localStorage.setItem(username, answeredcorrectly);
    }
}

// function to create a question, then create elements and display question on screen.
var askquestion = function() {
    var sbutton = document.getElementById("starttest");
    sbutton.remove();
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
            var qadiv = document.createElement("div");
            var aoption = document.createElement("input");
            aoption.setAttribute("name", 'answer_options');
            aoption.setAttribute("id", "option" + i);
            aoption.setAttribute("type", 'radio');
            qadiv.appendChild(aoption);
            var aoptionlabel = document.createElement("label");
            aoptionlabel.setAttribute("for", "option" + i);
            aoptionlabel.textContent = answerOptions[i];
            qadiv.appendChild(aoptionlabel);
            qadiv.addClass("answeroptions");
            //qform.appendChild(aoption);
            qform.appendChild(qadiv);
        }
        var subbutton = document.createElement("button");
        subbutton.setAttribute("type", 'button');
        subbutton.setAttribute("id", "submitbutton");
        subbutton.setAttribute("class", "submitbutton")
        subbutton.textContent ="Submit";
        qform.appendChild(subbutton);
        questiona.appendChild(qform);
        qn++;
    }
};

//listener for the submit button in each questions, then checks the answer.
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
                else {
                    time -= 5;
                }
            }
        }
        var oldquestion = document.getElementById("questionbox");
        oldquestion.remove();
        askquestion();
    }
});

//listeners to start the test and the timer
document.getElementById("starttest").addEventListener("click", starttimer);
document.getElementById("starttest").addEventListener("click", askquestion);