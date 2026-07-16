class Header extends HTMLElement {
    constructor() {
        super();
    }
connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,600&display=swap');

            * { box-sizing:border-box; margin:0; padding:0; }
            html { scroll-behavior:smooth; }
            body {
            background:#FAF7F5;
            font-family:'DM Sans',sans-serif;
            color:#1a0a03;
            overflow-x:hidden;
            }
            a {
            text-decoration: none;
            color: inherit;
            }

            .nav {
            position:sticky;
            height:64px;
            padding:0 38px;
            background:rgba(250,247,245,.94);
            backdrop-filter:blur(10px);
            border-bottom:1px solid #e8d8dc;
            display:flex;
            align-items:center;
            justify-content:space-between;
            
            top:0;
            z-index:5000;
            }

            .nav-links {
            display:flex;
            gap:22px;
            font-size:11px;
            letter-spacing:.08em;
            text-transform:uppercase;
            color:#7C7480;
            white-space:nowrap;
            }

            .nav-links-span { cursor:pointer; }
            .nav-links-span:hover { color:#be6c9e; }
            .nav-cta {
            background:#6c0820;
            color:white;
            padding:10px 18px;
            border-radius:999px;
            font-size:11px;
            font-weight:700;
            letter-spacing:.08em;
            text-transform:uppercase;
            }
        </style>
    </head>
    <header>
      
  <nav class="nav">
    <div><a href="/"><img src="assets/logo.svg" width="50" height="50"></a></div>
    <div class="nav-links">
      <span class="nav-links-span"><a href="a.html">a</a></span>
      <span class="nav-links-span"><a href="b.html">b</a></span>
      <span class="nav-links-span"><a href="c.html">c</a></span>
      <span class="nav-links-span"><a href="d.html">d</a></span>
      <span class="nav-links-span"><a href="e.html">e</a></span>
      <span class="nav-links-span"><a href="f.html">f</a></span>
      <span class="nav-links-span"><a href="g.html">g</a></span>
      <span class="nav-links-span"><a href="h.html">h</a></span>
    </div>
    <a class="nav-cta link-cta" href="i.html">i</a>
  </nav>
    </header>
    `;
  }
}
customElements.define('header-component', Header);