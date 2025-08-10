# 🌌 Cosmic Code Hub

Cosmic Code Hub is an interactive, beginner-friendly coding resources website with a starry animated background.  
It provides quick access to programming languages, practice platforms, and curated YouTube tutorials.  
It also features a built-in code search powered by a **local knowledge base** and optional **OpenAI API integration**.

---

## 🚀 Features

- **Starry Night Animation**
  - Dynamic stars and shooting stars rendered on a `<canvas>`.
  - Responsive to window resizing.

- **Quick Navigation**
  - **Home** – Cosmic welcome screen.
  - **Coding Languages** – Links to Python, JavaScript, Java, C++ resources.
  - **Practice Platforms** – Beginner to advanced practice sites (Codewars, LeetCode, Codeforces).
  - **YouTube Tutorials** – Handpicked tutorials for each language.
  - **About** – Short description of the project.

- **Search Feature**
  - Local knowledge base with built-in explanations and example code for topics like:
    - Linear Search
    - Binary Search
  - Integration with **OpenAI API** for answering additional coding questions.

- **Modal Wish Box**
  - Simple modal UI for interactive features.

---

## 🛠️ How It Works

### **1. Animation**
- The `canvas` element renders 300 twinkling stars.
- Shooting stars appear randomly with varying speed and length.
- The background resizes dynamically with the browser window.

### **2. Content Loading**
- Content for each section (`home`, `languages`, `practice`, `tutorials`, `about`) is stored in a `content` object.
- `loadPage(page)` replaces the `#main-content` with the selected section.
- Navigation links update their active state dynamically.

### **3. Search Functionality**
- First searches the **local knowledge base** for pre-stored topics.
- If not found locally, queries the **OpenAI API** using the provided `OPENAI_API_KEY`.

### **4. API Integration**
```javascript
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";
```
### **📂 File Structure**
```project-folder/
│
├── index.html       # Main HTML file
├── script.js        # JavaScript logic for animation, navigation, and search
└── README.md        # Project documentation
```
