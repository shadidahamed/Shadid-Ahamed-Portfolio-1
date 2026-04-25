function toggleAI(){
  const box = document.getElementById("aiBox");

  if(!box.style.display || box.style.display === "none"){
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
}

function handleAI(e){
  if(e.key !== "Enter") return;

  const input = document.getElementById("aiInput");
  const msg = input.value.trim().toLowerCase();
  const chat = document.getElementById("aiMessages");

  if(msg === "") return;

  let reply = "I can help with skills, projects, contact or hiring.";

  if(msg.includes("hire")){
    reply = "Contact section contains WhatsApp & Email for hiring.";
  }
  else if(msg.includes("skills")){
    reply = "HTML, CSS, JavaScript, UI Design & Problem Solving.";
  }
  else if(msg.includes("project")){
    reply = "Check Work section for live projects.";
  }
  else if(msg.includes("contact")){
    reply = "Scroll to Contact section for all links.";
  }

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  const aiMsg = document.createElement("p");
  aiMsg.innerHTML = "<b>AI:</b> ";
  chat.appendChild(aiMsg);

  typeEffect(reply, aiMsg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function typeEffect(text, el){
  let i = 0;
  el.innerHTML = "<b>AI:</b> ";

  function run(){
    if(i < text.length){
      el.innerHTML += text[i];
      i++;
      setTimeout(run, 18);
    }
  }

  run();
}

function quickAsk(type){
  const input = document.getElementById("aiInput");

  const map = {
    hire: "hire",
    skills: "skills",
    project: "project",
    contact: "contact"
  };

  input.value = map[type];
  input.focus();
}
