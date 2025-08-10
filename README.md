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

### **💻 How to Run**
1. Clone or Download the repository:
```
git clone https://github.com/yourusername/cosmic-code-hub.git
cd cosmic-code-hub
```
2. Set your OpenAI API Key (optional, for AI responses):
- Open script.js
- Replace "YOUR_OPENAI_API_KEY" with your API key.

3. Open in Browser:
- Just open index.html in any modern browser.
  
### **📂 File Structure**
```
project-folder/
│
├── index.html       # Main HTML file
├── script.js        # JavaScript logic for animation, navigation, and search
└── README.md        # Project documentation
```
## ✨ Project Highlights

- 🌌 **Starry Night Animation** – A stunning animated background with twinkling stars and random shooting stars.
- 🧭 **Quick Navigation Menu** – Instantly switch between Home, Coding Languages, Practice Platforms, YouTube Tutorials, and About.
- 🔍 **Smart Search** –  
  - Searches local knowledge base for pre-defined coding topics (e.g., Linear Search, Binary Search).  
  - Falls back to **OpenAI API** for advanced coding questions.
- 📺 **Curated YouTube Tutorials** – Handpicked playlists for Python, JavaScript, Java, and C++ learners.
- 💡 **Beginner-Friendly** – Organized resources for both learning and practicing coding.
- 🎯 **Responsive Design** – Adapts seamlessly to different screen sizes and devices.
- 🪄 **Modal Wish Box** – Simple, interactive modal for additional fun and features.

