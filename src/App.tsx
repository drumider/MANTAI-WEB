import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Code2, Smartphone, Megaphone, Settings, Mail, Phone, Globe, ChevronRight, Instagram, TrendingUp, Sparkles, X, Check, ArrowRight, Clock, MessageSquare, Calendar, Users } from 'lucide-react';

// Country code configuration
interface CountryInfo {
  code: string;
  name: { es: string; en: string };
  flag: string;
  dial: string;
}

const countries: CountryInfo[] = [
  { code: 'CR', name: { es: 'Costa Rica', en: 'Costa Rica' }, flag: '🇨🇷', dial: '+506' },
  { code: 'US', name: { es: 'Estados Unidos', en: 'United States' }, flag: '🇺🇸', dial: '+1' },
  { code: 'MX', name: { es: 'México', en: 'Mexico' }, flag: '🇲🇽', dial: '+52' },
  { code: 'ES', name: { es: 'España', en: 'Spain' }, flag: '🇪🇸', dial: '+34' },
  { code: 'CO', name: { es: 'Colombia', en: 'Colombia' }, flag: '🇨🇴', dial: '+57' },
  { code: 'AR', name: { es: 'Argentina', en: 'Argentina' }, flag: '🇦🇷', dial: '+54' },
  { code: 'CL', name: { es: 'Chile', en: 'Chile' }, flag: '🇨🇱', dial: '+56' },
  { code: 'PE', name: { es: 'Perú', en: 'Peru' }, flag: '🇵🇪', dial: '+51' },
  { code: 'VE', name: { es: 'Venezuela', en: 'Venezuela' }, flag: '🇻🇪', dial: '+58' },
  { code: 'GT', name: { es: 'Guatemala', en: 'Guatemala' }, flag: '🇬🇹', dial: '+502' },
  { code: 'EC', name: { es: 'Ecuador', en: 'Ecuador' }, flag: '🇪🇨', dial: '+593' },
  { code: 'BO', name: { es: 'Bolivia', en: 'Bolivia' }, flag: '🇧🇴', dial: '+591' },
  { code: 'DO', name: { es: 'República Dominicana', en: 'Dominican Republic' }, flag: '🇩🇴', dial: '+1' },
  { code: 'HN', name: { es: 'Honduras', en: 'Honduras' }, flag: '🇭🇳', dial: '+504' },
  { code: 'PY', name: { es: 'Paraguay', en: 'Paraguay' }, flag: '🇵🇾', dial: '+595' },
  { code: 'SV', name: { es: 'El Salvador', en: 'El Salvador' }, flag: '🇸🇻', dial: '+503' },
  { code: 'NI', name: { es: 'Nicaragua', en: 'Nicaragua' }, flag: '🇳🇮', dial: '+505' },
  { code: 'UY', name: { es: 'Uruguay', en: 'Uruguay' }, flag: '🇺🇾', dial: '+598' },
  { code: 'PA', name: { es: 'Panamá', en: 'Panama' }, flag: '🇵🇦', dial: '+507' },
  { code: 'PR', name: { es: 'Puerto Rico', en: 'Puerto Rico' }, flag: '🇵🇷', dial: '+1' },
  { code: 'BR', name: { es: 'Brasil', en: 'Brazil' }, flag: '🇧🇷', dial: '+55' },
  { code: 'CA', name: { es: 'Canadá', en: 'Canada' }, flag: '🇨🇦', dial: '+1' },
  { code: 'GB', name: { es: 'Reino Unido', en: 'United Kingdom' }, flag: '🇬🇧', dial: '+44' },
  { code: 'DE', name: { es: 'Alemania', en: 'Germany' }, flag: '🇩🇪', dial: '+49' },
  { code: 'FR', name: { es: 'Francia', en: 'France' }, flag: '🇫🇷', dial: '+33' },
  { code: 'IT', name: { es: 'Italia', en: 'Italy' }, flag: '🇮🇹', dial: '+39' },
  { code: 'PT', name: { es: 'Portugal', en: 'Portugal' }, flag: '🇵🇹', dial: '+351' },
  { code: 'JP', name: { es: 'Japón', en: 'Japan' }, flag: '🇯🇵', dial: '+81' },
  { code: 'CN', name: { es: 'China', en: 'China' }, flag: '🇨🇳', dial: '+86' },
  { code: 'IN', name: { es: 'India', en: 'India' }, flag: '🇮🇳', dial: '+91' },
  { code: 'AU', name: { es: 'Australia', en: 'Australia' }, flag: '🇦🇺', dial: '+61' },
];

const translations = {
  es: {
    navServices: "Servicios",
    navAgency: "La Agencia",
    navQuote: "Cotizar Proyecto",
    salesBadge: "Marketing digital enfocado a ventas",
    mainHeading1: "Creamos experiencias",
    mainHeading2: "digitales que",
    mainHeading3: "impulsan",
    mainHeading4: "tu negocio.",
    heroSubtitle: "Somos Mantai, una agencia especializada en diseño web, desarrollo a medida y estrategias digitales diseñadas para resultados reales.",
    heroCTA: "Agenda una llamada",
    sec1Badge: "Nuestra Metodología de Alto Rendimiento",
    sec1Title: "¿Cómo ayudamos a que tu negocio crezca de verdad?",
    sec1Desc: "No solo hacemos páginas web. Creamos un sistema digital autónomo que atrae clientes de redes sociales, genera reservas o citas y automatiza tus ventas las 24 horas del día.",
    diagBadge: "Diagnóstico Actual",
    diagTitle: "Esto es lo que frena a la mayoría de negocios locales hoy",
    probs: [
      {
        title: "Mesas vacías o días de baja afluencia",
        desc: "El negocio suele llenarse solo los fines de semana. De lunes a jueves, los recursos y tu equipo están listos pero los clientes no llegan.",
        badge: "Flujo Inconsistente"
      },
      {
        title: "Invisibles en Instagram o TikTok",
        desc: "Sin presencia activa con Reels o videos atractivos, tus competidores capturan la atención de clientes que ni saben que tu local existe.",
        badge: "Bajo Alcance"
      },
      {
        title: "Sin reservas ni citas en línea",
        desc: "Los clientes potenciales te buscan en Google, pero no encuentran una plataforma para agendar directamente. Terminan yéndose con quien sí la tiene.",
        badge: "Venta Perdida"
      },
      {
        title: "Dependencia total del voz a voz",
        desc: "El boca a boca es excelente, pero tiene un techo natural. Sin un acelerador digital, el crecimiento de tu marca se estanca por completo.",
        badge: "Sin Escalabilidad"
      }
    ],
    pivotBadge: "El Cambio Estratégico",
    pivotTitle: "Cómo los negocios top están multiplicando sus clientes hoy",
    pivotSubtitle: "La ventaja competitiva de la tecnología de vanguardia implementada por Mantai.",
    solutions: [
      {
        title: "Contenido Viral con IA",
        desc: "Reels de platos, ambiente, servicios y personal generados bajo frameworks de alto engagement que capturan vistas rápidamente. Sin agencias caras, sin necesidad de videógrafos permanentes.",
        cta: "Quiero implementarlo"
      },
      {
        title: "Reservas directas de Redes",
        desc: "Una página web de alta conversión conectada directamente con tu Instagram, TikTok y WhatsApp. Tus seguidores se convierten en comensales recurrentes en solo un par de clics y sin intermediarios.",
        cta: "Quiero implementarlo"
      },
      {
        title: "Embudos automatizados 24/7",
        desc: "Asistentes virtuales e inteligentes en WhatsApp y Mensajería Directa que confirman citas, responden preguntas frecuentes, califican leads y capturan reservas automáticamente, permitiendo que te enfoques en brindar un servicio estelar.",
        cta: "Quiero implementarlo"
      }
    ],
    flowBadge: "El Proceso del Sistema",
    flowTitle: "De extraño a cliente ideal en 6 pasos automatizados",
    flowSteps: [
      { num: "01", title: "Ve un Reel o Video", desc: "Un plato exquisito, tu ambiente impecable o una promoción irresistible detiene su scroll." },
      { num: "02", title: "Visita la Web", desc: "El usuario motivado da clic en tu enlace de biografía e ingresa a una web ultrarrápida." },
      { num: "03", title: "Inicia WhatsApp", desc: "Da clic para chatear o reservar directamente, iniciando un canal privado de contacto." },
      { num: "04", title: "Bot califica", desc: "El asistente de IA responde en 3 segundos, confirma disponibilidad y califica los datos." },
      { num: "05", title: "Disfruta y asiste", desc: "El comensal asiste a su cita. Tu mesa o agenda está llena, y tu equipo ejecuta un gran servicio." },
      { num: "06", title: "Fideliza y vuelve", desc: "Enviamos seguimiento pos-visita para obtener reseñas de 5 estrellas en Maps y lograr que regresen." }
    ],
    roadmapBadge: "Cronograma de Trabajo",
    roadmapTitle: "Tu camino hacia el crecimiento en los próximos 90 días",
    roadmapPlans: [
      {
        phase: "Mes 01",
        badge: "Fundación y Estructuración",
        points: [
          "Auditoría profunda de tu presencia digital actual.",
          "Diseño y lanzamiento de tu nueva página web moderna.",
          "Configuración del sistema interactivo de reservas en línea.",
          "Personalización del bot de WhatsApp autónomo para tu marca.",
          "Producción y programación de los primeros 12 Reels de alto impacto.",
          "Optimización completa de tu ficha de Google Maps para SEO local."
        ],
        cta: "Agendar mi fase de inicio"
      },
      {
        phase: "Mes 02",
        badge: "Tracción y Automatización",
        points: [
          "Saturación de contenido viral escalado en tus redes.",
          "Llegada de las primeras reservas online automáticas.",
          "Lanzamiento de campañas exclusivas para días de baja afluencia.",
          "Activación del embudo automatizado para eventos o fechas especiales.",
          "Ajuste y optimización de flujos con comportamiento de usuarios reales.",
          "Entrega de reportes semanales con analíticas claras."
        ],
        cta: "Agendar mi fase de inicio"
      },
      {
        phase: "Mes 03",
        badge: "Escalabilidad y Consolidación",
        points: [
          "Sistema digital completo operando de forma 100% autónoma.",
          "Contenido evergreen en piloto automático generando prospectos constantes.",
          "Ingresos consistentes sistematizados de lunes a viernes.",
          "Desarrollo de base de datos activa para fidelización por correo/WhatsApp.",
          "Evaluación detallada de objetivos alcanzados contra nuestra garantía.",
          "Planteamiento del plan de expansión estratégica para el próximo trimestre."
        ],
        cta: "Agendar mi fase de inicio"
      }
    ],
    allIncBadge: "El Paquete Todo Incluido",
    allIncTitle: "Todo lo que está incluido en tu plan de 90 días",
    allIncSubtitle: "No tienes que contratar agencias separadas, fotógrafos ni programadores. En Mantai nos encargamos de todo de inicio a fin.",
    features: [
      { title: "Página Web Profesional", desc: "Un portal moderno optimizado para celulares y motores de búsqueda, con entrega ágil en 30 días.", icon: <Globe className="w-5 h-5 text-brand-blue" /> },
      { title: "Sistema de Reservas Activo", desc: "Software intuitivo integrado a la web para agendar citas o mesas con recordatorios SMS o email.", icon: <Calendar className="w-5 h-5 text-brand-blue" /> },
      { title: "12 Reels o Videos al Mes", desc: "Edición profesional y guiones diseñados para retener la atención del usuario en redes.", icon: <Instagram className="w-5 h-5 text-brand-blue" /> },
      { title: "Estrategia de Contenido con IA", desc: "Calendarización automatizada con inteligencia artificial para acelerar ideas virales.", icon: <Sparkles className="w-5 h-5 text-brand-blue" /> },
      { title: "Bot de WhatsApp 24/7", desc: "Contestación autónoma instantánea para dudas, confirmaciones e integraciones CRM.", icon: <MessageSquare className="w-5 h-5 text-brand-blue" /> },
      { title: "Embudo de Ventas Completo", desc: "Sistematización de clics a ventas, guiando prospectos fríos en compradores leales.", icon: <Megaphone className="w-5 h-5 text-brand-blue" /> },
      { title: "Reportes de Resultados", desc: "Cuadros de mando semanales que muestran de dónde provienen tus llamadas, clics y clientes.", icon: <TrendingUp className="w-5 h-5 text-brand-blue" /> },
      { title: "Soporte Directo Cara a Cara", desc: "Grupo exclusivo en WhatsApp para resolver y pivotar cambios técnicos con tiempos récord.", icon: <Users className="w-5 h-5 text-brand-blue" /> }
    ],
    customStrategyTitle: "Diseñamos tu estrategia a medida",
    customStrategyDesc: "Desde integraciones customizadas hasta aceleración de pauta publicitaria. Diseñamos un plan adaptado exclusivamente para tus metas.",
    customStrategyCTA: "Hablemos hoy",
    teamTitle: "Nuestro Equipo",
    teamSubtitle: "Liderando un equipo apasionado por la tecnología, el diseño y los resultados orientados al crecimiento de tu empresa. Conoce a nuestros fundadores.",
    ceofounder: "CEO & Fundador",
    founder: "Fundador",
    footerText: "Mantai Web Designer Agency. Todos los derechos reservados.",
    modalTitle: "Trabaja con nosotros",
    modalSubtitle: "Reserva una cita",
    modalLabelName: "Nombre",
    modalPlaceholderName: "Ingresa tu nombre completo",
    modalLabelEmail: "Email",
    modalPlaceholderEmail: "Ingresa tu correo",
    modalLabelPhone: "Teléfono",
    modalPlaceholderPhone: "Ingresa tu teléfono",
    modalSubmitBtn: "Siguiente",
    modalSubmittingBtn: "Enviando...",
    successTitle: "¡Reserva Recibida!",
    successDesc: "Nuestro equipo ha recibido tu solicitud. Te contactaremos de inmediato para agendar tu llamada.",
    successClose: "Cerrar pestaña",
    searchCountry: "Buscar país...",
    noCountries: "No se encontraron países"
  },
  en: {
    navServices: "Services",
    navAgency: "Our Agency",
    navQuote: "Quote Project",
    salesBadge: "Digital marketing focused on sales",
    mainHeading1: "We create digital",
    mainHeading2: "experiences that",
    mainHeading3: "drive",
    mainHeading4: "your business.",
    heroSubtitle: "We are Mantai, an agency specializing in web design, custom development, and digital strategies designed for real results.",
    heroCTA: "Book a call",
    sec1Badge: "Our High-Performance Methodology",
    sec1Title: "How do we help your business truly grow?",
    sec1Desc: "We don't just build websites. We create an autonomous digital system that attracts clients from social media, generates bookings or appointments, and automates your sales 24/7.",
    diagBadge: "Current Diagnosis",
    diagTitle: "This is what holds back most local businesses today",
    probs: [
      {
        title: "Empty tables or low business days",
        desc: "The venue usually premium-fills on weekends. From Monday to Thursday, your staff and resources are ready but customers don't show.",
        badge: "Inconsistent Flow"
      },
      {
        title: "Invisible on Instagram or TikTok",
        desc: "Without active video creation (Reels/TikToks), local competitors capture attention from clients who have no idea you exist.",
        badge: "Low Reach"
      },
      {
        title: "No online booking or scheduling",
        desc: "Prospects search for you on Google/Maps, but can't book. They end up booking with competitors who offer online convenience.",
        badge: "Lost Sale"
      },
      {
        title: "Total mouth-to-mouth dependence",
        desc: "Word of mouth is fantastic but has a natural limit. Without a proper digital engine, your brand awareness slows down.",
        badge: "No Scalability"
      }
    ],
    pivotBadge: "The Strategic Pivot",
    pivotTitle: "How top businesses are multiplying their clients today",
    pivotSubtitle: "The competitive edge of cutting-edge technology implemented by Mantai.",
    solutions: [
      {
        title: "Viral Content with AI",
        desc: "High-engagement Reels of dishes, vibes, and services. Under strict visual frameworks that capture traffic fast, without costly agencies.",
        cta: "I want to implement it"
      },
      {
        title: "Direct Social Bookings",
        desc: "A high-conversion landing page connected directly to your Instagram, TikTok, and WhatsApp. Turn followers into recurring clients in just 2 clicks.",
        cta: "I want to implement it"
      },
      {
        title: "24/7 Automated Funnels",
        desc: "Smart assistants on WhatsApp and Direct Messages that book appointments, answer FAQs, filter leads, and secure reservations automatically.",
        cta: "I want to implement it"
      }
    ],
    flowBadge: "The System's Flow",
    flowTitle: "From complete stranger to ideal customer in 6 automated steps",
    flowSteps: [
      { num: "01", title: "Views a Video/Reel", desc: "An outstanding dish, your amazing business design, or a discount catches their attention." },
      { num: "02", title: "Visits the Website", desc: "The motivated reader clicks your bio link and lands on an ultra-responsive web experience." },
      { num: "03", title: "Starts a WhatsApp Chat", desc: "Clicks to book or chat, opening a safe, direct communication channel on their phone." },
      { num: "04", title: "Bot Qualifies Lead", desc: "Our virtual AI assistant answers in 3 seconds, reviews availability, and checks lead preferences." },
      { num: "05", title: "Enjoys & Visits", desc: "The guest attends their booking. Your calendar/venue fills up while your staff serves them." },
      { num: "06", title: "Fidelizes & Returns", desc: "We send a custom follow-up to obtain a 5-star Google review and invite them to return." }
    ],
    roadmapBadge: "Project Timeline",
    roadmapTitle: "Your path to exponential growth over the next 90 days",
    roadmapPlans: [
      {
        phase: "Month 01",
        badge: "Foundation & Structuring",
        points: [
          "In-depth audit of your current digital footprint.",
          "Design and launch of your brand-new modern website.",
          "Setup of the interactive reservation/appointment engine.",
          "Custom tailoring of the autonomous 24/7 WhatsApp AI bot.",
          "Production and planning of the first 12 high-impact Reels.",
          "Full local SEO optimization for your Google Maps business profile."
        ],
        cta: "Schedule kickoff phase"
      },
      {
        phase: "Month 02",
        badge: "Traction & Automation",
        points: [
          "Saturating your channels with premium viral content assets.",
          "Launching initial automated online customer bookings.",
          "Special promotion campaigns for low-traffic weekdays.",
          "Activating specialized funnels for special events & catering.",
          "Adjusting flows according to real user tracking data metrics.",
          "Analytical reporting with clear visual growth benchmarks."
        ],
        cta: "Schedule kickoff phase"
      },
      {
        phase: "Month 03",
        badge: "Scalability & Consolidation",
        points: [
          "Complete digital system functioning 100% autonomously.",
          "Evergreen traffic streams automatically generating prospect leads.",
          "Consistent revenue streams running smoothly Mon-Fri.",
          "Active email/WhatsApp database for repeat customer campaigns.",
          "Full assessment of targets hit against our growth roadmap.",
          "Strategic expansion roadmap for subsequent quarters."
        ],
        cta: "Schedule kickoff phase"
      }
    ],
    allIncBadge: "The All-Inclusive Blueprint",
    allIncTitle: "Everything covered inside your 90-day program",
    allIncSubtitle: "No need to coordinate external photographers, videographers, or web developers. At Mantai, we handle the complexity from end-to-end.",
    features: [
      { title: "Professional Website", desc: "A modern, responsive design optimized for mobile and local search rankings in under 30 days.", icon: <Globe className="w-5 h-5 text-brand-blue" /> },
      { title: "Active Reservation System", desc: "User-friendly interface enabling seamless appointment booking with automated email/SMS alerts.", icon: <Calendar className="w-5 h-5 text-brand-blue" /> },
      { title: "12 Reels/Videos Monthly", desc: "High-retention scriptwriting and professional visual assets tailored for social media feeds.", icon: <Instagram className="w-5 h-5 text-brand-blue" /> },
      { title: "AI-Powered Strategy", desc: "Sleek content scheduling powered by artificial intelligence to accelerate organic visual reach.", icon: <Sparkles className="w-5 h-5 text-brand-blue" /> },
      { title: "24/7 WhatsApp Assistant", desc: "Instant response system handling FAQ queries, confirmations, and CRM lead capture.", icon: <MessageSquare className="w-5 h-5 text-brand-blue" /> },
      { title: "Full Funnel Strategy", desc: "Engineered user journey converting cold visitors into passionate brand advocates.", icon: <Megaphone className="w-5 h-5 text-brand-blue" /> },
      { title: "Results Dashboard & Analytics", desc: "Weekly summaries pinpointing call volumes, conversions, and customer sources.", icon: <TrendingUp className="w-5 h-5 text-brand-blue" /> },
      { title: "Direct Dedicated Support", desc: "Private WhatsApp communication loop with rapid turnarounds for peace of mind.", icon: <Users className="w-5 h-5 text-brand-blue" /> }
    ],
    customStrategyTitle: "Tailor-made Strategy Design",
    customStrategyDesc: "From specialized ERP custom integrations to custom ads management. We structure blueprints exactly aligned to your company goals.",
    customStrategyCTA: "Let's talk",
    teamTitle: "Our Founders",
    teamSubtitle: "Leading a dedicated team enthusiastic about technology, high-end interfaces, and data-driven growth. Meets our founders.",
    ceofounder: "CEO & Founder",
    founder: "Founder",
    footerText: "Mantai Web Designer Agency. All rights reserved.",
    modalTitle: "Work with us",
    modalSubtitle: "Book an appointment",
    modalLabelName: "Name",
    modalPlaceholderName: "Enter your full name",
    modalLabelEmail: "Email",
    modalPlaceholderEmail: "Enter your email address",
    modalLabelPhone: "Phone",
    modalPlaceholderPhone: "Enter your phone number",
    modalSubmitBtn: "Next",
    modalSubmittingBtn: "Sending...",
    successTitle: "Appointment Booked!",
    successDesc: "Our team has received your information. We'll reach out shortly to coordinate your onboarding call.",
    successClose: "Close window",
    searchCountry: "Search country...",
    noCountries: "No countries found"
  }
};

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [isSubmittingModal, setIsSubmittingModal] = useState(false);
  const [isSubmittedModal, setIsSubmittedModal] = useState(false);

  // Country code Selector States
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo>(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const t = translations[lang];

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingModal(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/gabrielguadamuzriver@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: modalName,
          Email: modalEmail,
          Telefono: `${selectedCountry.dial} ${modalPhone}`,
          Pais: `${selectedCountry.name.es} (${selectedCountry.code})`,
          _subject: `Nuevo Lead de Cita (${selectedCountry.code}) - Mantai Web`,
          _cc: "santiagoguadamuz66@gmail.com,sebitas5245@gmail.com",
          _template: "box"
        })
      });

      if (response.ok) {
        setIsSubmittedModal(true);
        setModalName('');
        setModalEmail('');
        setModalPhone('');
      } else {
        alert(lang === 'es' ? "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo." : "There was a problem sending your request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert(lang === 'es' ? "Hubo un error de conexión. Por favor intenta de nuevo." : "Connection error. Please try again.");
    } finally {
      setIsSubmittingModal(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 antialiased selection:bg-brand-blue/10 selection:text-brand-blue">
      
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-md group-hover:bg-brand-blue/30 transition-colors"></div>
              <img 
                src="/logo.png" 
                alt="Mantai Web Designer Company" 
                className="relative w-20 h-20 rounded-full object-cover shadow-md border-2 border-white bg-white transition-transform group-hover:scale-105" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-brand-dark leading-none">
                mantai<span className="text-brand-blue">.</span>
              </span>
              <span className="text-[9px] tracking-widest text-slate-500 font-medium uppercase mt-1">
                &lt;/ web agency /&gt;
              </span>
            </div>
          </a>

          {/* Right Navigation & Helpers */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 mr-2">
              <a href="#servicios" className="hover:text-brand-blue transition-colors">{t.navServices}</a>
              <a href="#agencia" className="hover:text-brand-blue transition-colors">{t.navAgency}</a>
            </div>

            {/* Language Picker Switch */}
            <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-bold shadow-inner">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer select-none ${lang === 'es' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <span>ES</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer select-none ${lang === 'en' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <span>EN</span>
              </button>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)} 
              className="px-4 py-2 sm:px-6 sm:py-3 bg-brand-blue text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 cursor-pointer text-xs sm:text-sm font-bold"
            >
              {t.navQuote}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden bg-tech-pattern flex flex-col items-center justify-center">
        {/* Abstract Background Shapes mimicking water/circuit connections */}
        <div className="absolute top-0 right-0 -mr-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/40 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-300/30 to-blue-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center text-center"
          >
            {/* Sales-focused Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 text-brand-blue font-semibold text-sm mb-6 border border-blue-200 shadow-sm backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>{t.salesBadge}</span>
            </div>

            {/* Bold Display Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-[1.12] tracking-tight mb-6 max-w-4xl">
              {t.mainHeading1} <br className="hidden sm:inline" />
              {t.mainHeading2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">{t.mainHeading3}</span> <br className="hidden sm:inline" />
              {t.mainHeading4}
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Main Action Button */}
            <div className="flex flex-col items-center gap-4 w-full">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-white bg-brand-blue rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-brand-blue/30 hover:scale-105 active:scale-95 duration-200 cursor-pointer animate-[pulse_3s_infinite]"
              >
                {t.heroCTA}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-50 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold text-brand-blue uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              {t.sec1Badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mt-4 mb-6 leading-tight">
              {t.sec1Title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.sec1Desc}
            </p>
          </div>

          {/* Section 1: The Problems */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                {t.diagBadge}
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-900 mt-2">
                {t.diagTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.probs.map((prob, idx) => (
                <div key={idx} className="bg-white border-2 border-red-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    {prob.badge}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-lg mb-4 mt-2">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{prob.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: The Solution */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-[40px] p-8 md:p-14 mb-24 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mb-12">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/15 px-3.5 py-1 rounded-full border border-brand-blue/30 inline-block">
                {t.pivotBadge}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight">
                {t.pivotTitle}
              </h3>
              <p className="text-slate-400 mt-3 text-base md:text-lg">
                {t.pivotSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {t.solutions.map((sol, idx) => (
                <div key={idx} className="bg-slate-800/40 border border-slate-700/55 rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="text-5xl font-black opacity-30 block mb-4 font-mono">0{idx + 1}</span>
                    <h4 className="text-xl font-bold text-white mb-3">{sol.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{sol.desc}</p>
                  </div>
                  <div 
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-auto cursor-pointer text-brand-blue hover:text-white transition-colors" 
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>{sol.cta}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: The 6-Step Flow */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {t.flowBadge}
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-900 mt-2">
                {t.flowTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {t.flowSteps.map((flow, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-150 relative shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue font-mono font-bold flex items-center justify-center text-sm mb-4">
                      {flow.num}
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-2 tracking-tight leading-snug">{flow.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{flow.desc}</p>
                  </div>
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-slate-300">
                      <ArrowRight className="w-5 h-5 pointer-events-none" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: 90-Day Plan */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {t.roadmapBadge}
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-900 mt-2">
                {t.roadmapTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {t.roadmapPlans.map((plan, idx) => (
                <div key={idx} className="bg-gradient-to-b from-slate-50 to-slate-100 border-slate-200 border-2 rounded-[32px] p-8 hover:scale-[1.01] transition-transform duration-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue font-mono">{plan.phase}</span>
                    <h4 className="text-xl font-extrabold text-slate-900 mt-1 mb-4">{plan.badge}</h4>
                    <ul className="space-y-3.5">
                      {plan.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                          <Check className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-8 bg-white border border-slate-200 hover:border-brand-blue py-3 px-5 rounded-xl font-bold text-sm text-slate-700 hover:text-brand-blue transition-all cursor-pointer flex justify-center items-center gap-2 animate-none"
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Included Goodies */}
          <div className="mb-12">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {t.allIncBadge}
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-950 mt-2">
                {t.allIncTitle}
              </h3>
              <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                {t.allIncSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.features.map((inc, index) => (
                <div key={index} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    {/* Reuse static configurations or keep standard lucide representations */}
                    <Check className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{inc.title}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{inc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Call */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-brand-blue to-blue-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-blue-900/20 overflow-hidden relative"
          >
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
              <Settings className="w-64 h-64 -mt-10 -mr-10 animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="relative z-10 flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm shrink-0">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">{t.customStrategyTitle}</h4>
                <p className="text-blue-100 max-w-xl">{t.customStrategyDesc}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="relative z-10 mt-6 md:mt-0 shrink-0 px-8 py-3 bg-white text-brand-blue font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
            >
              {t.customStrategyCTA}
            </button>
          </motion.div>

        </div>
      </section>

      {/* Founder / Contact Section */}
      <section id="agencia" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
        {/* Decor */}
        <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="400" r="300" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10"/>
            <circle cx="0" cy="400" r="200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">{t.teamTitle}</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.teamSubtitle}
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Gabriel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/60 border border-slate-700/50 p-8 rounded-3xl hover:border-brand-blue/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">Gabriel Guadamuz</h3>
                <div className="text-blue-400 text-xs font-bold tracking-wider mb-6 uppercase">{t.ceofounder}</div>
              </div>
              <div className="flex flex-col gap-3.5">
                <a href="tel:+50663667242" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>+506 6366 7242</span>
                </a>
                <a href="mailto:gabrielguadamuzriver@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm break-all">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>gabrielguadamuzriver@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Santiago */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/60 border border-slate-700/50 p-8 rounded-3xl hover:border-brand-blue/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">Santiago Guadamuz</h3>
                <div className="text-blue-400 text-xs font-bold tracking-wider mb-6 uppercase">{t.founder}</div>
              </div>
              <div className="flex flex-col gap-3.5">
                <a href="tel:+50684357138" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>+506 8435 7138</span>
                </a>
                <a href="mailto:santiagoguadamuz66@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm break-all">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>santiagoguadamuz66@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Sebastian */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/60 border border-slate-700/50 p-8 rounded-3xl hover:border-brand-blue/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">Sebastián López</h3>
                <div className="text-blue-400 text-xs font-bold tracking-wider mb-6 uppercase">{t.founder}</div>
              </div>
              <div className="flex flex-col gap-3.5">
                <a href="tel:+50661232277" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>+506 6123 2277</span>
                </a>
                <a href="mailto:sebitas5245@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm break-all">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>sebitas5245@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social and Web Links */}
          <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
            <a href="https://mantaiweb.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-brand-blue/50">
              <Globe className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
              <span className="font-medium">mantaiweb.com</span>
            </a>
            <a href="https://instagram.com/mantai.web" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-pink-500/50">
              <Instagram className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" />
              <span className="font-medium">@mantai.web</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {t.footerText}</p>
      </footer>

      {/* Modern Appointment Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmittedModal(false);
                setIsCountryDropdownOpen(false);
              }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="bg-white rounded-[32px] p-8 md:p-10 max-w-lg w-full relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] z-10 border border-slate-100 overflow-visible"
            >
              {isSubmittedModal ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.successTitle}</h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    {t.successDesc}
                  </p>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmittedModal(false);
                    }}
                    className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all cursor-pointer shadow-lg shadow-blue-500/20 active:scale-98"
                  >
                    {t.successClose}
                  </button>
                </div>
              ) : (
                <>
                  {/* Top Bar with Icon and Title */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Visual Growth Signal Icon */}
                    <div className="flex items-end gap-1.5 h-10">
                      <div className="w-2.5 h-4 bg-blue-300 rounded-full"></div>
                      <div className="w-2.5 h-7 bg-blue-400 rounded-full animate-bounce [animation-duration:1.2s]"></div>
                      <div className="w-2.5 h-10 bg-brand-blue rounded-full"></div>
                    </div>

                    {/* Titles */}
                    <div className="text-right pr-4 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t.modalTitle}</h3>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">{t.modalSubtitle}</p>
                    </div>

                    {/* Close */}
                    <button 
                      onClick={() => {
                        setIsModalOpen(false);
                        setIsCountryDropdownOpen(false);
                      }} 
                      className="p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleModalSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">{t.modalLabelName}</label>
                      <input 
                        type="text" 
                        required
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                        placeholder={t.modalPlaceholderName} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-base"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">{t.modalLabelEmail}</label>
                      <input 
                        type="email" 
                        required
                        value={modalEmail}
                        onChange={(e) => setModalEmail(e.target.value)}
                        placeholder={t.modalPlaceholderEmail} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-base"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">{t.modalLabelPhone}</label>
                      <div className="flex border border-slate-200 rounded-[20px] focus-within:border-brand-blue focus-within:ring-1 focus-within:ring-brand-blue transition-all bg-slate-50">
                        
                        {/* Custom Country Dropdown Code Selector Container */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                            className="h-full flex items-center gap-1.5 px-4 bg-slate-100 border-r border-slate-200 text-sm font-bold text-slate-600 select-none cursor-pointer hover:bg-slate-200 transition-colors rounded-l-[19px] outline-none"
                          >
                            <span className="text-base">{selectedCountry.flag}</span>
                            <span>{selectedCountry.dial}</span>
                          </button>

                          {isCountryDropdownOpen && (
                            <>
                              {/* Overlay specifically to close country selection on backdrop click */}
                              <div 
                                className="fixed inset-0 z-30" 
                                onClick={() => setIsCountryDropdownOpen(false)} 
                              />
                              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl z-40 p-3 text-slate-800 text-sm animate-none">
                                <input 
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder={t.searchCountry}
                                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue mb-2"
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <div className="max-h-48 overflow-y-auto space-y-0.5 divide-y divide-slate-50">
                                  {countries
                                    .filter(c => 
                                      c.name[lang].toLowerCase().includes(countrySearch.toLowerCase()) || 
                                      c.dial.includes(countrySearch)
                                    )
                                    .map((c) => (
                                      <button
                                        key={c.code}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setIsCountryDropdownOpen(false);
                                          setCountrySearch('');
                                        }}
                                        className={`w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between ${selectedCountry.code === c.code ? 'bg-blue-50 font-semibold text-brand-blue' : ''}`}
                                      >
                                        <span className="flex items-center gap-2 truncate">
                                          <span>{c.flag}</span>
                                          <span className="truncate">{c.name[lang]}</span>
                                        </span>
                                        <span className="text-slate-400 text-xs font-mono">{c.dial}</span>
                                      </button>
                                    ))
                                  }
                                  {countries.filter(c => 
                                      c.name[lang].toLowerCase().includes(countrySearch.toLowerCase()) || 
                                      c.dial.includes(countrySearch)
                                    ).length === 0 && (
                                      <div className="px-3 py-4 text-xs text-slate-400 text-center">
                                        {t.noCountries}
                                      </div>
                                    )
                                  }
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        <input 
                          type="tel" 
                          required
                          value={modalPhone}
                          onChange={(e) => setModalPhone(e.target.value)}
                          placeholder={t.modalPlaceholderPhone} 
                          className="w-full px-5 py-4 text-slate-900 bg-transparent placeholder:text-slate-400 focus:outline-none text-base"
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmittingModal}
                      className="w-full bg-brand-blue text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 text-center text-lg mt-2 cursor-pointer flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-98 duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmittingModal ? t.modalSubmittingBtn : t.modalSubmitBtn}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
