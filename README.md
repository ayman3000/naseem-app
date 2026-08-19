<p align="center">
  <img src="assets/icon-256.png" width="128" alt="Naseem icon">
</p>

<h1 align="center">Naseem · نسيم</h1>

<p align="center"><b>The Mac-native AI agent that does the work, not just the chat.</b><br>
A fast, lightweight agent for macOS — a gentle breeze against the heavy, hot Electron assistants.</p>

<p align="center">
  <a href="https://github.com/ayman3000/naseem-app/releases/latest/download/Naseem.dmg"><b>⬇️ Download Naseem for macOS</b></a>
  &nbsp;·&nbsp;
  <a href="https://aymanhamed.gumroad.com/l/naseem">Get Naseem Pro — one-time $29</a>
</p>

---

## What is Naseem?

Naseem is a **native SwiftUI app** that runs capable, tool-using AI agents on your Mac — against any major cloud model **or fully on-device** on Apple Silicon. It streams token-by-token, remembers you across conversations, learns skills over time, and can safely act on your Mac behind a **human-in-the-loop approval gate**.

**Bring your own AI key:** cloud models bill your API key directly; local models (Ollama, MLX) are free. No account, no subscription, no telemetry.

## Highlights

| | |
|---|---|
| 👤 **Profiles** | Per-conversation personas — Assistant, Writer, Software Engineer, QA Engineer, Automation/Ops — each bundling a system prompt, tool set, and approval policy. Duplicate-and-edit your own (Pro). |
| 📱 **iOS Simulator driving** (Pro) | Boots simulators, builds & installs your app, taps/types/swipes through the real UI tree, reads logs, screenshots into the Artifacts pane. Debug your app by asking for it. |
| 🖥 **Mac computer use** (Pro) | Drives GUI-only Mac apps (Notes, Mail, System Settings…) natively via Accessibility — allowlisted per conversation, approved per action. |
| 🤝 **Sub-agent delegation** (Pro) | Spawns focused child agents for big side tasks and works in parallel, with live nested trace cards. |
| 📲 **Telegram remote** (Pro) | Talk to your agent from your phone — including remote Approve/Deny of gated tool calls. |
| 💻 **On-device inference (MLX)** | Fully local Apple-Silicon inference — no network, no cloud, private by construction. |
| 🛠 **Native tools** | Real terminal, filesystem with diff-based patching, Python, PDF — behind per-call approval. |
| 🔌 **MCP** | Connect any Model Context Protocol server; paste-whole-JSON config editor. |
| 🧠 **Memory & skills** | Cross-conversation memory; recurring tasks become reusable skills. |
| ⌥␣ **Quick Ask** | Global hotkey panel — one-shot questions from anywhere. |

## Free vs Pro

**Free is the agent you chat with and supervise; Pro is the agent you hand work to.**

- **Free — forever, no account, no card:** chat with every provider (Anthropic, OpenAI, Gemini, Ollama, local MLX), conversations & projects, vision, core tools with approval, MCP, memory & skills, Quick Ask, Assistant + Writer profiles.
- **Pro — one-time $29:** simulator driving, Mac computer use, sub-agents, Telegram remote, self-improving skills, Pro profiles + custom authoring. Personal license, up to 3 Macs. No subscription.
- Every install starts with a **14-day full-feature trial** — no card; the app keeps working on Free afterward.

## Getting started

1. [Download the DMG](https://github.com/ayman3000/naseem-app/releases/latest/download/Naseem.dmg), drag **Naseem** to Applications, and launch. The app is Developer ID-signed and notarized.
2. Open **Settings** (⌘,) → pick a default provider and model.
3. Paste an API key for cloud providers (stored in the macOS Keychain) — or go fully local with **MLX** (weights download on first use) or **Ollama** (`ollama serve`).
4. Ask *"list the files in ~/Downloads"* to see the approval flow in action.

The full manual ships inside the app: **Help → Naseem Manual** (⌘?).

## Requirements

- Apple Silicon Mac running a recent macOS.
- One model source: an API key (OpenAI / Anthropic / Gemini), or Ollama, or nothing at all (on-device MLX).

## Updates

Naseem updates itself via [Sparkle](https://sparkle-project.org) — you'll be offered new versions automatically. Releases (with notes) are published on the [Releases page](https://github.com/ayman3000/naseem-app/releases).

## Security posture

Naseem is intentionally **unsandboxed** so its terminal is a real terminal. The safety boundary is you: mutating tools require per-call approval showing the exact command; the dispatcher fails closed; secrets live in the Keychain. Not on the App Store by design.

## Built on

Naseem is built on the open-source [SwiftAgentKit](https://github.com/ayman3000/SwiftAgentKit) (agent runtime, tools, MCP, simulator/Mac driving) and [LLMProviderKit](https://github.com/ayman3000/LLMProviderKit) (provider abstraction) — both MIT.

## Support

Questions, bugs, feature requests: **ayman3000@gmail.com** or [open an issue](https://github.com/ayman3000/naseem-app/issues).

---

© 2026 Ayman Hamed. "Naseem" and the breeze logo are trademarks of Ayman Hamed. This repository hosts documentation and release artifacts; the application source is closed.
