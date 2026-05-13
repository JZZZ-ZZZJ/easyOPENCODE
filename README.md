# OpenCode CLI Utilities

A set of small tools to enhance your [OpenCode CLI](https://opencode.ai) experience.

[![EN](https://img.shields.io/badge/English-blue.svg)](README.md)
[![中文](https://img.shields.io/badge/中文-red.svg)](README.zh-CN.md)

## ✨ Features

- 🔔 **Idle notification** – A Windows pop-up that alerts you when the model finishes thinking.

## 📦 What's included

- `notify.ps1` – PowerShell script that displays the pop-up message.
- `notification.js` – OpenCode plugin that listens for the `session.idle` event.

## 🚀 Usage

1. Place `notify.ps1` in the following directory:
   `C:\Users\<username>\.config\opencode\`
2. Place `notification.js` in the plugins folder:
   `C:\Users\<username>\.config\opencode\plugins\`

> **Note:** Replace `<username>` with your actual Windows username.

## ⚙️ How it works

OpenCode's plugin system exposes a `session.idle` event that fires when the model stops generating and the session becomes idle.

- The `notification.js` plugin subscribes to this event.
- When triggered, it invokes `notify.ps1` via PowerShell.
- `notify.ps1` then displays a native Windows message box to let you know the response is ready.

## 🪟 Requirements

- Windows (PowerShell 5.1 or later)
- [OpenCode CLI](https://opencode.ai)
