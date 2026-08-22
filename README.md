# Psyche

![Psyche demo](https://raw.githubusercontent.com/EluciOwl/psyche-vanilla/main/assets/images/demo/demo.gif)

_Demo of the first version of Psyche (vanilla JS). This repo continues from there._

[![Live demo](https://img.shields.io/badge/🌙_live_demo-try_it_now-d946ef?style=for-the-badge&labelColor=1c1c1c)](https://eluciowl.github.io/psyche-vanilla/)
[![Vanilla version](https://img.shields.io/badge/🌙_vanilla_version-v1.0.1-d946ef?style=for-the-badge&labelColor=1c1c1c)](https://github.com/EluciOwl/psyche-vanilla)

**A calm space to face your own thoughts.**

Psyche is a small web app for self-reflection. You write down the thoughts that are on your mind, the heavy ones and the hopeful ones, and watch them drift onto the screen as floating clouds. From there, you can look at each thought honestly: question it, tag it with how it makes you feel, and notice which ones quietly drain your energy and which ones give it back.

The idea comes from something I believe deeply: our thoughts shape almost every decision we make. A thought like _"I forgot to do one thing, so I'm a failure"_ feels true in the moment, but it usually isn't. Psyche is built to help catch those thoughts and look at them clearly.

## 🚧 Status

In development. This is the main version of Psyche: first a React rebuild of the vanilla app, then new features on top.

**Rebuild first:**

- [x] **Project setup (React + Vite)**
      <br><br>
- [ ] **Screen 1: Home**
  - [x] Port vanilla UI
  - [ ] Navigation
    - [x] Home &harr; Thoughts
    - [ ] Home &harr; Emotions
    - [ ] Home &harr; Analyze
          <br><br>
- [ ] **Screen 2: Thoughts**
  - [x] Port vanilla UI
  - [ ] Cloud setup
    - [ ] Create clouds via input
    - [ ] Clouds are removable
          <br><br>
- [ ] **Screen 3: Emotions**
  - [ ] Port vanilla UI
  - [ ] Clouds are usable
    - [ ] Add created clouds to screen
    - [ ] Drag and drop
    - [ ] Let clouds snap into the zone
    - [ ] Clouds can be released
    - [ ] Save fed clouds
  - [ ] Emotion setup
    - [ ] Create default emotions
    - [ ] Drag and drop
    - [ ] Consumable by clouds
    - [ ] Create new emotions
    - [ ] Emotions are removable
          <br><br>
- [ ] **Screen 4: Analyze**
  - [ ] Port vanilla UI
  - [ ] Add saved emotions to barchart
  - [ ] Separate barchart by time
        <br><br>

**Then new ground:**

- [ ] User login

🗒️*More will be added here over time...*

## 🔁 Why rewrite it

The vanilla version works, but building it wore me down in a specific way. Every time something changed on screen, I had to go find the element and update it myself. Miss one spot and the app quietly showed the wrong thing. By the end I was spending more time keeping the screen honest than actually building features.

React promises to take that job off my hands: I describe what the screen should look like for a given state, and it keeps everything in sync. Rebuilding something I already know inside out felt like the best way to test that promise.

## 🧰 Built with

- React
- Vite
- Chart.js

## ▶️ Run it locally

```bash
git clone https://github.com/EluciOwl/psyche.git
cd psyche
npm install
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## 🙏 Credits

- Images: AI-generated
