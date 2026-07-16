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
    <header>
      
  <nav class="nav">
    <!-- <div><a href="/"><span class="logoimg"><span class="visually-hidden">L&M</span></span></a></div> -->
    <div><a href="/"><img style="margin-top:5px;" src="assets/L&M_Logo.svg" width="100" height="100"></a></div>
    <div class="nav-links">
      <span class="nav-links-span"><a href="Magazine.html">The Magazine</a></span>
      <span class="nav-links-span"><a href="Journal.html">L&M Journal</a></span>
      <span class="nav-links-span"><a href="Blogs.html">Blogs</a></span>
      <span class="nav-links-span"><a href="Universe-Catalog.html">L&M Universe</a></span>
      <span class="nav-links-span"><a href="Martini-Mondays.html">Martini Mondays</a></span>
      <span class="nav-links-span"><a href="Studio.html">L&M Studio</a></span>
      <span class="nav-links-span"><a href="About.html">About</a></span>
      <span class="nav-links-span"><a href="Contact.html">Contact</a></span>
    </div>
    <a class="nav-cta link-cta" href="Magazine.html">Read Issue 01</a>
  </nav>
    </header>
    `;
  }
}
customElements.define('header-component', Header);