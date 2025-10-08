# C:\projects\chatkit-ollama\server\main.py
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Literal, List, Optional
from dotenv import load_dotenv
from openai import OpenAI

# Load .env
load_dotenv()
BASE_URL = os.getenv("OPENAI_BASE_URL", "http://localhost:11434/v1")
API_KEY  = os.getenv("OPENAI_API_KEY", "ollama")
MODEL    = os.getenv("MODEL_NAME", "llama3.1")

# OpenAI client pointed to Ollama
client = OpenAI(base_url=BASE_URL, api_key=API_KEY)

# FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Types
class Msg(BaseModel):
    role: Literal["system","user","assistant","tool"]
    content: str

class ChatRequest(BaseModel):
    messages: List[Msg]
    temperature: Optional[float] = 0.2

# Routes
@app.get("/")
def root():
    return {"ok": True, "endpoints": ["/health", "/api/chat"]}

@app.get("/health")
def health():
    return {"ok": True, "model": MODEL, "base_url": BASE_URL}

@app.post("/api/chat")
def chat(req: ChatRequest):
    try:
        resp = client.chat.completions.create(
            model=MODEL,
            messages=[m.model_dump() for m in req.messages],
            temperature=req.temperature,
        )
        m = resp.choices[0].message
        return {"message": {"role": m.role, "content": m.content}}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
