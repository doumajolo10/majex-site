/* MAJEX: conta cliques no WhatsApp, Instagram e sites do portfólio (Vercel Web Analytics, anônimo e sem cookies).
   No plano gratuito os eventos personalizados não são guardados, então cada clique também vira uma "visita"
   no endereço /clique/<tipo>/<onde>, que aparece no painel da Vercel junto com as páginas. */
(function(){
  if(window.__mjCliques) return; window.__mjCliques = true;
  window.va = window.va || function(){ (window.vaq = window.vaq || []).push(arguments); };
  function onde(a){
    var s = a.closest("section[id], header, footer, nav");
    if(!s) return "flutuante";
    if(s.id) return s.id;
    return s.tagName === "FOOTER" ? "rodape" : "topo";
  }
  document.addEventListener("click", function(e){
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null; if(!a) return;
    var h = a.href || "", tipo = null;
    if(/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(h)) tipo = "whatsapp";
    else if(/instagram\.com/i.test(h)) tipo = "instagram";
    else if(a.target === "_blank" && h.indexOf(location.host) === -1 && /^https?:/.test(h)) tipo = "site-portfolio";
    if(!tipo) return;
    var pagina = location.pathname.replace(/^\/|\/$/g, "") || "inicio";
    var lugar = pagina + "-" + onde(a);
    try{ window.va("event", { name: "clique_" + tipo, data: { onde: lugar } }); }catch(_){}
    try{ window.va("pageview", { route: "/clique/" + tipo, path: "/clique/" + tipo + "/" + lugar }); }catch(_){}
  }, true);
})();
