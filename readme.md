# ChatKit × Ollama (Local AI Chat)

A minimal **ChatKit UI + FastAPI backend** setup that connects to a **local Ollama model**.
This lets you run a ChatGPT-style interface entirely on your machine — no OpenAI API costs.

---

## 🤖 What is OpenAI ChatKit?

[OpenAI ChatKit](https://github.com/openai/openai-chatkit) is an open-source component library that ships a polished, responsive chat experience you can drop into any React application. It provides accessible building blocks—conversation lists, composer toolbars, message bubbles, typing indicators, and more—that mirror the usability polish of ChatGPT. Because it is framework-agnostic beyond React, teams can pair ChatKit with their preferred backend, model provider, or orchestration layer, dramatically accelerating the time it takes to ship production-ready conversational interfaces.

Key benefits of ChatKit include:

- **Production-ready UX:** Ships with dark/light themes, keyboard navigation, markdown rendering, and streaming message updates out of the box.
- **Extensibility:** Offers primitives for custom toolbars, action buttons, inline tool call previews, and structured metadata rendering so you can tailor the chat flow to your product.
- **Developer ergonomics:** Strong TypeScript typings, tailwind-friendly class names, and storybook examples make it easy to iterate quickly.
- **Open-source flexibility:** MIT-licensed and designed to work with any model endpoint—OpenAI, Azure, self-hosted, or local LLMs such as Ollama.

---

## 🧠 Overview

- **Frontend:** Next.js + ChatKit (React)
- **Backend:** FastAPI (Python)
- **Model Runtime:** Ollama (`http://localhost:11434/v1`)
- **Cost:** 💸 Free — all inference is local

You can later swap the model (e.g., `llama3.1`, `qwen2.5`, etc.) or add cloud fallbacks.

---

🔧 Key Features

🔹 **Drop-in Chat Experience:** ChatKit delivers a complete chat interface—including conversation history, message composer, streaming updates, and tool call visualisations—ready to embed in Next.js.

🔹 **Local-First Inference:** Default Ollama integration keeps every token on your machine. Swap models like `llama3.1` or `qwen2.5` without touching the UI.

🔹 **FastAPI Orchestration:** A lightweight Python backend brokers requests to Ollama (or any OpenAI-compatible endpoint) with async handlers, extensible middleware, and room for advanced features like memory or retrieval.

🔹 **Configurable & Portable:** Environment variables define endpoints and model names, making it easy to target cloud providers, serverless runtimes, or hybrid deployments.

🔹 **Tooling Ready:** The architecture supports streaming responses, system prompts, and future enhancements such as tool invocation, logging, and analytics hooks.



