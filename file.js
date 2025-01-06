const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.jpg";
const PERSON_IMG = "bot.jpg";
const BOT_NAME = "BOT";
const PERSON_NAME = "PRITHU";
if (prompt("Hi! What's your name?")) {
  alert(`Nice to meet you, ${prompt("Hi! What's your name?")}!`);
} else {
  alert("You didn't enter a name.");
}

const userAge = prompt("How old are you?");
if (userAge && !isNaN(userAge)) {
  if (userAge >= 18) {
    alert("You're eligible to sign up for the service.");
  } else {
    alert("Sorry, you must be 18 or older to sign up.");
  }
} else {
  alert("Please enter a valid age.");
}

const name = prompt("Hello! What is your name?");
if (name) {
  const mood = prompt(`Nice to meet you, ${name}. How are you feeling today? (happy/sad/other)`);
  if (mood.toLowerCase() === "happy") {
    alert("That's great to hear! Keep smiling! 😊");
  } else if (mood.toLowerCase() === "sad") {
    alert("I'm sorry to hear that. Things will get better soon. 🌈");
  } else {
    alert("Thanks for sharing! I'm here to chat anytime. 💬");
  }
} else {
  alert("It seems you don't want to share your name. That's okay!");
}


let question = "What is 2 + 2?";
let answer;

while (answer !== "4") {
  answer = prompt(`${question} (Hint: It's a number!)`);
  if (answer === "4") {
    alert("Correct! Great job!");
  } else {
    alert("Oops! That's not correct. Try again.");
  }
}


const questions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is 5 + 5?", answer: "10" },
    { question: "What is the color of the sky?", answer: "blue" }
  ];
  
  let score = 0;
  
  questions.forEach((q) => {
    const userAnswer = prompt(q.question).toLowerCase();
    if (userAnswer === q.answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${q.answer}.`);
    }
  });
  
  alert(`Quiz finished! Your score: ${score}/${questions.length}`);

  
  alert("Welcome to the Chatbot!");

const userName = prompt("What's your name?");
if (userName) {
  alert(`Hello, ${userName}! Let's chat.`);

  const favoriteColor = prompt("What's your favorite color?");
  alert(`${favoriteColor} is a beautiful color!`);

  const hobby = prompt("What do you like to do in your free time?");
  alert(`That's cool! I wish I could try ${hobby} too!`);

  alert(`It was nice talking to you, ${userName}. Have a great day!`);
} else {
  alert("Oops! I couldn't get your name. Goodbye!");
}

const robot = ["How do you do human fellow", "I am not a bot"];
msgerForm.addEventsListener("submit", Event => {
    Event.msgText = msgerInput.value;
    if (!msgText) return;
    msgerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
    output(msgText);
});

if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);

}else if (text.match(/thank/gi)){
    product = "You 're welcome"
}
else if(text.match(/(robot|bot|robo)/gi)){
    product. robot[Match.floor(Math.random() * robot.length)];
}else{
    product.alternative[Math.floor(Math.random() * alternative.length)];
}

const delay = input.split(" ").length * 100;
setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
}, delay);


function compare(promptsArray, repliesArray, string){
    let reply;
    let replyFound = false;
    for(let x = 0; x < promptsArray.length; x++) {
        for(let y =0; y < promptsArray[x].length; y++){
            if(promptsArray[x][y] === string){
                let replies = repliesArray[x];
                reply = replies[Maths.floor(Maths.random() * replies.length)];
                replyFound = true;
                break;
            }
        }
        if (replyFound){
            break;
        }
    }
    return reply;
}

function addChat(name, img, side, text){
    const msgHTML = `
    <div class="msg ${side}-msg">
    <div class="msg-img" style="backdround-image:url(${img})"></div>
    <div class="msg-bubble">
    <div class="msg-info">
    <div class="msg-info-name">${name}</div>
    <div class="msg-info-time">${FormDate(new Date())}</div>
    </div>
    <div class="msg-text">${text}</div>
    </div>
    </div>`;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop +=500;
}
function get(selector, root = document){
    return root.querySelector(selector);
}
function FormDate(Date){
    const h = "0" + Date.gethours();
    const m = "0" + Date.getminutes();
    return `${h.slice(-2)}:${m.slice}`;
}
function random(min, max){
    return Math.floor(Maths.random() * (max - min) + min );
}
    