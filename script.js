Perfect — let’s make this feel premium, cinematic, and intentional, not just “an image sitting there.”

Below is a drop-in header + footer system using your logo that will instantly elevate your site.

🎬 1. HEADER (CINEMATIC NAVBAR)
✅ HTML
<header class="indaba-header">
  <div class="indaba-container">
    <img src="indaba_header.png" alt="Indaba Stories Academy" class="indaba-logo">
    
    <nav class="indaba-nav">
      <a href="#">Home</a>
      <a href="#">Programs</a>
      <a href="#">Schools</a>
      <a href="#">Festival</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</header>
🎨 CSS
.indaba-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 20, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  z-index: 1000;
}

.indaba-container {
  max-width: 1200px;
  margin: auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.indaba-logo {
  height: 55px;
  object-fit: contain;
}

.indaba-nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.85;
  transition: 0.3s;
}

.indaba-nav a:hover {
  opacity: 1;
  color: #f4a62a;
}
🔥 Why this works
Glass effect = modern + premium
Tight logo height = clean + intentional
Gold hover = matches your brand tone
🎬 2. HERO SPACING FIX (IMPORTANT)

Because header is fixed:

body {
  margin: 0;
  padding-top: 90px;
  font-family: 'Segoe UI', sans-serif;
  background: #0f0f1a;
  color: #fff;
}
🎬 3. FOOTER (PREMIUM FILM BRAND STYLE)
✅ HTML
<footer class="indaba-footer">
  <div class="indaba-footer-inner">
    
    <img src="indaba_footer.png" alt="Indaba Stories Academy" class="indaba-footer-logo">
    
    <p class="indaba-tagline">
      Empowering the next generation of African storytellers.
    </p>

    <div class="indaba-socials">
      <a href="#">Instagram</a>
      <a href="#">YouTube</a>
      <a href="#">WhatsApp</a>
    </div>

    <p class="indaba-copy">
      © 2026 Indaba Stories Academy. All rights reserved.
    </p>

  </div>
</footer>
🎨 CSS
.indaba-footer {
  background: #0a0a14;
  padding: 60px 20px;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.indaba-footer-logo {
  height: 45px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.indaba-tagline {
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 25px;
}

.indaba-socials a {
  color: #f4a62a;
  text-decoration: none;
  margin: 0 10px;
  font-size: 13px;
  letter-spacing: 1px;
}

.indaba-socials a:hover {
  text-decoration: underline;
}

.indaba-copy {
  margin-top: 30px;
  font-size: 12px;
  opacity: 0.5;
}
