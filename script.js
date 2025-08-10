<script>
  // Your existing star animation code (no change)
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  resizeCanvas();

  const stars = [];
  const shootingStars = [];

  for (let i = 0; i < 300; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 1.5, alpha: Math.random(), delta: Math.random() * 0.02 });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    for (let s of stars) {
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
      s.alpha += s.delta;
      if (s.alpha <= 0 || s.alpha >= 1) s.delta *= -1;
    }
    ctx.globalAlpha = 1;
    for (let s of shootingStars) {
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x + s.length, s.y + s.length / 2);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
      s.x += s.speed;
      s.y += s.speed / 2;
    }
    shootingStars.forEach((s, i) => {
      if (s.x > canvas.width || s.y > canvas.height) shootingStars.splice(i, 1);
    });
  }

  function animate() {
    drawStars();
    if (Math.random() < 0.01) {
      shootingStars.push({ x: Math.random() * canvas.width, y: 0, length: Math.random() * 100 + 50, speed: Math.random() * 10 + 6 });
    }
    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);

  // Your existing content and loadPage code (no change)
  const content = {
    home: `<div class="logo-container"><div class="logo">COSMIC</div><div class="logo">CODE HUB</div></div><div class="tagline">Launch your coding journey into the stars!</div>`,
    languages: `<h2>Coding Languages</h2>
      <div class="option-button"><a href="https://www.learnpython.org/" target="_blank">🐍 Python</a></div>
      <div class="option-button"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">✨ JavaScript</a></div>
      <div class="option-button"><a href="https://www.codecademy.com/learn/learn-java" target="_blank">☕ Java</a></div>
      <div class="option-button"><a href="https://www.learncpp.com/" target="_blank">💻 C++</a></div>`,
    practice: `<h2>Practice Platforms</h2>
      <div class="option-button"><a href="https://www.codewars.com/" target="_blank">🧠 Beginner - Codewars</a></div>
      <div class="option-button"><a href="https://leetcode.com/" target="_blank">🚀 Moderate - LeetCode</a></div>
      <div class="option-button"><a href="https://www.codeforces.com/" target="_blank">🪐 Advanced - Codeforces</a></div>`,
    tutorials: `<h2>YouTube Tutorials</h2>
      <div class="option-button"><a href="https://www.youtube.com/@freecodecamp" target="_blank">📺 Python - freeCodeCamp</a></div>
      <div class="option-button"><a href="https://www.youtube.com/@TheNetNinja" target="_blank">📺 JavaScript - The Net Ninja</a></div>
      <div class="option-button"><a href="https://www.youtube.com/@ProgrammingwithMosh" target="_blank">📺 Java - Mosh</a></div>
      <div class="option-button"><a href="https://www.youtube.com/@CodeBeauty" target="_blank">📺 C++ - CodeBeauty</a></div>`,
    about: `<h2>About Cosmic Code Hub</h2>
      <p>This website is a one-stop launchpad for aspiring coders to explore programming languages, practice their skills, and find the best video tutorials to guide them. Let your journey to the coding cosmos begin here!</p>`
  };

  function loadPage(page) {
    document.getElementById('main-content').innerHTML = content[page];
    document.querySelectorAll('nav a').forEach(a => {
      a.classList.toggle('active', a.textContent.toLowerCase() === page);
    });
  }

  // Elements
  const wishBtn = document.querySelector('.wish-btn');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-btn');
  const searchBtn = document.querySelector('.search-btn');
  const searchBox = document.querySelector('.search-box');
  const answerBox = document.querySelector('.answer-box');

  // Open/close modal
  wishBtn.addEventListener('click', () => modal.style.display = 'block');
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

  // Your existing local knowledge base
  const codeKnowledge = {
    "linear search": {
      explanation: "Linear search checks each element in order until finding the target. Time complexity: O(n).",
      examples: {
        python: {
          code: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
          bestFor: "Learning and small datasets"
        }
      }
    },
    "binary search": {
      explanation: "Binary search divides a sorted array to locate a target. Time complexity: O(log n).",
      examples: {
        python: {
          code: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
          bestFor: "Sorted arrays"
        }
      }
    }
  };

  // === ADD YOUR OPENAI API KEY HERE ===
  const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

  async function fetchFromOpenAI(prompt) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful coding assistant." },
            { role: "user", content: prompt }
          ],
          max_tokens: 500,
          temperature: 0.5
        }),
      });
      if (!res.ok) {
        throw new Error(`OpenAI API error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      return `Error fetching from OpenAI: ${error.message}`;
    }
  }

  async function searchCode() {
    const query = searchBox.value.trim().toLowerCase();
    if (!query) return;

    answerBox.innerHTML = "<p>🌌 Cosmic AI is thinking...</p>";

    // First check local knowledge base
    if (codeKnowledge[query]) {
      const result = codeKnowledge[query];
      let html = `<p>${result.explanation}</p><h3>Code Examples:</h3>`;
      for (const lang in result.examples) {
        html += `<h4>${lang}</h4>
          <p><strong>Best for:</strong> ${result.examples[lang].bestFor}</p>
          <pre>${result.examples[lang].code}</pre>`;
      }
      answerBox.innerHTML = html;
    } else {
      // Query OpenAI API for other questions
      const aiResponse = await fetchFromOpenAI(searchBox.value.trim());
      answerBox.innerHTML = `<pre>${aiResponse}</pre>`;
    }

    // Scroll answer box down to show new content
    answerBox.scrollTop = answerBox.scrollHeight;
  }

  searchBtn.addEventListener('click', searchCode);
  searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchCode();
    }
  });

  answerBox.scrollTop = answerBox.scrollHeight;

  loadPage('home');
  animate();
</script>
