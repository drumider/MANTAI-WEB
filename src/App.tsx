import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Code2, Smartphone, Megaphone, Settings, Mail, Phone, Globe, ChevronRight, Instagram, TrendingUp, Sparkles, X, Check, ArrowRight, Clock, MessageSquare, Calendar, Users } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [isSubmittingModal, setIsSubmittingModal] = useState(false);
  const [isSubmittedModal, setIsSubmittedModal] = useState(false);

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
          Telefono: `+506 ${modalPhone}`,
          _subject: "Nuevo Lead de Cita - Mantai Web",
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
        alert("Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error de conexión. Por favor intenta de nuevo.");
    } finally {
      setIsSubmittingModal(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      
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
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-brand-blue transition-colors">Servicios</a>
            <a href="#agencia" className="hover:text-brand-blue transition-colors">La Agencia</a>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              Cotizar Proyecto
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
              <span>Marketing digital enfocado a ventas</span>
            </div>

            {/* Bold Display Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-[1.12] tracking-tight mb-6 max-w-4xl">
              Creamos experiencias <br className="hidden sm:inline" />
              digitales que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">impulsan</span> <br className="hidden sm:inline" />
              tu negocio.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Somos <strong className="text-brand-dark font-bold">Mantai</strong>, una agencia especializada en diseño web, desarrollo a medida y estrategias digitales diseñadas para resultados reales.
            </p>

            {/* Main Action Button */}
            <div className="flex flex-col items-center gap-4 w-full">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-white bg-brand-blue rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-brand-blue/30 hover:scale-105 active:scale-95 duration-200 cursor-pointer animate-[pulse_3s_infinite]"
              >
                Agenda una llamada
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
              Nuestra Metodología de Alto Rendimiento
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mt-4 mb-6 leading-tight">
              ¿Cómo ayudamos a que tu negocio crezca de verdad?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              No solo hacemos páginas web. Creamos un **sistema digital autónomo** que atrae clientes de redes sociales, genera reservas o citas y automatiza tus ventas las 24 horas del día.
            </p>
          </div>

          {/* Section 1: The Problems (ESTO ES LO QUE PASA AHORA MISMO) */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                Diagnóstico Actual
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-900 mt-2">
                Esto es lo que frena a la mayoría de negocios locales hoy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Mesas vacías o días de baja afluencia",
                  desc: "El negocio suele llenarse solo los fines de semana. De lunes a jueves, los recursos y tu equipo están listos pero los clientes no llegan.",
                  badBadge: "Flujo Inconsistente"
                },
                {
                  title: "Invisibles en Instagram o TikTok",
                  desc: "Sin presencia activa con Reels o videos atractivos, tus competidores capturan la atención de clientes que ni saben que tu local existe.",
                  badBadge: "Bajo Alcance"
                },
                {
                  title: "Sin reservas ni citas en línea",
                  desc: "Los clientes potenciales te buscan en Google, pero no encuentran una plataforma para agendar directamente. Terminan yéndose con quien sí la tiene.",
                  badBadge: "Venta Perdida"
                },
                {
                  title: "Dependencia total del voz a voz",
                  desc: "El boca a boca es excelente, pero tiene un techo natural. Sin un acelerador digital, el crecimiento de tu marca se estanca por completo.",
                  badBadge: "Sin Escalabilidad"
                }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border-2 border-red-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    {prob.badBadge}
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

          {/* Section 2: The Solution (CÓMO LLENAN LOS NEGOCIOS TOP) */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-[40px] p-8 md:p-14 mb-24 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mb-12">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/15 px-3.5 py-1 rounded-full border border-brand-blue/30 inline-block">
                El Cambio Estratégico
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight">
                Cómo los negocios top están multiplicando sus clientes hoy
              </h3>
              <p className="text-slate-400 mt-3 text-base md:text-lg">
                La ventaja competitively de la tecnología de vanguardia implementada por Mantai.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  num: "01",
                  title: "Contenido Viral con IA",
                  desc: "Reels de platos, ambiente, servicios y personal generados bajo frameworks de alto engagement que capturan vistas rápidamente. Sin agencias caras, sin necesidad de videógrafos permanentes.",
                  color: "border-emerald-500/30 text-emerald-400 hover:border-emerald-400"
                },
                {
                  num: "02",
                  title: "Reservas directas de Redes",
                  desc: "Una página web de alta conversión conectada directamente con tu Instagram, TikTok y WhatsApp. Tus seguidores se convierten en comensales recurrentes en solo un par de clics y sin intermediarios.",
                  color: "border-brand-blue/30 text-blue-400 hover:border-brand-blue"
                },
                {
                  num: "03",
                  title: "Embudos automatizados 24/7",
                  desc: "Asistentes virtuales e inteligentes en WhatsApp y Mensajería Directa que confirman citas, responden preguntas frecuentes, califican leads y capturan reservas automáticamente, permitiendo que te enfoques en brindar un servicio estelar.",
                  color: "border-cyan-500/30 text-cyan-400 hover:border-cyan-400"
                }
              ].map((sol, idx) => (
                <div key={idx} className={`bg-slate-800/40 border ${sol.color} rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between`}>
                  <div>
                    <span className="text-5xl font-black opacity-30 block mb-4 font-mono">{sol.num}</span>
                    <h4 className="text-xl font-bold text-white mb-3">{sol.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{sol.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-auto cursor-pointer" onClick={() => setIsModalOpen(true)}>
                    <span>Quiero implementarlo</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: The 6-Step Flow (DE EXTRAÑO A CLIENTE EN 6 PASOS) */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                El Proceso del Sistema
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-900 mt-2">
                De extraño a cliente ideal en 6 pasos automatizados
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {[
                { step: "01", title: "Ve un Reel o Video", desc: "Un plato exquisito, tu ambiente impecable o una promoción irresistible detiene su scroll." },
                { step: "02", title: "Visita la Web", desc: "El usuario motivado da clic en tu enlace de biografía e ingresa a una web ultrarrápida." },
                { step: "03", title: "Inicia WhatsApp", desc: "Da clic para chatear o reservar directamente, iniciando un canal privado de contacto." },
                { step: "04", title: "Bot califica", desc: "El asistente de IA responde en 3 segundos, confirma disponibilidad y califica los datos." },
                { step: "05", title: "Disfruta y asiste", desc: "El comensal asiste a su cita. Tu mesa o agenda está llena, y tu equipo ejecuta un gran servicio." },
                { step: "06", title: "Fideliza y vuelve", desc: "Enviamos seguimiento pós-visita para obtener reseñas de 5 estrellas en Maps y lograr que regresen." }
              ].map((flow, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-150 relative shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue font-mono font-bold flex items-center justify-center text-sm mb-4">
                      {flow.step}
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

          {/* Section 4: 90-Day Plan (TU CAMINO EN LOS PRÓXIMOS 90 DÍAS) */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Cronograma de Trabajo
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-900 mt-2">
                Tu camino hacia el crecimiento en los próximos 90 días
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
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
                  bg: "from-blue-50 to-blue-100/50 border-brand-blue/20"
                },
                {
                  phase: "Mes 02",
                  badge: "Tracción y Automatización",
                  points: [
                    "Saturación de contenido viral escalado en tus de redes.",
                    "Llegada de las primeras reservas online automáticas.",
                    "Lanzamiento de campañas exclusivas para días de baja afluencia.",
                    "Activación del embudo automatizado para eventos o fechas especiales.",
                    "Ajuste y optimización de flujos con comportamiento de usuarios reales.",
                    "Entrega de reportes semanales con analíticas claras."
                  ],
                  bg: "from-cyan-50 to-cyan-150/40 border-cyan-200"
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
                  bg: "from-slate-50 to-slate-100 border-slate-200"
                }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-gradient-to-b ${plan.bg} border-2 rounded-[32px] p-8 hover:scale-[1.01] transition-transform duration-200 shadow-sm flex flex-col justify-between`}>
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
                    className="w-full mt-8 bg-white border border-slate-200 hover:border-brand-blue py-3 px-5 rounded-xl font-bold text-sm text-slate-700 hover:text-brand-blue transition-all cursor-pointer flex justify-center items-center gap-2"
                  >
                    Agendar mi fase de inicio <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Included Goodies (TODO LO QUE ESTÁ INCLUIDO) */}
          <div className="mb-12">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                El Paquete Todo Incluido
              </span>
              <h3 className="text-2xl md:text-3.5xl font-bold text-slate-950 mt-2">
                Todo lo que está incluido en tu plan de 90 días
              </h3>
              <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                No tienes que contratar agencias separadas, fotógrafos ni programadores. En Mantai nos encargamos de todo de inicio a fin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Página Web Profesional", desc: "Un portal moderno optimizado para celulares y motores de búsqueda, con entrega ágil en 30 días.", icon: <Globe className="w-5 h-5 text-brand-blue" /> },
                { title: "Sistema de Reservas Activo", desc: "Software intuitivo integrado a la web para agendar citas o mesas con recordatorios SMS o email.", icon: <Calendar className="w-5 h-5 text-brand-blue" /> },
                { title: "12 Reels o Videos al Mes", desc: "Edición profesional y guiones diseñados para retener la atención del usuario en redes.", icon: <Instagram className="w-5 h-5 text-brand-blue" /> },
                { title: "Estrategia de Contenido con IA", desc: "Calendarización automatizada con inteligencia artificial para acelerar ideas virales.", icon: <Sparkles className="w-5 h-5 text-brand-blue" /> },
                { title: "Bot de WhatsApp 24/7", desc: "Contestación autónoma instantánea para dudas, confirmaciones e integraciones CRM.", icon: <MessageSquare className="w-5 h-5 text-brand-blue" /> },
                { title: "Embudo de Ventas Completo", desc: "Sistematización de clics a ventas, guiando prospectos fríos en compradores leales.", icon: <Megaphone className="w-5 h-5 text-brand-blue" /> },
                { title: "Reportes de Resultados", desc: "Cuadros de mando semanales que muestran de dónde provienen tus llamadas, clics y clientes.", icon: <TrendingUp className="w-5 h-5 text-brand-blue" /> },
                { title: "Soporte Directo Cara a Cara", desc: "Grupo exclusivo en WhatsApp para resolver y pivotar cambios técnicos con tiempos récord.", icon: <Users className="w-5 h-5 text-brand-blue" /> }
              ].map((inc, index) => (
                <div key={index} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    {inc.icon}
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

          {/* Action Call for the Whole Services Module */}
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
                <h4 className="text-2xl font-bold mb-2">Diseñamos tu estrategia a medida</h4>
                <p className="text-blue-100 max-w-xl">Desde integraciones customizadas hasta aceleración de pauta publicitaria. Diseñamos un plan adaptado exclusivamente para tus metas.</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="relative z-10 mt-6 md:mt-0 shrink-0 px-8 py-3 bg-white text-brand-blue font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
            >
              Hablemos hoy
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
            <h2 className="text-4xl font-extrabold mb-4 text-white">Nuestro Equipo</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Liderando un equipo apasionado por la tecnología, el diseño y los resultados orientados al crecimiento de tu empresa. Conoce a nuestros fundadores.
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
                <div className="text-blue-400 text-xs font-bold tracking-wider mb-6 uppercase">CEO & Fundador</div>
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
                <div className="text-blue-400 text-xs font-bold tracking-wider mb-6 uppercase">Fundador</div>
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
                <div className="text-blue-400 text-xs font-bold tracking-wider mb-6 uppercase">Fundador</div>
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
        <p>© {new Date().getFullYear()} Mantai Web Designer Agency. Todos los derechos reservados.</p>
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
              }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="bg-white rounded-[32px] p-8 md:p-10 max-w-lg w-full relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] z-10 border border-slate-100 overflow-hidden"
            >
              {isSubmittedModal ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Reserva Recibida!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    Nuestro equipo ha recibido tu solicitud. Te contactaremos de inmediato para agendar tu llamada.
                  </p>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmittedModal(false);
                    }}
                    className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all cursor-pointer shadow-lg shadow-blue-500/20 active:scale-98"
                  >
                    Cerrar pestaña
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
                    <div className="text-right pr-4">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">Trabaja con nosotros</h3>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">Reserva una cita</p>
                    </div>

                    {/* Close */}
                    <button 
                      onClick={() => setIsModalOpen(false)} 
                      className="p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleModalSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre</label>
                      <input 
                        type="text" 
                        required
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                        placeholder="Ingresa tu nombre completo" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-base"
                      />
                    </div>

                    {/* Email & Phone side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          required
                          value={modalEmail}
                          onChange={(e) => setModalEmail(e.target.value)}
                          placeholder="Ingresa tu correo" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Teléfono</label>
                        <div className="flex border border-slate-200 rounded-[20px] focus-within:border-brand-blue focus-within:ring-1 focus-within:ring-brand-blue transition-all overflow-hidden bg-slate-50">
                          <div className="flex items-center gap-1.5 px-3 bg-slate-100 border-r border-slate-250 text-sm font-bold text-slate-600 select-none">
                            <span className="text-base">🇨🇷</span>
                            <span>+506</span>
                          </div>
                          <input 
                            type="tel" 
                            required
                            value={modalPhone}
                            onChange={(e) => setModalPhone(e.target.value)}
                            placeholder="Ingresa tu teléfono" 
                            className="w-full px-4 py-4 text-slate-900 bg-slate-50 placeholder:text-slate-400 focus:outline-none text-base"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmittingModal}
                      className="w-full bg-brand-blue text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 text-center text-lg mt-2 cursor-pointer flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-98 duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmittingModal ? "Enviando..." : "Siguiente"}
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
