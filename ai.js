/* =========================
   AI ASSISTANT SYSTEM
   ai.js
========================= */

function toggleAI(){
  const box = document.getElementById("aiBox");
  box.style.display = (box.style.display === "flex") ? "none" : "flex";
}

/* OPEN AI BOX IF NOT OPEN */
function openAI(){
  document.getElementById("aiBox").style.display = "flex";
}

/* HANDLE USER INPUT */
function handleAI(event){
  if(event.key === "Enter"){
    const input = document.getElementById("aiInput");
    const msgBox = document.getElementById("aiMessages");

    let text = input.value.trim();
    if(text === "") return;

    // USER MESSAGE
    let userMsg = document.createElement("div");
    userMsg.style.margin = "5px 0";
    userMsg.style.color = "#38bdf8";
    userMsg.innerText = "You: " + text;
    msgBox.appendChild(userMsg);

    // AI RESPONSE
    let botMsg = document.createElement("div");
    botMsg.style.margin = "5px 0";
    botMsg.style.color = "#ffffff";

    botMsg.innerText = "AI: " + getAIResponse(text);

    msgBox.appendChild(botMsg);

    input.value = "";
    msgBox.scrollTop = msgBox.scrollHeight;
  }
}

/* SIMPLE AI LOGIC (RULE-BASED) */
function getAIResponse(input){

  let msg = input.toLowerCase();

  // greetings
  if(msg.includes("hi") || msg.includes("hello")){
    return "Hello 👋 I'm your portfolio AI assistant!";
  }

  // portfolio help
  if(msg.includes("project")){
    return "You have Task Tracker and E-commerce TrendCart project.";
  }

  // skills
  if(msg.includes("skill")){
    return "You know HTML, CSS, JavaScript and Frontend Development.";
  }

  // cv
  if(msg.includes("cv") || msg.includes("resume")){
    return "You can download your CV from the CV section below.";
  }

  // contact
  if(msg.includes("contact") || msg.includes("email")){
    return "You can contact via Email, GitHub, LinkedIn or WhatsApp.";
  }

  // motivation
  if(msg.includes("motivate") || msg.includes("help")){
    return "Keep going 💪 You are building a strong developer portfolio!";
  }

  // default
  return "I am still learning 🤖 Ask about projects, skills or contact.";
}
