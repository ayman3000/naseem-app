<p align="center">
  <img src="assets/icon-256.png" width="128" alt="Naseem icon">
</p>

<h1 align="center">Naseem · نسيم</h1>

<p align="center"><b>The Mac-native AI agent that does the work, not just the chat.</b><br>
A fast, lightweight agent for macOS — a gentle breeze against the heavy, hot Electron assistants.</p>

<p align="center">
  <a href="https://ayman3000.github.io/naseem-app/"><b>🌐 Website</b></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/ayman3000/naseem-app/releases/latest/download/Naseem.dmg"><b>⬇️ Download Naseem for macOS</b></a>
  &nbsp;·&nbsp;
  <a href="https://aymanhamed.gumroad.com/l/naseem">Get Naseem Pro</a>
</p>

---

## What is Naseem?

Naseem is a **native SwiftUI app** that runs capable, tool-using AI agents on your Mac — against any major cloud model **or fully on-device** on Apple Silicon. It streams token-by-token, remembers you across conversations, learns skills over time, and can safely act on your Mac behind a **human-in-the-loop approval gate**.

A powerful model alone isn't an agent — it needs a harness. Naseem is that harness, plus one thing browser-bound assistants don't have: **your Mac**.

> **LLM + Agent Harness + Your Mac**
> The model provides the intelligence. The harness gives it agency. Your Mac gives it the power to act.

**Bring your own AI key:** cloud models bill your API key directly; local models (Ollama, MLX) are free. No account, no subscription, no telemetry.

## Why Naseem is different

Most AI assistants stop at generating an answer. Naseem is built to **continue** — inspect the project, make the change, run the tools, read the results, verify, and fix.

- **It works with your real files** — inspect, read, patch, and create files on disk. No copy-pasting between a chat window and your editor.
- **It has a real terminal** — `git`, `xcodebuild`, package managers, tests, scripts. Not a browser sandbox; your Mac's actual environment. It runs Python too.
- **It drives the iOS Simulator natively** — and it does so the way the best browser agents work: by reading the app's **accessibility tree as text** and acting on named elements, not by screenshotting and guessing. A tree read costs a fraction of a screenshot, needs no vision model, and is far more precise. Other coding agents shell out to `simctl` one command at a time; Naseem keeps one live connection and talks to your app.
- **It automates native Mac apps** — the same tree-first approach applied through Apple's Accessibility APIs, for GUI-only apps (Notes, Mail, System Settings) that have no CLI or API.
- **It's the conductor, not the orchestra** — written entirely in Swift, no Electron, no embedded browser, no Node runtime. During a full build-and-test run it stays light (~120 MB in one measured Minecraft experiment) while Xcode, the Simulator, and the model do the heavy lifting.

## Highlights

| | |
|---|---|
| 👤 **Profiles** | Per-conversation personas — Assistant, Writer, Software Engineer, QA Engineer, Automation/Ops — each bundling a system prompt, tool set, and approval policy. Duplicate-and-edit your own (Pro). |
| 📱 **iOS Simulator driving** (Pro) | Boots simulators, builds & installs your app, taps/types/swipes through the real UI tree, reads logs, screenshots into the Artifacts pane. Debug your app by asking for it. |
| 🖥 **Mac computer use** (Pro) | Drives GUI-only Mac apps natively via Accessibility — allowlisted per conversation, approved per action, allowed on demand the first time it's needed. |
| 🤝 **Sub-agent delegation** (Pro) | Spawns focused child agents for big side tasks and works in parallel, with live nested trace cards. |
| 📲 **Telegram remote** (Pro) | Talk to your agent from your phone — including remote Approve/Deny of gated tool calls. |
| 🔎 **Web search** | A built-in `web_search` tool for current events, docs, and prices — bring your own free Tavily or Brave key. |
| 💻 **On-device inference (MLX)** | Fully local Apple-Silicon inference — no network, no cloud, private by construction. |
| 🛠 **Native tools** | Real terminal, filesystem with diff-based patching, Python, PDF — behind per-call approval. |
| 🔌 **MCP** | Connect any Model Context Protocol server; paste-whole-JSON config editor. |
| 🧠 **Memory & skills** | Cross-conversation memory; recurring tasks become reusable skills; lessons learned from failed runs. |
| ⌥␣ **Quick Ask** | Global hotkey panel — one-shot questions from anywhere. |

## Built to stay sharp on long tasks

The hard part of an agent isn't answering — it's staying useful over hundreds of steps without drowning in its own context or losing the plot. Naseem invests heavily here:

- **Small, stable context** — completed tool outputs collapse to compact receipts (full text always retrievable on demand), so a marathon run keeps its working context lean instead of ballooning. The request prefix stays byte-identical between steps, so your provider's prompt cache does the work it's meant to — **cheaper, faster long sessions**, and on a subscription your quota lasts far longer.
- **Memory that survives restarts** — build logs, test runs, and search results persist across app launches. Ask about yesterday's failed build and the agent pulls up the actual log.
- **Stays on mission — and knows when to stop** — each conversation carries a goal (shown as a header chip) the agent re-reads on every step. A **no-progress guard** watches for flailing: after a few turns with no real progress it **pauses and asks you** — with the goal and what it tried — instead of grinding to the turn limit. Tunable or off in Settings.
- **See where it goes** — a **Usage & Cost** view charts your tokens and estimated cost over time, by day and by model. Prices are sourced live from models.dev, so the numbers cover far more models automatically.
- **Crash-safe runs** — quit or crash mid-task and completed steps are preserved and clearly marked; *continue* resumes with memory of what was done.
- **Honest numbers** — the token and cost readout uses your provider's real reported usage, and shows *subscription* instead of a phantom dollar figure when you're on a flat-rate plan.

## Free vs Pro

**Free is the agent you chat with and supervise; Pro is the agent you hand work to.**

- **Free — forever, no account, no card:** chat with every provider (Anthropic, OpenAI, Gemini, Ollama, local MLX), conversations & projects, web search, vision, core tools with approval, MCP, memory & skills, Quick Ask, Assistant + Writer profiles.
- **Pro:** simulator driving, Mac computer use, sub-agents, Telegram remote, self-improving skills, Pro profiles + custom authoring. Personal license, up to 3 Macs. **One-time purchase, no subscription.**
- Every install starts with a **30-day full-feature trial** — no card; the app keeps working on Free afterward.

Because Naseem uses your own models and API keys, buying Pro doesn't lock you into another monthly AI bill.

## Getting started

1. [Download the DMG](https://github.com/ayman3000/naseem-app/releases/latest/download/Naseem.dmg), drag **Naseem** to Applications, and launch. The app is Developer ID-signed and notarized.
2. Open **Settings** (⌘,) → pick a default provider and model.
3. Paste an API key for cloud providers (stored in the macOS Keychain) — or go fully local with **MLX** (weights download on first use) or **Ollama** (`ollama serve`).
4. Ask *"list the files in ~/Downloads"* to see the approval flow in action.

The full manual ships inside the app: **Help → Naseem Manual** (⌘?), including a **What's New** tab each release.

## Requirements

- macOS 14 or later, on Apple Silicon or Intel.
- One model source: an API key (OpenAI / Anthropic / Gemini), or Ollama, or nothing at all (on-device MLX).
- iOS Simulator automation requires Xcode.

## Updates

Naseem updates itself via [Sparkle](https://sparkle-project.org) — you'll be offered new versions automatically. Releases (with notes) are published on the [Releases page](https://github.com/ayman3000/naseem-app/releases).

## Security posture

Naseem is intentionally **unsandboxed** so its terminal is a real terminal. The safety boundary is you: mutating tools require per-call approval showing the exact command; the dispatcher fails closed; secrets live in the Keychain and are never logged. Computer-use is restricted to a per-conversation allowlist. Imported skills pass through your review before you trust them. When you're ready, an autonomous mode is available — but autonomy is something you *give* the agent, not something it assumes. Not on the App Store by design.

## Built on

Naseem is built on the open-source [SwiftAgentKit](https://github.com/ayman3000/SwiftAgentKit) (agent runtime, tools, MCP, simulator/Mac driving) and [LLMProviderKit](https://github.com/ayman3000/LLMProviderKit) (provider abstraction) — both MIT.

## Links

- 🌐 **Website:** [ayman3000.github.io/naseem-app](https://ayman3000.github.io/naseem-app/)
- ⬇️ **Download (latest DMG):** [Naseem.dmg](https://github.com/ayman3000/naseem-app/releases/latest/download/Naseem.dmg)
- ⭐ **Get Pro:** [aymanhamed.gumroad.com/l/naseem](https://aymanhamed.gumroad.com/l/naseem)
- 📝 **Release notes & feed:** [Releases](https://github.com/ayman3000/naseem-app/releases)
- 🧩 **Open-source foundations:** [SwiftAgentKit](https://github.com/ayman3000/SwiftAgentKit) · [LLMProviderKit](https://github.com/ayman3000/LLMProviderKit)
- 🌬 **Also by the author:** [Kommanda](https://kommanda.app/)

## Support

Questions, bugs, feature requests: **ayman3000@gmail.com** · [aymanhamed.com/support](https://aymanhamed.com/support) · or [open an issue](https://github.com/ayman3000/naseem-app/issues).

---

© 2026 Ayman Hamed. "Naseem" and the breeze logo are trademarks of Ayman Hamed. This repository hosts documentation and release artifacts; the application source is closed.
