class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

            * { box-sizing:border-box; margin:0; padding:0; }
            html { scroll-behavior:smooth; }
            a {
            text-decoration: none;
            color: inherit;
            }

            .nav {
            position:sticky;
            top: 0;
            z-index: 5000;
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

            .menu-toggle {
            display:none;
            background:none;
            border:none;
            font-size:28px;
            cursor:pointer;
            }

            .nav-links a {
            color: #7C7480;
            text-decoration: none;
            transition: color .2s ease;
            padding-bottom: 6px;
            border-bottom: 2px solid transparent;
            }

            .nav-links a:hover {
                color: #be6c9e;
            }

            .nav-links a.active {
                color: #6c0820;
                border-bottom-color: #6c0820;
                font-weight: 700;
            }

            .nav-cta {
            background: #6c0820;
            color: white;
            padding: 10px 18px;
            border-radius: 999px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
            }

    @media (max-width:768px){

    .menu-toggle{
        display:block;
    }

    .nav{
        flex-wrap:wrap;
        height:auto;
        padding:16px;
    }

    .nav-links{
        display:none;
        width:100%;
        flex-direction:column;
        gap:16px;
        margin-top:20px;
    }

    .nav-links.open{
        display:flex;
    }

    .nav-cta{
        display:none;
    }

}
</style>
<header>
<nav class="nav">
    <div><a href="/"><img style="margin-top:5px;" src="assets/L&M_Logo.svg" width="100" height="100"/></a></div>
    <div class="nav-links">
    <a href="magazine">The Magazine</a>
    <a href="journal">L&M Journal</a>
    <a href="martini-mondays">Martini Mondays</a>
    <a href="studio">L&M Studio</a>
    <a href="about">About</a>
    <a href="contact">Contact</a>
</div>
<a class="nav-cta link-cta" href="https://heyzine.com/flip-book/issue01july18.html">Read Issue 01</a>
<button class="menu-toggle" aria-label="Open menu">
    ☰
</button>
</nav>
</header>`;

const currentPage = window.location.pathname;

if (currentPage !== "/") {
    this.querySelectorAll(".nav-links a").forEach(link => {
        if (new URL(link.href).pathname === currentPage) {
            link.classList.add("active");
        }
    });
}

const menuButton = this.querySelector(".menu-toggle");
const navLinks = this.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

    }
}
customElements.define('header-component', Header);