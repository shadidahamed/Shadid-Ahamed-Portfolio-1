/* =========================
   PORTFOLIO AI ASSISTANT
   Professional & Mobile-Optimized
========================= */

class PortfolioAI {
    constructor() {
        this.aiBox = document.getElementById("aiBox");
        this.aiMessages = document.getElementById("aiMessages");
        this.aiInput = document.getElementById("aiInput");
        this.aiBtn = document.querySelector(".ai-btn");

        this.init();
    }

    init() {
        if (!this.aiBox || !this.aiMessages || !this.aiInput || !this.aiBtn) {
            console.warn("AI elements not found. Check your HTML IDs.");
            return;
        }

        this.bindEvents();
        this.addWelcomeMessage();
    }

    bindEvents() {
        // Toggle AI Box with button
        this.aiBtn.addEventListener("click", () => this.toggleAI());

        // Send message on Enter key
        this.aiInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.handleUserInput();
            }
        });

        // Close button in header
        const closeBtn = this.aiBox.querySelector(".close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.toggleAI());
        }

        // Click outside to close (but not on the button)
        document.addEventListener("click", (e) => {
            if (!this.aiBox.contains(e.target) && !this.aiBtn.contains(e.target)) {
                if (this.aiBox.style.display === "flex") {
                    this.toggleAI();
                }
            }
        });
    }

    toggleAI() {
        if (this.aiBox.style.display === "flex") {
            this.aiBox.style.display = "none";
        } else {
            this.aiBox.style.display = "flex";
            // Focus input after opening
            setTimeout(() => {
                this.aiInput.focus();
            }, 100);
        }
    }

    addWelcomeMessage() {
        this.aiMessages.innerHTML = `
            <div class="ai-message bot">
                👋 Hello! I'm your Portfolio AI Assistant.<br><br>
                You can ask me anything like:<br>
                • Hi / Hello<br>
                • Who are you?<br>
                • What are your skills?<br>
                • Show me your projects<br>
                • How can I hire you?<br>
                • Contact info<br>
                • Tell me about your work
            </div>
        `;
    }

    handleUserInput() {
        const text = this.aiInput.value.trim();
        if (!text) return;

        // Add user message
        this.addMessage("user", text);
        this.aiInput.value = "";

        // Simulate thinking time for natural feel
        setTimeout(() => {
            const reply = this.generateSmartReply(text.toLowerCase());
            this.addMessage("bot", reply);
        }, 400);

        this.scrollToBottom();
    }

    addMessage(type, content) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `ai-message ${type}`;

        msgDiv.innerHTML = `
            <strong>${type === "user" ? "You" : "AI"}:</strong><br>
            ${this.escapeHtml(content)}
        `;

        this.aiMessages.appendChild(msgDiv);
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.aiMessages.scrollTop = this.aiMessages.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML.replace(/\n/g, "<br>");
    }

    generateSmartReply(msg) {
        // Greetings
        if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
            return "Hey there! 👋 Great to see you visiting my portfolio. How can I help you today?";
        }

        // Introduction
        if (msg.includes("who are you") || msg.includes("introduce") || msg.includes("your name")) {
            return "I'm your personal Portfolio AI Assistant! I can tell you about Shadid's skills, projects, experience, and help you get in touch with him.";
        }

        // Skills
        if (msg.includes("skill") || msg.includes("technology") || msg.includes("stack") || msg.includes("what do you know")) {
            return "Shadid specializes in:\n• Modern HTML5 & CSS3\n• JavaScript (ES6+)\n• Responsive Web Design\n• Clean, fast and user-friendly interfaces\n• UI/UX focused development";
        }

        // Projects
        if (msg.includes("project") || msg.includes("work") || msg.includes("portfolio") || msg.includes("trendcart")) {
            return "You can check the **Projects** section above! One of the live projects is **TrendCart** - a modern e-commerce website. Would you like to know more about any specific project?";
        }

        // Hiring / Collaboration
        if (msg.includes("hire") || msg.includes("job") || msg.includes("work with") || msg.includes("freelance") || msg.includes("collaborate")) {
            return "I'd love to collaborate or work together! Please reach out via Email or WhatsApp from the Contact section. Looking forward to hearing from you! 🚀";
        }

        // Contact
        if (msg.includes("contact") || msg.includes("email") || msg.includes("whatsapp") || msg.includes("reach")) {
            return "All contact details are available in the **Contact & Business Links** section at the bottom:\n• Email\n• GitHub\n• LinkedIn\n• WhatsApp\n• And more platforms";
        }

        // Videos
        if (msg.includes("video") || msg.includes("demo") || msg.includes("youtube")) {
            return "Check out the **Videos** section! There you can watch project demos and skill showcases.";
        }

        // Thank you
        if (msg.includes("thank")) {
            return "You're very welcome! 😊 Happy to help. Feel free to ask anything else.";
        }

        // Default response
        return "I'm here to help! You can ask me about:\n• Skills\n• Projects\n• How to hire/contact Shadid\n• Videos\n\nWhat would you like to know?";
    }
}

// Initialize the AI Assistant when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new PortfolioAI();
});