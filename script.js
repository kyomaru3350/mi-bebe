/* ============ EDITE AQUI ============ */
const NOME = "Querida Amy";
const INICIO = new Date("2026-07-23T20:03:30");
const CIDADE_A = { nome: "Brasil", lat: -14.235, lng: -51.9253 };
const CIDADE_B = { nome: "Argentina", lat: -38.4161, lng: -63.6167 };
const ENCONTRO = new Date("2026-12-26T10:00:00");   // ou null se ainda não tem data
const PLANOS = [   // clique em cada um abre uma telinha com o seu texto
  { nome: "Desayunar juntos", texto: "Bueno, cada vez que voy a comer, me pongo a pensar: 'Y si ella estuviera aquí? Cómo sería?'. Y, bueno, hoy tengo la certeza de que, tan solo con tu presencia, ya sería la mejor cena del mundo: comer mientras converso contigo, hacerte reír y charlar sobre lo que pasó en nuestro día. Ese es mi sueño: compartir cada comida del día con la mujer que amo, la mujer con la que quiero pasar el resto de mi vida :)" },
  { nome: "Despertar juntos", texto: "Bueno, para empezar, no se trata solo de despertar a tu lado por la mañana, sino de haber dormido juntos, abrazados y amándonos, con la certeza de que estamos ahí el uno para el otro en cualquier momento. Cada vez que despierto, lo primero que hago es tomar mi celular para darte los buenos días y ver si todo está bien contigo. Pero lo que realmente quiero es despertar a tu lado y, aunque tengamos mal aliento, el pelo revuelto, ojeras o estemos totalmente cansados, decirte: 'Buenos días, amor, dormiste bien?', quedarnos unos 30 minutitos más abrazaditos, con esa pereza de levantarnos, darte un beso de buenos días y decirte cuánto te amo :)" },
  { nome: "Ver una película bien juntitos", texto: "Bueno, no puedo evitar imaginar el momento en que estemos juntos viendo esas películas de terror que tanto prometimos ver, y que, en el instante en que sintamos miedo, nos abracemos. lo que más deseo es estar a tu lado viendo algo, o quizás, dejar que la película siga rodando mientras hacemos otras cosas." },
  { nome: "Viajar juntos", texto: "Bueno, puse 'viajar juntos', pero la verdad es que, en general, ya sea salir a algún lugar cercano o hacer un viaje, cada vez que me muestras los sitios a los que vas, me quedo pensando: 'Y si yo estuviera allí?'. Siempre sueño con el momento en que llegará la oportunidad de compartir juntos la felicidad de esa experiencia; y, en esos instantes, poder mirarte a los ojos y decirte que no me arrepiento en absoluto de haberte elegido para amar, de haber persistido por ti, de haber cambiado por completo por ti; decirte lo MUY feliz que soy a tu lado y, finalmente, que eres el amor de mi vida." },
  { nome: "Cocinar juntos", texto: "Esto es un poco gracioso porque siempre me dices que quieres que pruebe tus comidas, pero en realidad soy yo quien quiere eso; quiero eso, QUIERO MUCHÍSIMO cocinar contigo, Quiero ayudarte (o, quién sabe, estorbarte), equivocarme en la receta del pastel y terminar quemándolo, besarte mientras algo hierve en el fuego... Quiero que todos los días sean así, que cada día hagamos todo lo que alguna vez soñamos :)"}
];
const FOTOS = [   // foto: "assets/fotos/1.jpg"
  { foto: "assets/Fotos/4.jpg", frase: "Tu sonrisa y tus ojos más bellos que una puesta de sol" },
  { foto: "assets/Fotos/6.jpg", frase: "Dios, me pregunto cómo puede existir una mujer tan hermosa en este mundo" },
  { foto: "assets/Fotos/5.jpg", frase: "Tus ojos son más hermosos que las auroras, y brillan más que tu pendiente fascinante" },
  { foto: "assets/Fotos/7.jpg", frase: "Esta es la escena que quiero ver todos los días al despertar." },
  { foto: "assets/Fotos/8.jpg", frase: "Dios, no puedo resistirme a ninguna foto tuya, mira esa boca, dame un beso." },
  { foto: "assets/Fotos/9.jpg", frase: "Dios, esa mirada, por qué me miras así? Podría terminar atacándote..." }
];
const MOTIVOS = ["Simplemente me encanta escucharte hablar, me encanta tu voz.", 
  "Tu risa, cuando te ríes, me dan ganas de reír también, porque mi motivo para vivir es verte feliz y riendo.", 
  "Siempre estás ahí para escucharme y calmarme; me parece algo sencillamente muy valioso en ti.",
  "La forma en que demuestras amor es, sencillamente, lo que más me hace feliz; siempre quedo encantado con tus sorpresas.", 
  "No importa cómo esté mi día; con un solo mensaje tuyo, ya haces que mi día sea feliz.", 
  "Y, para terminar, te amo porque eres tú; amo tu forma de ser y todo lo demás, siempre y cuando seas TÚ."];
  
const MUSICAS = [
  { nome: "Amor — Emanuel Cortes", porque: "", arquivo: "assets/musicas/1.mp3", foto: "assets/musicas/fotos/1.jpg" },   // arquivo: caminho do mp3 (sem arquivo, o botão ▶ não aparece) | foto: caminho da foto da música, ex. "assets/musicas/fotos/1.jpg" (vazio mostra o ♡)
  { nome: "Pareja Del Año — Sebastian Yatra, Myke Towers", porque: "", arquivo: "assets/musicas/2.mp3", foto: "assets/musicas/fotos/2.jpg" },
  { nome: "Okay — Chase Atlantic", porque: "", arquivo: "assets/musicas/3.mp3", foto: "assets/musicas/fotos/3.jpg"},
  { nome: "Consume — Chase Atlantic", porque: "", arquivo: "assets/musicas/4.mp3", foto: "assets/musicas/fotos/3.jpg"},
  { nome: "Yo Voy — Zion & Lenox", porque: "", arquivo: "assets/musicas/5.mp3", foto: "assets/musicas/fotos/5.jpg"},
  { nome: "Fuera Del Planeta — Eloy, Zion, Jowell & Randy", porque: "", arquivo: "assets/musicas/6.mp3", foto: "assets/musicas/fotos/6.jpg"}
];
const CARTA = `Querida Amy,

Bueno, finalmente llegamos a la parte que tanto estuve ansioso por hacer. Antes que nada, quiero que sepas que hice todo esto con muchísimo cariño, y que estas son las cosas que realmente siento por vos. Perdoname por la demora, pero simplemente canalicé todo lo que sentía por vos en este regalo. Bueno, vamos a lo que importa, mi amor. Quiero decirte que todo, absolutamente todo lo que te dije es verdad. Son mis verdaderos sentimientos por vos. Podría pasar horas y horas escribiendo, pero aun así me llevaría toda una vida describiéndote a vos, el amor de mi vida. Quiero que sepas que te amo muchísimo, muchísimo, muchísimo, de verdad. Y espero poder hacerte muy feliz. Quiero amarte hasta donde me den las fuerzas. Quiero ponerme ansioso esperando un mensaje tuyo. Quiero cumplir todos mis sueños con vos. Y quiero que sepas que algún día todo lo que marqué allá arriba, todo lo que quiero hacer con vos, lo vamos a hacer. Todavía tengo muchísimo que aprender sobre el amor, pero quiero aprender junto a vos. Sé que tengo muchos defectos que corregir, pero quiero hacerlo por nosotros. Quiero llegar a ser mi mejor versión, pero quiero que seas vos quien pueda disfrutarla. Quiero vivir muchísimas cosas, y quiero que todas y cada una de ellas sean con vos. Te amo intensamente. Solamente tengo que agradecerte por todo lo que hiciste desde que llegaste a mi vida. La hiciste mucho más feliz y mucho mejor. Sos la mejor novia del mundo, la más linda del mundo, la más graciosa del mundo, la más hermosa del mundo y la más rica del mundo 😈. En fin, no quiero hacer textos tan largos en cada parte de esta creación. Mientras hacía este sitio terminé llorando, porque realmente escribí todo lo que me salía del corazón cada vez que pensaba en vos. Quiero que sepas que sos el amor de mi vida y que, sin importar qué pase, quiero cambiar y mejorar por vos, y quiero que seas vos la persona con la que pueda compartir todo eso. Te amo, mi princesa linda. wqoekqowkdsapdapsdk MWAH, mi bebita hermosa :)

Con amor Gustavo.`;
/* ==================================== */

const $ = id => document.getElementById(id);
const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
gsap.registerPlugin(ScrollTrigger);

if (!reduz) {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}


/* pétalas só no início */
const caixa = document.createElement("div"); caixa.id = "petalas"; $("hero").appendChild(caixa);
for (let i = 0; i < (innerWidth < 700 ? 14 : 26); i++) {
  const p = document.createElement("div"), f = document.createElement("i");
  p.className = "petala"; p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = 12 + Math.random() * 14 + "s"; p.style.animationDelay = -Math.random() * 26 + "s";
  f.style.cssText = `--t:${9 + Math.random() * 12}px;--o:${.45 + Math.random() * .5};animation-duration:${3 + Math.random() * 3}s`;
  p.appendChild(f); caixa.appendChild(p);
}

/* nome digitando */
let n = 0;
(function digita() {
  $("nome").textContent = NOME.slice(0, ++n);
  if (n < NOME.length) setTimeout(digita, 140);
  else gsap.to("#sub", { opacity: 1, duration: 1.5 });
})();

/* contagens: anéis que preenchem, números que giram */
const UN = ["dias", "horas", "minutos", "segundos"], MAX = [365, 24, 60, 60];
function monta(el) {
  el.innerHTML = UN.map(u => `<div class="un"><svg viewBox="0 0 100 100" aria-hidden="true"><circle class="trilha" cx="50" cy="50" r="45"/><circle class="anel" cx="50" cy="50" r="45" pathLength="100" data-p="0"/></svg><b>0</b><span>${u}</span></div>`).join("");
}
function atualiza(el, s) {
  const v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
  el.querySelectorAll(".un").forEach((u, i) => {
    const b = u.querySelector("b"), an = u.querySelector(".anel"), p = v[i] % MAX[i] / MAX[i] * 100;
    if (b.textContent !== String(v[i])) { b.textContent = v[i]; b.classList.remove("tick"); void b.offsetWidth; b.classList.add("tick"); }
    an.style.transition = Math.abs(p - an.dataset.p) > 50 ? "none" : "";
    an.style.strokeDashoffset = 100 - p; an.dataset.p = p;
  });
}
function extenso(a, n) {
  let y = n.getFullYear() - a.getFullYear(), m = n.getMonth() - a.getMonth(), d = n.getDate() - a.getDate();
  if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); } if (m < 0) { y--; m += 12; }
  const p = (v, u, pl) => v ? `${v} ${v > 1 ? pl : u}` : "";
  return [p(y, "ano", "anos"), p(m, "mês", "meses"), p(d, "dia", "dias")].filter(Boolean).join(", ").replace(/, ([^,]*)$/, " e $1");
}
monta($("contador")); monta($("falta"));
function relogio() {
  const agora = new Date();
  $("ext").textContent = extenso(INICIO, agora) + " de nós";
  atualiza($("contador"), Math.floor((agora - INICIO) / 1000));
  if (!ENCONTRO) { $("falta-txt").textContent = "Um dia eu vou te abraçar."; $("falta").innerHTML = ""; return; }
  const s = Math.floor((ENCONTRO - agora) / 1000);
  if (s <= 0) { $("falta-txt").textContent = "Chegou o dia de te abraçar!"; $("falta").innerHTML = ""; return; }
  $("falta-txt").textContent = "Faltan para que te abrace.";
  const pct = Math.min(100, Math.max(0, (agora - INICIO) / (ENCONTRO - INICIO) * 100));
  $("barra-box").hidden = false; $("barra-i").style.width = pct + "%";
  $("barra-t").textContent = pct.toFixed(1).replace(".", ",") + "% del camino para que te abrace";
  atualiza($("falta"), s);
}
relogio(); setInterval(relogio, 1000);

/* mapa: o coração vai e volta sozinho */
function km(a, b) {
  const r = x => x * Math.PI / 180, dLa = r(b.lat - a.lat), dLo = r(b.lng - a.lng);
  const h = Math.sin(dLa / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLo / 2) ** 2;
  return Math.round(12742 * Math.asin(Math.sqrt(h)));
}
const total = km(CIDADE_A, CIDADE_B), estrada = total * 1.25;
const hm = h => `~${Math.floor(h)}h${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
$("nomeA").textContent = CIDADE_A.nome; $("nomeB").textContent = CIDADE_B.nome;
$("dist").textContent = `${total} km, Pero mi amor por ti es tan grande que mi corazón siente tu presencia con solo pensar en ti`;
$("t-aviao").textContent = hm(total / 800 + .7); $("t-carro").textContent = hm(estrada / 75);
$("t-pe").textContent = `~${Math.ceil(estrada / 40)} dias`;
const arco = $("arco"), len = arco.getTotalLength(), cor = $("coracao-mapa");
arco.style.strokeDasharray = len;
function vai(t) {
  const p = arco.getPointAtLength(len * t), ja = Math.round(total * t);
  cor.setAttribute("transform", `translate(${p.x} ${p.y})`); arco.style.strokeDashoffset = len * (1 - t);
  $("ja").textContent = ja; $("resta").textContent = total - ja;
}
vai(reduz ? 1 : 0);
if (!reduz) {
  const anda = { v: 0 }, ida = gsap.to(anda, { v: 1, duration: 4.5, ease: "power2.inOut", repeat: -1, yoyo: true, repeatDelay: .8, paused: true, onUpdate: () => vai(anda.v) });
  ScrollTrigger.create({ trigger: "#mapa", start: "top 80%", end: "bottom 10%", onToggle: s => ida.paused(!s.isActive) });
}

/* planos: clique abre uma telinha com o pensamento */
const planos = PLANOS.map(p => typeof p === "string" ? { nome: p, texto: "" } : p);
$("lista-planos").innerHTML = planos.map((p, i) => `<li><button class="plano" data-i="${i}"><span class="co">♡</span><span class="nm">${p.nome}</span><span class="mais">+</span></button></li>`).join("");
const md = $("md"), fechaMd = () => md.classList.remove("on");
document.querySelectorAll(".plano").forEach(b => b.onclick = () => {
  const p = planos[+b.dataset.i]; $("md-t").textContent = p.nome; $("md-p").textContent = p.texto || "Ainda sem texto por aqui.";
  md.classList.add("on"); $("md-x").focus();
});
$("md-x").onclick = fechaMd; md.onclick = e => e.target === md && fechaMd();
addEventListener("keydown", e => e.key === "Escape" && fechaMd());
if (!reduz) gsap.from(".plano", { opacity: 0, x: -40, stagger: .15, duration: .8, clearProps: "all",
  scrollTrigger: { trigger: "#lista-planos", start: "top 80%", once: true } });

/* galeria: cartões com inclinação 3D, brilho e foto ampliada */
const toque = !matchMedia("(hover:hover)").matches;
const img = f => f.foto ? `<div class="img" style="--img:url('${f.foto}')"></div>` : `<div class="img vazio">♡<small>sua foto aqui</small></div>`;
$("galeria").innerHTML = FOTOS.map((f, i) => `<figure><div class="foto" data-i="${i}" tabindex="0" role="button" aria-label="Ampliar: ${f.frase}">${img(f)}<div class="brilho"></div><div class="leg">${f.frase}</div><em class="ampliar">↗</em></div></figure>`).join("");
const lb = $("lb"), abre = i => {
  const f = FOTOS[i], g = $("lb-img");
  g.className = "grande" + (f.foto ? "" : " vazio"); g.style.cssText = f.foto ? `--img:url('${f.foto}')` : "";
  g.innerHTML = f.foto ? "" : "♡<small>sua foto aqui</small>"; $("lb-txt").textContent = f.frase;
  lb.classList.add("on"); $("lb-x").focus();
}, fecha = () => lb.classList.remove("on");
$("lb-x").onclick = fecha; lb.onclick = e => e.target === lb && fecha();
addEventListener("keydown", e => e.key === "Escape" && fecha());
document.querySelectorAll(".foto").forEach(el => {
  el.onclick = () => abre(+el.dataset.i);
  el.onkeydown = e => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), abre(+el.dataset.i));
  if (toque || reduz) return;
  el.addEventListener("pointermove", e => {
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--x", x * 100 + "%"); el.style.setProperty("--y", y * 100 + "%");
    el.style.transform = `rotateX(${(.5 - y) * 10}deg) rotateY(${(x - .5) * 12}deg) scale(1.02)`;
  });
  el.addEventListener("pointerleave", () => el.style.transform = "");
});
if (!reduz) gsap.from(".galeria figure", { opacity: 0, y: 50, stagger: .15, duration: 1, clearProps: "all",
  scrollTrigger: { trigger: "#galeria", start: "top 80%", once: true } });

/* motivos: a resposta nasce como um círculo a partir de onde o mouse entrou */
$("cartoes").innerHTML = MOTIVOS.map(t => `<button class="card"><span class="frente"><i>♥</i></span><span class="verso"><em>${t}</em></span></button>`).join("");
document.querySelectorAll(".card").forEach(c => {
  const ponto = e => { const r = c.getBoundingClientRect(); c.style.setProperty("--x", e.clientX - r.left + "px"); c.style.setProperty("--y", e.clientY - r.top + "px"); };
  c.addEventListener("pointerenter", e => e.pointerType !== "touch" && ponto(e));
  c.addEventListener("pointerleave", e => e.pointerType !== "touch" && ponto(e));
  c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px"); });
  c.onclick = () => toque && c.classList.toggle("on");
});
if (!reduz) gsap.from(".card", { opacity: 0, y: 40, stagger: .08, duration: .8, clearProps: "all",
  scrollTrigger: { trigger: "#cartoes", start: "top 85%", once: true } });

/* playlist */
$("musicas").innerHTML = MUSICAS.map((m, i) => {
  const [titulo, ...artista] = m.nome.split(" — ");
  return `<li class="mus" tabindex="0"><span class="n">${String(i + 1).padStart(2, "0")}</span>${m.foto ? `<span class="capa" style="--img:url('${m.foto}')">` : `<span class="capa vazia"><b>♡</b>`}<span class="tc" aria-hidden="true"><i></i><i></i><i></i><i></i></span></span><div class="info"><b>${titulo}</b><small>${artista.join(" — ")}</small><p>${m.porque}</p></div><span class="fim">${m.arquivo ? `<button class="play" data-i="${i}" aria-label="Tocar ${titulo}">▶</button>` : ""}<span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></span></li>`;
}).join("");
if (!reduz) gsap.from(".mus", { opacity: 0, y: 30, stagger: .12, duration: .8, clearProps: "transform,opacity",
  scrollTrigger: { trigger: "#musicas", start: "top 85%", once: true } });

/* carta: envelope que abre e depois a carta é escrita */
const wrap = $("carta-wrap"), texto = $("texto");
function reserva() { texto.textContent = CARTA; texto.style.minHeight = texto.offsetHeight + "px"; texto.textContent = ""; }
(document.fonts ? document.fonts.ready : Promise.resolve()).then(reserva);
function abrir() {
  if (wrap.classList.contains("aberta")) return;
  wrap.classList.add("aberta");
  if (reduz) { texto.textContent = CARTA; return; }
  setTimeout(() => { let i = 0; (function t() { texto.textContent = CARTA.slice(0, ++i); if (i < CARTA.length) setTimeout(t, 10); })(); }, 1200);
}
$("envelope").onclick = abrir;
$("envelope").onkeydown = e => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), abrir());

/* música de fundo */
const au = $("audio");
let bgPausado = false;   // true quando a música de fundo foi pausada por uma música da playlist
/* tenta começar ao rolar; os navegadores só liberam som depois de um gesto (clique, toque, tecla), então esses também valem */
const gatilhos = ["wheel", "scroll", "touchend", "pointerup", "pointerdown", "mousedown", "click", "keydown"];
function iniciaMusica(e) {
  if (e && e.target && e.target.closest && e.target.closest(".play")) return;   // clique no ▶ da playlist cuida de si mesmo
  au.play().catch(() => {});
}
au.addEventListener("play", () => gatilhos.forEach(g => removeEventListener(g, iniciaMusica)));
gatilhos.forEach(g => addEventListener(g, iniciaMusica, { passive: true }));

/* vida: títulos que entram, cursor com halo, coração a cada clique */
if (!reduz) {
  document.querySelectorAll("section:not(#hero) h2").forEach(el => gsap.from(el, { y: 40, opacity: 0, duration: 1, clearProps: "all",
    scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
  gsap.from(".un", { scale: .6, opacity: 0, stagger: .1, duration: .9, ease: "back.out(1.6)", clearProps: "all",
    scrollTrigger: { trigger: "#contador", start: "top 85%", once: true } });
  addEventListener("pointerdown", e => {
    const h = document.createElement("span"); h.className = "pop"; h.textContent = "♥";
    h.style.left = e.clientX - 10 + "px"; h.style.top = e.clientY - 10 + "px"; document.body.appendChild(h);
    gsap.to(h, { y: -70, x: (Math.random() - .5) * 50, scale: 1.8, opacity: 0, duration: 1, ease: "power2.out", onComplete: () => h.remove() });
  });
  if (matchMedia("(hover:hover)").matches) {
    const halo = document.createElement("div"); halo.id = "halo"; document.body.appendChild(halo);
    addEventListener("pointermove", e => { halo.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; halo.classList.add("v"); }, { passive: true });
    document.addEventListener("pointerover", e => halo.classList.toggle("g", !!e.target.closest("button,a,.foto,.card,[role=button]")));
  }
}

/* tocar as músicas da playlist (e mostrar qual está tocando, inclusive a música de fundo) */
const mp = new Audio(); mp.preload = "none";
let atual = -1;
const mesmo = (arq, src) => !!arq && !!src && new URL(arq, location.href).href === src;
const ehFundo = i => mesmo(MUSICAS[i].arquivo, au.currentSrc || au.src);
function tocandoAgora() {
  if (!mp.paused && atual >= 0) return atual;
  if (!au.paused) return MUSICAS.findIndex((m, i) => ehFundo(i));
  return -1;
}
function atualizaPlaylist() {
  const t = tocandoAgora();
  document.querySelectorAll(".mus").forEach((l, i) => {
    const on = i === t, b = l.querySelector(".play");
    l.classList.toggle("tocando", on);
    if (b) { b.textContent = on ? "❚❚" : "▶"; b.setAttribute("aria-label", on ? "Pausar" : "Tocar"); }
  });
}
document.querySelectorAll(".play").forEach(b => b.onclick = e => {
  e.stopPropagation();
  const i = +b.dataset.i;
  if (ehFundo(i)) {   // é a mesma música que toca ao fundo: só pausa ou retoma ela
    bgPausado = false; mp.pause();
    au.paused ? au.play().catch(() => {}) : au.pause();
    return;
  }
  if (atual === i && !mp.paused) { mp.pause(); return; }
  if (atual !== i) mp.src = MUSICAS[i].arquivo;
  atual = i;
  if (!au.paused) { au.pause(); bgPausado = true; }
  mp.play().catch(() => {});
});
const voltaFundo = () => { if (bgPausado) { bgPausado = false; au.play().catch(() => {}); } };
mp.onplay = au.onplay = au.onpause = atualizaPlaylist;
mp.onpause = () => { atualizaPlaylist(); voltaFundo(); };
mp.onended = () => { atual = -1; atualizaPlaylist(); voltaFundo(); };
mp.onerror = () => { const b = document.querySelector(`.play[data-i="${atual}"]`); if (b) b.style.display = "none"; atual = -1; atualizaPlaylist(); voltaFundo(); };

/* controle de volume (canto superior): abre ao passar o mouse */
const vbox = $("vol"), vbt = $("vol-bt"), vr = $("vol-r");
let volAntes = 10;
function volume(v) {
  v = +v; au.volume = mp.volume = v / 100; vr.value = v;
  vbox.dataset.n = v === 0 ? 0 : v < 50 ? 1 : 2;
  vr.style.setProperty("--p", v + "%");
}
vr.oninput = () => volume(vr.value);
vbt.onclick = e => {
  e.stopPropagation();
  if (toque) { const on = vbox.classList.toggle("on"); vbt.setAttribute("aria-expanded", on); return; }
  if (+vr.value > 0) { volAntes = +vr.value; volume(0); } else volume(volAntes || 100);
};
document.addEventListener("click", e => { if (!vbox.contains(e.target)) { vbox.classList.remove("on"); vbt.setAttribute("aria-expanded", "false"); } });
volume(10);
