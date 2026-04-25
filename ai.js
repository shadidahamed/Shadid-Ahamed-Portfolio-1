function toggleAI(){
  const box = document.getElementById("aiBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function handleAI(e){
  if(e.key === "Enter"){
    const input = document.getElementById("aiInput");
    const msg = input.value.toLowerCase();
    const chat = document.getElementById("aiMessages");

    let reply = "Sorry, I didn't understand.";

    if(msg.includes("hire")){
      reply = "You can hire Shadid via WhatsApp or Email in the contact section.";
    }
    else if(msg.includes("skills")){
      reply = "Shadid works with HTML, CSS, JavaScript and UI design.";
    }
    else if(msg.includes("project")){
      reply = "Check the Work section to see live projects.";
    }
    else if(msg.includes("contact")){
      reply = "Go to the contact section for all links like WhatsApp, GitHub and LinkedIn.";
    }

    // Show user message
    chat.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;

    // Create AI message container
    const aiMsg = document.createElement("p");
    aiMsg.innerHTML = "<strong>AI:</strong> ";
    chat.appendChild(aiMsg);

    // Typing effect
    typeEffect(reply, aiMsg);

    input.value="";
    chat.scrollTop = chat.scrollHeight;
  }
}

function typeEffect(text, element){
  let i = 0;

  function typing(){
    if(i < text.length){
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 20); // speed control (lower = faster)
    }
  }

  typing();
}
