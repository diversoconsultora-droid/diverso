'use strict';

// The page works without third-party JavaScript libraries.
const english = {
  skip:'Skip to content',navSolutions:'Solutions',navApproach:'Our approach',navExperience:'Experience',navAbout:'About us',navResources:'Resources',navCta:"Let's talk",
  heroEyebrow:'Education consulting · Inclusion · E-learning',heroTitle1:'We design education',heroTitle2:'that includes everyone.',
  heroLead:'We turn educational challenges into accessible, innovative, relevant learning experiences. We bring pedagogy, technology and inclusion together so more people can learn.',
  heroPrimary:'Tell us about your project',heroSecondary:'Explore solutions',heroNote:'For educational institutions, organizations and businesses.',
  heroArt1:'Different ways.',heroArt2:'Equal opportunities.',heroBottom:'We believe in education that is more human, accessible and achievable.',
  solutionsKicker:'WHAT WE DO',solutionsTitle:'Solutions that transform how people learn.',solutionsLead:'From the initial idea to implementation. We help you design, build and improve meaningful educational projects.',
  service1Title:'Inclusive education and accessibility',service1Text:'We create strategies, materials and experiences that embrace learner diversity and help remove barriers to learning.',service1Tag:'Inclusion · UDL · Accessibility',
  service2Title:'Training and educator development',service2Text:'We create workshops, training programs and advisory services to strengthen teaching, digital and inclusive practices.',service2Tag:'Training · Guidance',
  service3Title:'Instructional design and e-learning',service3Text:'We turn content into engaging online courses with a clear educational structure, interactive resources and assessments.',service3Tag:'Courses · Resources · Assessment',
  service4Title:'Learning platforms and environments',service4Text:'We support the implementation and improvement of e-learning ecosystems, from content organization to user experience.',service4Tag:'LMS · Digital experience',
  service5Title:'AI for education',service5Text:'We explore responsible AI solutions to create resources, improve processes and enrich teaching and learning.',service5Tag:'Innovation · Educational AI',
  service6Title:'Educational consulting and projects',service6Text:'We analyze needs, develop proposals and support educational initiatives across the public and private sectors.',service6Tag:'Strategy · Implementation',
  servicesFooter:'Does your project need something different? Let’s design it together.',servicesCta:'Tell us about your challenge',
  methodKicker:'HOW WE WORK',methodTitle1:"We don't believe in one-size-fits-all solutions.",methodTitle2:'We believe in people.',methodLead:'Every project starts in a real context. That is why we listen first and design next.',
  step1Title:'We listen',step1Text:'We understand your audience, goals and challenges.',step2Title:'We design',step2Text:'We develop a relevant educational and digital approach.',
  step3Title:'We implement',step3Text:'We turn ideas into concrete experiences and resources.',step4Title:'We support',step4Text:'We review what we learn and suggest improvements.',
  methodBottom:'Inclusion is not an extra feature. It is part of how we think about every project from the beginning.',
  experienceKicker:'OUR BACKGROUND',experienceTitle:'Experience that drives new ideas.',experienceLead:'Our work brings together professional experience in educational and digital projects with institutions and organizations from different sectors.',
  experienceDisclaimer:'References from the team’s professional background and previous collaborations. These are not necessarily current Diverso clients.',
  logosCarouselIntro:'Institutions and organizations in our professional background',logosCarouselNote:'Logos move one after another. Hover to pause.',
  logosShowcaseLabel:'Institutions and organizations in our professional background',logosShowcaseExpand:'Enlarge logos ↗',logosShowcaseHint:'Tap “Enlarge logos” to view them in more detail.',logosModalTitle:'Institution and organization logos',
  portraitLabel:'People who inspire education.',aboutKicker:'THE PURPOSE BEHIND DIVERSO',aboutTitle:'Educating for diversity means designing for the future.',
  aboutText:'Diverso began with a conviction: technology and innovation matter most when they help education reach more people, more effectively. We connect strategic vision, pedagogical design and digital tools to advance truly inclusive learning experiences.',
  aboutQuote:'Diversity is not a barrier to learning; it is the starting point for creating better opportunities.',aboutRole:'Founder · Educational project management and innovation',
  resourcesKicker:'IDEAS WE SHARE',resourcesTitle:'Learning also means exploring.',resourcesLead:'Discover our initiatives, content and tools to help build more inclusive education.',
  videoArtFoot:'OUR STORY',videoMeta:'VIDEO · YOUTUBE',videoTitle:'How Diverso began',videoText:'The story and ideas behind the way we think about education.',videoLink:'Watch on YouTube',
  aiBubble:'How can I make my class more inclusive?',aiMeta:'TOOL · EDUCATIONAL AI',aiTitle:'Meet Diversito',aiText:'Explore our assistant for initial ideas and guidance on inclusive education.',aiLink:'Explore Diversito',
  contactKicker:'YOUR IDEA COULD BE THE BEGINNING',contactTitle:'Let’s make learning possible for more people.',contactLead:'Tell us what you need. We can help turn an idea, challenge or project into a meaningful learning experience.',contactCta:'Message us on WhatsApp',
  footerTagline:'Inclusive education. Innovation with purpose.',footerRights:'All rights reserved.',backToTop:'Back to top',helpButton:'Need guidance?',
  assistantKicker:'SERVICE GUIDANCE',assistantTitle:'Hello! How can we help?',assistantIntro:'Tell us what you need. Choose an option for some initial guidance.',
  optInclusion:'I want to make my institution more inclusive',optTraining:'I need training for educators or teams',optCourse:'I need to create an online course',
  optPlatform:'I want to implement an e-learning platform',optAi:'I am interested in AI for education',optProject:'I need a proposal for my organization',
  assistantWa:'Chat on WhatsApp',assistantReset:'Choose another option',assistantDisclaimer:'This guide provides predefined replies, not real-time support.'
};

const answers = {
  es: {
    inclusion:'Podemos acompañarte en el diagnóstico de barreras de aprendizaje, el diseño de estrategias inclusivas y la adaptación de experiencias y materiales. Cuéntanos qué tipo de institución representas.',
    training:'Diseñamos talleres, programas y asesorías para docentes y equipos, con objetivos definidos y actividades aplicables a su contexto. Podemos conversar sobre el público y los temas prioritarios.',
    course:'Desarrollamos la estructura pedagógica, el diseño instruccional y los recursos de cursos e-learning. Para orientarte mejor, cuéntanos el tema, el público y el plazo estimado.',
    platform:'Te ayudamos a organizar y mejorar tu entorno virtual de aprendizaje, considerando contenidos, experiencia de usuario y necesidades del equipo. Cuéntanos qué plataforma utilizas o deseas implementar.',
    ai:'Te ayudamos a explorar usos educativos de la IA con criterios pedagógicos, de accesibilidad y responsabilidad. También puedes conocer Diversito en la sección Recursos.',
    project:'Podemos preparar una propuesta ajustada a los objetivos de tu institución u organización. Escríbenos con una breve descripción del proyecto y coordinamos los siguientes pasos.'
  },
  en: {
    inclusion:'We can help you identify learning barriers, design inclusive strategies and adapt learning experiences and materials. Tell us what type of institution you represent.',
    training:'We design workshops, programs and advisory services for educators and teams, with clear objectives and practical activities. Tell us about your audience and priority topics.',
    course:'We develop the learning structure, instructional design and resources for e-learning courses. Tell us the topic, target audience and estimated timeline.',
    platform:'We can help organize and improve your learning environment, considering content, user experience and team needs. Tell us which platform you use or plan to implement.',
    ai:'We can explore educational AI with pedagogical, accessibility and responsible-use considerations. You can also discover Diversito in the Resources section.',
    project:'We can put together a proposal tailored to your institution or organization. Share a brief project description and we can discuss next steps.'
  }
};

const translatable = [...document.querySelectorAll('[data-i18n]')];
const originals = new Map(translatable.map(el=>[el,el.textContent]));
const languages = [...document.querySelectorAll('.lang-btn')];
const waLinks = [...document.querySelectorAll('a[data-whatsapp]')];
waLinks.forEach(a=>a.dataset.originalHref=a.getAttribute('href'));
const optionButtons = [...document.querySelectorAll('[data-topic]')];
const helpOpen = document.getElementById('assistant-open');
const dialog = document.getElementById('assistant-dialog');
const helpClose = document.getElementById('assistant-close');
const backdrop = document.getElementById('assistant-backdrop');
const optionsBox = document.getElementById('assistant-options');
const answerBox = document.getElementById('assistant-response');
const selectedQuestion = document.getElementById('assistant-selected');
const answerText = document.getElementById('assistant-answer');
const waAnswer = document.getElementById('assistant-wa');
const resetButton = document.getElementById('assistant-reset');
const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('main-nav');
let currentLang='es';
let selectedTopic=null;

function whatsappUrl(message){return 'https://wa.me/51953867652?text='+encodeURIComponent(message);}
function renderAnswer(topic){
  const btn=optionButtons.find(el=>el.dataset.topic===topic);
  if(!btn)return;
  selectedQuestion.textContent=btn.textContent;
  answerText.textContent=answers[currentLang][topic];
  const prefix=currentLang==='es'?'Hola Diverso, me interesa: ':'Hello Diverso, I am interested in: ';
  waAnswer.href=whatsappUrl(prefix+btn.textContent);
  optionsBox.hidden=true;
  answerBox.hidden=false;
}
function changeLanguage(lang){
  if(lang!=='es'&&lang!=='en')return;
  currentLang=lang;
  document.documentElement.lang=lang;
  translatable.forEach(el=>{const key=el.dataset.i18n;el.textContent=lang==='en'?(english[key]??originals.get(el)):originals.get(el);});
  languages.forEach(el=>{const active=el.dataset.lang===lang;el.classList.toggle('is-active',active);el.setAttribute('aria-pressed',String(active));});
  document.title=lang==='es'?'Diverso | Consultoría en educación inclusiva y e-learning':'Diverso | Inclusive education and e-learning consulting';
  document.querySelector('meta[name="description"]').content=lang==='es'?'Diverso es una consultora educativa especializada en educación inclusiva, e-learning, diseño instruccional, formación y soluciones digitales con IA.':'Diverso is an educational consultancy specializing in inclusive education, e-learning, instructional design, training and digital solutions with AI.';
  menuButton.setAttribute('aria-label',lang==='es'?'Abrir menú':'Open menu');
  helpClose.setAttribute('aria-label',lang==='es'?'Cerrar asistente':'Close assistant');
  waLinks.forEach(a=>{a.href=lang==='es'?a.dataset.originalHref:whatsappUrl('Hello Diverso, I would like to discuss an educational project.');});
  if(selectedTopic)renderAnswer(selectedTopic);
}
languages.forEach(btn=>btn.addEventListener('click',()=>changeLanguage(btn.dataset.lang)));

document.getElementById('year').textContent=new Date().getFullYear();
optionButtons.forEach(btn=>btn.addEventListener('click',()=>{selectedTopic=btn.dataset.topic;renderAnswer(selectedTopic);}));
resetButton.addEventListener('click',()=>{selectedTopic=null;answerBox.hidden=true;optionsBox.hidden=false;optionButtons[0].focus();});

function openDialog(){
  dialog.hidden=false;backdrop.hidden=false;
  helpOpen.setAttribute('aria-expanded','true');
  document.body.style.overflow='hidden';
  helpClose.focus();
}
function closeDialog(){
  if(dialog.hidden)return;
  dialog.hidden=true;backdrop.hidden=true;
  helpOpen.setAttribute('aria-expanded','false');
  document.body.style.overflow='';
  helpOpen.focus();
}
helpOpen.addEventListener('click',()=>dialog.hidden?openDialog():closeDialog());
helpClose.addEventListener('click',closeDialog);
backdrop.addEventListener('click',closeDialog);

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(!dialog.hidden){closeDialog();return;}
    if(menu.classList.contains('is-open'))closeMenu();
  }
  if(e.key==='Tab'&&!dialog.hidden){
    const focusable=[...dialog.querySelectorAll('a[href],button:not([disabled])')].filter(el=>el.getClientRects().length>0);
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});
function closeMenu(){menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu();});

