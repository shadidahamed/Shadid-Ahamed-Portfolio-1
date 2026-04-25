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
function generateReply(msg) {

  if (msg.includes("who are you")) {
    return "I'm your portfolio AI assistant. Ask about skills, projects, or contact.";
  }

  if (msg.includes("what can i ask")) {
    return "Try: skills, projects, contact, or hiring.";
  }

  if (msg.includes("hire") || msg.includes("job")) {
    return "You can contact me via Email or WhatsApp in the Contact section.";
  }

  if (msg.includes("skill")) {
    return "I work with HTML, CSS, JavaScript, and UI Design.";
  }

  if (msg.includes("project")) {
    return "Check the Projects section for live demos.";
  }

  if (msg.includes("contact")) {
    return "Scroll to Contact section — all links are there.";
  }

  return "Ask me about skills, projects, contact, or hiring 👇";
}




