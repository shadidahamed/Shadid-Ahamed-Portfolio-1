function handleAI(e){
  if(e.key === "Enter"){
    const input = document.getElementById("aiInput");
    const chat = document.getElementById("aiMessages");

    let msg = input.value.toLowerCase();
    let reply = "I don't understand.";

    if(msg.includes("skills")) reply = "HTML, CSS, JavaScript, UI Design.";
    if(msg.includes("hire")) reply = "Contact via WhatsApp or Email.";
    if(msg.includes("project")) reply = "Check Work section.";

    chat.innerHTML += `<p>You: ${input.value}</p>`;
    chat.innerHTML += `<p>AI: ${reply}</p>`;

    input.value = "";
  }
}
