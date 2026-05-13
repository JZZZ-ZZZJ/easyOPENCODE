[![EN](https://img.shields.io/badge/language-English-blue.svg)](README.md)
[![中文](https://img.shields.io/badge/语言-中文-red.svg)](README.zh-CN.md)

# OpenCode CLI 实用工具

一组增强 [OpenCode CLI](https://opencode.ai) 使用体验的小工具。

## ✨ 功能

- 🔔 **空闲通知** – 当模型思考结束时，弹出 Windows 提醒窗口。

## 📦 包含内容

- `notify.ps1` – 用于弹出提醒消息的 PowerShell 脚本。
- `notification.js` – 监听 `session.idle` 事件的 OpenCode 插件。

## 🚀 使用方法

1. 将 `notify.ps1` 放入以下目录：
   `C:\Users\<用户名>\.config\opencode\`
2. 将 `notification.js` 放入插件文件夹：
   `C:\Users\<用户名>\.config\opencode\plugins\`

> **注意：** 请将 `<用户名>` 替换为你的实际 Windows 用户名。

## ⚙️ 工作原理

OpenCode 的插件系统提供了 `session.idle` 事件，当模型停止生成、会话进入空闲状态时触发。

- `notification.js` 插件负责监听该事件。
- 事件触发时，它会通过 PowerShell 调用 `notify.ps1`。
- `notify.ps1` 随即显示原生 Windows 消息框，提醒你回复已就绪。

## 🪟 系统要求

- Windows（PowerShell 5.1 或更高版本）
- 已启用插件支持的 [OpenCode CLI](https://opencode.ai)
