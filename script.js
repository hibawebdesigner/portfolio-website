function toggleTheme() {
document.body.classList.toggle("dark");
const btn=
 document.getElementById("themeToggle");
if (btn){
  if
(document.body.classList.contains("dark")){
btn.textContent="🌙";
}else{
    btn.textContent="☀️";
}
}
}
const faders =
document.querySelectorAll('.fade-up');
const observer = new
IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});
faders.forEach((el)=>
observer.observe(el));
const menuToggle =
document.querySelector(".menu-toggle");
const nav = document.querySelector('nav');
if (menuToggle && nav){
menuToggle.addEventListener("click", () => {
nav.classList.toggle('active');
});
}
const navlinks =
document.querySelectorAll("nav a");
navlinks.forEach(link => {
link.addEventListener("click",
() => {
if (nav) {
nav.classList.remove("active");
}
});
});
function toggleLanguages() {
const menu=
document.getElementById("languageMenu");
if(menu.style.display===("block")){
menu.style.display="none";
}
else{
menu.style.display="block";
}
}
function changeLanguage(language){
const languageButton =
document.querySelector(".language-btn");
const labels = {
en:"🌐 EN ▾",
de:"🌐 DE ▾",
fr:"🌐 FR ▾",
it:"🌐 IT ▾",
ar:"🌐 AR ▾"
};
languageButton.textContent =
labels[language];
document.getElementById("languageMenu").style.display="none";
if( language === "ar"){
document.documentElement.dir= "rtl";
document.documentElement.lang = "ar";
}
else{
document.documentElement.dir= "ltr";
document.documentElement.lang = language;
}
const translations = {
en:{
home:"Home",
about:"About Me",
portfolio:"Portfolio",
contact:"Contact",
"download-cv":"Download CV",
"hero-tag":"FRONT-END WEB DESIGNER",
"hero-description":"I create modern, responsive websites with clean code, intuitive user interfaces, and seamless user experiences.",
"explore-projects":"Explore My Projects →",
"contact-me":"Contact Me →",
"frontend-title":"Frontend Developer",
"ui-title":"UI Designer",
"creative-ui":"Creative UI",
"creative-ui-text":"Modern • Clean • Elegant",
"responsive-design":"Desktop • Tablet • Mobile",
"frontend":"Frontend",
"footer-text":"© 2026 Hiba • Front-End Developer",
"about-label":"Get TO KNOW ME",
"about-title":"About Me",
"about-subtitle":"Who I Am & What I Do",
"about-description":" I'm a Front-End Developer passionate about building modern, responsive and user-friendly websites. I enjoy turning ideas into clean and elegant digital experiences using HTML, CSS, and JavaScript.",
"education":"Education",
"education-value":"Electronics and Communications Engineering",
"location":"Location",
"location-value":"Syria",
"experience":" Experience",
"experience-value":"Project-Based Experience",
"passion":"Passion",
"passion-value":"Modern Web Experiences",
"services-title":"WHAT I DO",
"responsive-title":"Responsive Design",
"responsive-text":"Beautiful websites that work smoothly on desktop, tablet and mobile devices.",
"landing-title":"Landing Pages",
"landing-text":"Modern pages that present services and ideas clearly and professionally.",
"portfolio-sites-title":"Business Websites",
"portfolio-sites-text":"Modern websites designed to present brands, services and businesses professionally.",
"clean-code-title":"Clean Code",
"clean-code-text":"Organized HTML, CSS and JavaScript with attention to usability.",
"featured-work":"Featured Work",
"my-projects":"My Projects",
"projects-subtitle":"A selection of responsive websites designed for different brands and services",
"mavi-description":"Luxury fashion website with responsive design, collections and elegant layout.",
"luxora-description":"Modern aesthetic clinic website with booking, treatments and responsive layout.",
"elite-description":"Luxury fitness club website featuring nutrition, body analysis and trainers.",
"view-project":"View Project↗",
"contact-label":"Get In Touch",
"contact-title":"Contact Me",
"contact-description":"Have a project in mind? I'd love to hear about it. Send a message and let's create something great together.",
"email-title":"Email",
"contact-location-value":"Lattakia, Syria",
"availability-title":"Availability",
"availability-text":"Available for freelance work",
"your-name":"Your name",
"your-email":"Your email",
"your-message":"Your message",
"send-message":"Send Message",
"success-message":"✓ Message sent successfully! I'll get back to you soon."
},
de:{
home:"Startseite",
about:"Über mich",
portfolio:"Portfolio",
contact:"Kontakt",
"download-cv":"Lebenslauf herunterladen",
"hero-tag":"FRONT-END WEBDESIGNERIN",
"hero-description":"Ich erstelle moderne, responsive Websites mit sauberem Code und intuitiven Benutzeroberflächen.",
"explore-projects":"Meine Projekte →",
"contact-me":"Kontakt →",
"frontend-title":"Frontend-Entwicklerin",
"ui-title":"UI-Designerin",
"creative-ui":"Kreatives UI-Design",
"creative-ui-text":"Modern • Klar • Elegant",
"responsive-design":"Desktop • Tablet • Mobil",
"frontend":"Frontend",
"footer-text":"© 2026 Hiba • Frontend-Entwicklerin",
"about-label":"LERNEN SIE MICH KENNEN",
"about-title":"Über mich",
"about-subtitle":"Wer ich bin & was ich mache",
"about-description":"Ich bin eine Front-End-Entwicklerin mit Leidenschaft für moderne, responsive und benutzerfreundliche Websites . Ich liebe es, Ideen mit HTML, CSS und JavaScript in klare und elegante digitale Erlebnisse zu verwandeln.",
"education":"Ausbildung",
"education-value":"Elektronik- und Kommunikationstechnik",
"location":"Standort",
"location-value":"Syrien",
"experience":"Erfahrung",
"experience-value":"Projekterfahrung",
"passion":"Leidenschaft",
"passion-value":"Moderne Web-Erlebnisse",
"services-title":"WAS ICH MACHE",
"responsive-title":"Responsives Design",
"responsive-text":"Schöne und funktionale Websites, die auf Desktop, Tablet und Mobilgeräten reibungslos funktionieren.",
"landing-title":"Landing Pages",
"landing-text":"Moderne Seiten, die Dienstleistungen und Ideen klar und professionell präsentieren.",
"portfolio-sites-title":"Unternehmenswebsites",
"portfolio-sites-text":"Moderne Websites zur professionellen Präsentation von Marken, Dienstleistungen und Unternehmen.",
"clean-code-title":"Sauberer Code",
"clean-code-text":"Gut strukturierter HTML-, CSS- und JavaScript-Code mit Fokus auf Benutzerfreundlichkeit.",
"featured-work":"Ausgewählte Arbeiten",
"my-projects":"Meine Projekte",
"projects-subtitle":"Eine Auswahl an responsiven Websites, die für verschiedene Marken und Dienstleistungen entworfen wurden",
"mavi-description":"Luxuriöse Mode-Website mit responsivem Design, Kollektionen und elegantem Layout.",
"luxora-description":"Moderne Website für eine ästhetische Klinik mit Terminbuchung, Behandlungen und responsivem Design.",
"elite-description":"Luxuriöse Fitnessstudio-Website mit Ernährung, Körperanalyse und Trainern.",
"view-project":"Projekt ansehen↗",
"contact-label":"Kontaktieren Sie mich",
"contact-title":"Kontaktieren Sie mich",
"contact-description":"Haben Sie ein Projekt im Sinn? Ich würde gerne davon hören. Senden Sie eine Nachricht und lassen Sie uns gemeinsam etwas Großartiges schaffen.",
"email-title":"E-mail",
"contact-location-value":"Lattakia, Syrien",
"availability-title":"Verfügbarkeit",
"availability-text":"Verfügbar für Freelance-Projekte",
"your-name":"Ihr Name",
"your-email":"Ihre e-mail",
"your-message":"Ihre Nachricht",
"send-message":"Nachricht senden",
"success-message":"✓ Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen."
},
fr:{
home:"Accueil",
about:"À propos",
portfolio:"Portfolio",
contact:"Contact",
"download-cv":"Télécharger le CV",
"hero-tag":"DESIGNER WEB FRONT-END",
"hero-description":"Je crée des sites web modernes et adaptatifs avec un code propre et des interfaces intuitives.",
"explore-projects":"Voir mes projets →",
"contact-me":"Me contacter →",
"frontend-title":"Développeuse Front-End",
"ui-title":"Designer UI",
"creative-ui":"UI Créative",
"creative-ui-text":"Moderne • Épurée • Élégante",
"responsive-design":"Ordinateur • Tablette • Mobile",
"frontend":"Front-End",
"footer-text":"© 2026 Hiba • Développeuse front-end",
"about-label":"FAITES MA CONNAISSANCE",
"about-title":"À propos de moi",
"about-subtitle":"Qui je suis et ce que je fais",
"about-description":"Je suis une développeuse front-end passionnée par la création de sites web modernes, adaptatifs et faciles à utiliser. J'aime transformer des idées en expériences numériques élégantes et bien structurées en utilisant HTML, CSS et JavaScript.",
"education":"Formation",
"education-value":"Génie informatique",
"location":"Localisation",
"location-value":"Syrie",
"experience":"Expérience",
"experience-value":"Expérience basée sur des projets",
"passion":"Passion",
"passion-value":"Expériences web modernes",
"services-title":"CE QUE JE FAIS",
"responsive-title":"Design adaptatif",
"responsive-text":"Des sites web beaux et fonctionnels qui s'adaptent parfaitement aux ordinateurs de bureau, aux tablettes et aux appareils mobiles.",
"landing-title":" Pages de destination",
"landing-text":"Des pages modernes qui présentent les services et les idées de manière claire et professionnelle.",
"portfolio-sites-title":"Sites web professionnels",
"portfolio-sites-text":"Des sites modernes pour présenter professionnellement les marques, les services et les entreprises.",
"clean-code-title":" Code propre",
"clean-code-text":"HTML, CSS et JavaScript bien organisés avec une attention particulière à l'expérience utilisateur.",
"featured-work":"Projets en vedette",
"my-projects":"Mes projets",
"projects-subtitle":"Une sélection de sites web adaptatifs conçus pour différentes marques et services",
"mavi-description":"Site web de mode de luxe avec un design adaptatif, des collections et une mise en page élégante.",
"luxora-description":"Site web moderne pour une clinique esthétique avec prise de rendez-vous, traitements et design adaptatif.",
"elite-description":"Site web d'un club de fitness haut de gamme avec nutrition, analyse corporelle et entraîneurs.",
"view-project":"Voir le projet↗",
"contact-label":"Contactez-moi",
"contact-title":"Contactez-moi",
"contact-description":"Avez-vous un projet en tête ? J'aimerais beaucoup en entendre parler. Envoyez un message et créons quelque chose d'exceptionnel ensemble.",
"email-title":"E-mail",
"contact-location-value":"Lattakia, Syrie",
"availability-title":"Disponibilité",
"availability-text":"Disponible pour des missions freelance",
"your-name":"Votre nom",
"your-email":"Votre e-mail",
"your-message":"Votre message",
"send-message":"Envoyer le message",
"success-message":"✓ Message envoyé avec succès ! Je vous répondrai bientôt."
},
it:{
home:"Home",
about:"Chi sono",
portfolio:"Portfolio",
contact:"Contatti",
"download-cv":"Scarica CV",
"hero-tag":"WEB DESIGNER FRONT-END",
"hero-description":"Creo siti web moderni e adattivi con codice pulito e interfacce intuitive.",
"explore-projects":"I miei progetti →",
"contact-me":"Contattami →",
"frontend-title":"Sviluppatrice Front-End",
"ui-title":"Designer UI",
"creative-ui":"UI Creativa",
"creative-ui-text":"Moderno • Pulito • Elegante",
"responsive-design":"Desktop • Tablet • Mobile",
"frontend":"Front-End",
"footer-text":" © 2026 Hiba • Sviluppatrice front-end ",
"about-label":"SCOPRI CHI SONO",
"about-title":"Chi sono",
"about-subtitle":"Chi sono e cosa faccio",
"about-description":"Sono una sviluppatrice front-end appassionata di siti web moderni, responsive e facili da usare. Amo trasformare le idee in esperienze digitali eleganti e ben strutturate utilizzando HTML, CSS e JavaScript.",
"education":"Formazione",
"education-value":"Ingegneria informatica",
"location":"Località",
"location-value":"Siria",
"experience":"Esperienza",
"experience-value":"Esperienza basata su progetti",
"passion":"Passione",
"passion-value":"Esperienze web moderne",
"services-title":"COSA FACCIO",
"responsive-title":"Design responsive",
"responsive-text":"Siti web belli e funzionali che funzionano perfettamente su desktop, tablet e dispositivi mobili.",
"landing-title":"Pagine di destinazione",
"landing-text":"Pagine moderne che presentano servizi e idee in modo chiaro e professionale.",
"portfolio-sites-title":"Siti web aziendali",
"portfolio-sites-text":"Siti web moderni per presentare professionalmente brand, servizi e aziende.",
"clean-code-title":"Codice pulito",
"clean-code-text":"HTML, CSS e JavaScript ben organizzati, con particolare attenzione all'usabilità.",
"featured-work":"Lavori in evidenza",
"my-projects":"I miei progetti",
"projects-subtitle":"Una selezione di siti web adattivi progettati per diversi marchi e servizi",
"mavi-description":"Sito web di moda di lusso con design adattivo, collezioni e layout elegante.",
"luxora-description":"Sito web moderno per una clinica estetica con prenotazioni di appuntamenti, trattamenti e design adattivo.",
"elite-description":"Sito web di un club di fitness di lusso con nutrizione, analisi corporea e allenatori.",
"view-project":"Visualizza il progetto↗",
"contact-label":"Contattami",
"contact-title":"Contattami",
"contact-description":"Hai un progetto in mente? Mi piacerebbe saperne di più. Invia un messaggio e creiamo qualcosa di straordinario insieme.",
"email-title":"E-mail",
"contact-location-value":"Lattakia, Siria",
"availability-title":"Disponibilità",
"availability-text":"Disponibile per progetti freelance",
"your-name":"Il tuo nome",
"your-email":"La tua e-mail",
"your-message":"Il tuo messaggio",
"send-message":"Invia messaggio",
"success-message":"✓ Messaggio inviato con successo! Ti risponderò presto."
},
ar:{
home:"الرئيسية",
about:"من أنا",
portfolio:"أعمالي",
contact:"تواصل معي",
"download-cv":"تحميل السيرة الذاتية",
"hero-tag":" مطورة واجهات أمامية ومصممة واجهات المستخدم",
"hero-description":".أصمم وأطوّر مواقع حديثة ومتجاوبة بكود منظّم وواجهات سهلة الاستخدام",
"explore-projects":"استعرض مشاريعي →",
"contact-me":"اتصل بي →",
"frontend-title":"مطورة واجهات أمامية",
"ui-title":"مصممة واجهات المستخدم",
"creative-ui":"واجهة مستخدم إبداعية",
"creative-ui-text":"حديثة • نظيفة • أنيقة",
"responsive-design":"كمبيوتر •جهاز لوحي  • هاتف",
"frontend":"تطوير الواجهات",
"footer-text":" © 2026 Hiba • مطوّرة واجهات أمامية ",
"about-label":"تعرّف عليّ",
"about-title":"من أنا",
"about-subtitle":"من أنا وماذا أفعل",
"about-description":"أنا مطوّرة واجهات أمامية شغوفة بإنشاء مواقع ويب حديثة ومتجاوبة وسهلة الاستخدام. أحب تحويل الأفكار إلى تجارب رقمية أنيقة ومُنظّمة باستخدام HTML و CSS و JavaScript.",
"education":"التعليم",
"education-value":"هندسة الحاسوب",
"location":"الموقع",
"location-value":"سوريا",
"experience":"الخبرة",
"experience-value":"خبرة قائمة على المشاريع",
"passion":"الشغف",
"passion-value":"تجارب الويب الحديثة",
"services-title":"ما أفعله",
"responsive-title":"تصميم متجاوب",
"responsive-text":"مواقع ويب جميلة وفعالة تعمل بسلاسة على أجهزة الكمبيوتر واللابتوبات والهواتف الذكية.",
"landing-title":"صفحات تعريفية",
"landing-text":"صفحات حديثة تقدم الخدمات والأفكار بطريقة واضحة ومُحترفة.",
"portfolio-sites-title":"مواقع أعمال",
"portfolio-sites-text":"مواقع حديثة مصممة لعرض العلامات التجارية والخدمات والأعمال بشكل احترافي.",
"clean-code-title":"كود منظم",
"clean-code-text":"كود HTML و CSS و JavaScript منظّم مع التركيز على سهولة الاستخدام.",
"featured-work":"أعمال مميزة",
"my-projects":"مشاريعي",
"projects-subtitle":"مجموعة من المواقع المتجاوبة المصممة لمختلف العلامات التجارية والخدمات.",
"mavi-description":"موقع أزياء فاخر بتصميم متجاوب ومجموعات أنيقة وتخطيط عصري.",
"luxora-description":"موقع حديث لعيادة تجميل يضم حجز المواعيد والعلاجات بتصميم أنيق ومتجاوب .",
"elite-description":"موقع فاخر لنادي لياقة بدنية يضم التغذية وتحليل الجسم والمدربين.",
"view-project":"عرض المشروع↗",
"contact-label":"لنتواصل",
"contact-title":"تواصل معي",
"contact-description":"هل لديك مشروع في ذهنك؟ أحب أن أسمع عنه. أرسل رسالة ولننشئ شيئًا رائعًا معًا.",
"email-title":"البريد الإلكتروني",
"contact-location-value":"اللاذقية، سوريا",
"availability-title":"التوافر",
"availability-text":"متاحة لمشاريع العمل الحر",
"your-name":"اسمك",
"your-email":"بريدك الإلكتروني",
"your-message":"رسالتك",
"send-message":"إرسال الرسالة",
"success-message":"✓ تم إرسال الرسالة بنجاح! سأرد عليك قريبًا."
}
};
document.querySelectorAll("[data-i18n]").forEach((element) => {
const key = element.getAttribute("data-i18n");
if (translations[language][key]) {
element.textContent = translations[language][key];
}
});
document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
const key = element.getAttribute("data-i18n-placeholder");
if (translations[language] && translations[language][key]) {
element.placeholder= translations[language][key];
}
});
localStorage.setItem("language",language);
}
document.addEventListener("DOMContentLoaded",() =>{
const savedLanguage =
localStorage.getItem("language") || "en";
changeLanguage(savedLanguage);
});
document.addEventListener("click" , function(event){
const switcher =
document.querySelector(" .language-switcher");
if(switcher && ! 
switcher.contains(event.target)) {
document.getElementById("languageMenu").classList.remove("show");
}
});
function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("active");
}
