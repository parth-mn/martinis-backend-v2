class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,600&display=swap');

            * { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; }
a {
  text-decoration: none;
  color: inherit;
}
            .footer {
  background:#1a0a03;
  color:rgba(255,255,255,.72);
  padding:28px 56px;
  font-family: 'DM Sans',sans-serif;
  overflow-x: hidden;
}
.footer-inner {
  max-width:1240px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:14px;
  flex-wrap:wrap;
}
.footer-copy {
  color:rgba(255,255,255,.35);
  font-size:11px;
}
.footer-links {
  display:flex;
  gap:18px;
  font-size:11px;
  letter-spacing:.08em;
  text-transform:uppercase;
}

            @media(max-width:760px){.footer {
    padding:26px 22px;
  }}
  
        </style>
    </head>
        <footer class="footer">
    <div class="footer-inner">
      <!-- <div class="logo-lower">L<span class="amp"> &amp; </span>M</div> -->
      <div><a href="/"><img src="../assets/L&M_Logo.svg" width="50" height="50"></a></div>
      <div class="footer-copy">© 2026 Lipsticks &amp; Martinis</div>
      <div class="footer-links">
        <span><a href="https://instagram.com/lipsticksandmartinis">Instagram</a></span>
        <span><a href="Contact.html">Contact</a></span>
        <span><a href="Legal.html">Privacy</a></span>
      </div>
    </div>
  </footer>`;
    }
}
customElements.define('footer-component',Footer);