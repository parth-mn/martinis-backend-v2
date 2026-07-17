CSS
.newsletter {
  text-align:center;
  border-top: 1px solid var(--line);
  background:
    radial-gradient(circle at 20% 20%, rgba(255,202,212,.55), transparent 22%),
    linear-gradient(135deg, #FFFDF8, #FFF1F6);
}
.email-box {
  width:min(740px,100%);
  margin: 22px auto 0;
  border: 1.4px solid var(--noir);
  border-radius: 999px;
  padding: 8px;
  background:white;
  display:flex;
  gap:8px;
  box-shadow:5px 5px 0 var(--noir);
}
.email-box input { flex:1; border:0; outline:0; padding: 0 16px; min-height:42px; font-family:'DM Sans', sans-serif; font-size:13px; }
.footer-strip { padding: 16px 22px; text-align:center; font-size:10px; letter-spacing:.13em; text-transform:uppercase; border-top:1px solid var(--noir); background:var(--blush); color:var(--burgundy); font-weight:900; }

HTML
<section class="section newsletter" id="join-list">
<div class="kicker">Join the L&amp;M Newsletter</div>
<h2 class="section-title">Get the latest issue <em>in your inbox.</em></h2>
<p class="section-lede" style="margin-left:auto;margin-right:auto;">Join the L&amp;M List to receive the latest issue, Martini Mondays, future magazine drops and everything new from L&amp;M directly in your inbox.</p>
<form action="#" aria-label="Join the L&amp;M Newsletter" class="email-box" method="post"><input aria-label="Email address" autocomplete="email" name="email" placeholder="your@email.com" required="" type="email"/><button class="btn primary" type="submit">Join the L&amp;M Newsletter</button></form>
</section>
