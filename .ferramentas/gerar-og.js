// Gera a imagem de compartilhamento (1200x630) de cada página de segmento em /og/<slug>.jpg.
// Uso: node .ferramentas/gerar-og.js   (depois de gerar-paginas.js, que escreve paginas.json)
const puppeteer = require("C:/Users/Douglas/Desktop/CLAUDE/majex-produtos/node_modules/puppeteer-core");
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const pags = require("./paginas.json");
const b64 = (f) => "data:" + (f.endsWith(".woff2") ? "font/woff2" : "image/webp") + ";base64," + fs.readFileSync(path.join(RAIZ, f)).toString("base64");
const LOGO = '<svg viewBox="0 0 48 48" width="54" height="54"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22E7CE"/><stop offset=".55" stop-color="#3FD6E8"/><stop offset="1" stop-color="#8B6BFF"/></linearGradient></defs><rect x="3" y="3" width="42" height="42" rx="13" fill="#0A0B12" stroke="url(#g)" stroke-width="1.6"/><g stroke-linecap="round" stroke-width="4.4" fill="none"><path d="M17 16 L31 32" stroke="#8B6BFF" opacity=".85" transform="translate(2 -1)"/><path d="M31 16 L17 32" stroke="#8B6BFF" opacity=".85" transform="translate(2 -1)"/><path d="M17 16 L31 32" stroke="url(#g)"/><path d="M31 16 L17 32" stroke="#22E7CE"/></g><circle cx="24" cy="24" r="1.7" fill="#EAFBF8"/></svg>';
(async () => {
  fs.mkdirSync(path.join(RAIZ, "og"), { recursive: true });
  const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox"] });
  const p = await b.newPage(); await p.setViewport({ width: 1200, height: 630 });
  for (const pg of pags) {
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:C;src:url(${b64("fonts/chakra-petch-700-latin.woff2")})}
@font-face{font-family:M;src:url(${b64("fonts/jetbrains-mono-500-latin.woff2")})}
@font-face{font-family:B;src:url(${b64("fonts/manrope-400-latin.woff2")})}
*{margin:0;box-sizing:border-box} body{width:1200px;height:630px;background:#07080D;color:#EEF1FA;overflow:hidden;position:relative;font-family:B}
.grade{position:absolute;inset:0;background-image:linear-gradient(rgba(34,231,206,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(34,231,206,.07) 1px,transparent 1px);background-size:48px 48px}
.tx{position:absolute;left:64px;top:60px;width:560px}
.marca{display:flex;align-items:center;gap:14px;font:700 26px/1 C;letter-spacing:.14em}
.k{margin-top:70px;font:500 17px/1.4 M;letter-spacing:.14em;text-transform:uppercase;color:#22E7CE}
h1{margin-top:16px;font:700 62px/1.02 C;letter-spacing:-.01em}
.p{margin-top:22px;font-size:23px;line-height:1.4;color:#B4BCD4}
.url{position:absolute;left:64px;bottom:48px;font:500 18px/1 M;color:#8A91A8;letter-spacing:.06em}
.jan{position:absolute;right:-60px;top:110px;width:560px;border-radius:18px;overflow:hidden;border:1px solid #232741;box-shadow:0 40px 90px -30px rgba(0,0,0,.9);background:#0b0d16}
.bar{height:34px;background:#10121c;display:flex;align-items:center;gap:7px;padding:0 14px}.bar i{width:10px;height:10px;border-radius:50%;background:#ff5f57}.bar i:nth-child(2){background:#febc2e}.bar i:nth-child(3){background:#28c840}
.jan img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top}
.cel{position:absolute;right:430px;bottom:-40px;width:150px;border-radius:20px;overflow:hidden;border:4px solid #0b0d16;transform:rotate(-5deg);box-shadow:0 30px 60px -20px rgba(0,0,0,.9)}
.cel img{display:block;width:100%}
</style></head><body><div class="grade"></div>
<div class="jan"><div class="bar"><i></i><i></i><i></i></div><img src="${b64(pg.og.desk)}"></div>
${pg.og.cel ? `<div class="cel"><img src="${b64(pg.og.cel)}"></div>` : ""}
<div class="tx"><div class="marca">${LOGO}MAJEX</div><div class="k">${pg.og.kicker}</div><h1>${pg.og.titulo}</h1><div class="p">${pg.og.frase}</div></div>
<div class="url">majexsites.com.br</div></body></html>`;
    await p.setContent(html, { waitUntil: "load" }); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(RAIZ, "og", pg.slug + ".jpg"), type: "jpeg", quality: 82 });
    console.log("og/" + pg.slug + ".jpg", Math.round(fs.statSync(path.join(RAIZ, "og", pg.slug + ".jpg")).size / 1024) + " KB");
  }
  await b.close();
})();
