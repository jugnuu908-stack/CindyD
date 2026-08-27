import { FormEvent, useState } from "react";

const suggestions = ["What does Cindy do?", "Show me her skills", "How can I contact her?"];

function getReply(question: string) {
  const q = question.toLowerCase();
  if (q.includes("contact") || q.includes("email") || q.includes("hire"))
    return "You can reach Cindy at cindydea05@gmail.com, or jump to the Contact section below.";
  if (q.includes("skill") || q.includes("tech") || q.includes("know"))
    return "Cindy works with HTML, CSS, PHP, and SQL, with a focus on practical web systems and backend development.";
  if (q.includes("project") || q.includes("work"))
    return "Her featured work includes a Campus Admission Backend System and ARAS Decision Support System. Explore the Projects section for more.";
  if (q.includes("experience") || q.includes("background"))
    return "Cindy is an Informatics Engineering graduate with web developer internship experience at PT Kanalab Karya Van.";
  return "I can tell you about Cindy's skills, projects, experience, or how to get in touch. What would you like to know?";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi, I'm Cindy's AI assistant. How can I help?" },
  ]);

  const ask = (question: string) => {
    const clean = question.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { from: "user", text: clean },
      { from: "ai", text: getReply(clean) },
    ]);
    setInput("");
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <div className="ai-assistant" aria-live="polite">
      {open && (
        <div className="ai-panel" role="dialog" aria-label="Cindy's AI assistant">
          <div className="ai-panel-head">
            <div className="flex items-center gap-3">
              <span className="ai-avatar"><span className="ai-dot" /></span>
              <div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream">Cindy AI</p><p className="text-[11px] text-dim">Portfolio guide · online</p></div>
            </div>
            <button className="ai-close" onClick={() => setOpen(false)} aria-label="Close assistant">×</button>
          </div>
          <div className="ai-messages">
            {messages.map((message, index) => <div key={index} className={`ai-message ${message.from === "user" ? "ai-user" : "ai-bot"}`}>{message.text}</div>)}
          </div>
          {messages.length === 1 && <div className="ai-suggestions">{suggestions.map((suggestion) => <button key={suggestion} onClick={() => ask(suggestion)}>{suggestion}</button>)}</div>}
          <form className="ai-input" onSubmit={submit}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Cindy..." aria-label="Ask Cindy AI" /><button type="submit" aria-label="Send message">↗</button></form>
        </div>
      )}
      <button className={`ai-trigger ${open ? "is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-label={open ? "Close AI assistant" : "Open AI assistant"}>
        <span className="ai-trigger-icon">{open ? "×" : "✦"}</span><span className="ai-trigger-label">Ask Cindy AI</span>
      </button>
    </div>
  );
}
