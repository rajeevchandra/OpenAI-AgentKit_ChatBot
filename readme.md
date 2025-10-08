# ChatKit × Ollama (Local AI Chat)

A minimal **ChatKit UI + FastAPI backend** setup that connects to a **local Ollama model**.  
This lets you run a ChatGPT-style interface entirely on your machine — no OpenAI API costs.

---

## 🧠 Overview

- **Frontend:** Next.js + ChatKit (React)
- **Backend:** FastAPI (Python)
- **Model Runtime:** Ollama (`http://localhost:11434/v1`)
- **Cost:** 💸 Free — all inference is local

You can later swap the model (e.g., `llama3.1`, `qwen2.5`, etc.) or add cloud fallbacks.

---

🧩 System Architecture

[ ChatKit UI (Next.js) ]
         │
         ▼
[ FastAPI Backend (/api/chat) ]
         │
         ▼
[ Model Endpoint (OpenAI-Compatible API) ]


## 📁 Project Structure

