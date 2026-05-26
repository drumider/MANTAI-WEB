import { motion } from 'motion/react';
import { Monitor, Code2, Smartphone, Megaphone, Settings, Mail, Phone, Globe, ChevronRight } from 'lucide-react';

export default function App() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: "Diseño de Web",
      description: "Páginas web modernas, intuitivas y optimizadas para cautivar a tu audiencia y convertir visitantes en clientes."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white" />,
      title: "Diseño de Redes",
      description: "Estrategias visuales y contenido gráfico impactante para destacar tu marca en todas las plataformas sociales."
    },
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "Desarrollo a Medida",
      description: "Soluciones de software y plataformas personalizadas creadas específicamente para las necesidades de tu negocio."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Diseño Responsivo",
      description: "Aplicaciones y webs que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas grandes."
    }
  ];

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
            <a href="#contacto" className="px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-tech-pattern">
        {/* Abstract Background Shapes mimicking water/circuit connections */}
        <div className="absolute top-0 right-0 -mr-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/40 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-300/30 to-blue-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-brand-blue font-semibold text-sm mb-6 border border-blue-200 shadow-sm backdrop-blur-sm">
               <span>🚀</span> Transformación Digital
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-8">
              Creamos experiencias <br/> digitales que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">impulsan</span> <br/> tu negocio.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Somos <strong className="text-brand-dark font-semibold">Mantai</strong>, una agencia especializada en diseño web, desarrollo a medida y estrategias digitales diseñadas para resultados reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-flex justify-center items-center gap-2 px-8 py-4 text-white bg-brand-dark rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                Iniciar un proyecto <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#servicios" className="inline-flex justify-center items-center gap-2 px-8 py-4 text-brand-dark bg-white rounded-full font-medium border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-all">
                Ver servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Nuestros Servicios</h2>
            <p className="text-lg text-slate-600">Soluciones integrales de diseño y tecnología para llevar tu marca al siguiente nivel en el mundo digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-brand-blue to-blue-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-blue-900/20 overflow-hidden relative"
          >
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
              <Settings className="w-64 h-64 -mt-10 -mr-10 animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="relative z-10 flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm shrink-0">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">...Y todo lo que tu proyecto necesite</h4>
                <p className="text-blue-100 max-w-xl">Desde integraciones complejas, optimización SEO, hasta mantenimiento continuo. Nos adaptamos a los requerimientos técnicos de tu visión.</p>
              </div>
            </div>
            <a href="#contacto" className="relative z-10 mt-6 md:mt-0 shrink-0 px-8 py-3 bg-white text-brand-blue font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
              Hablemos hoy
            </a>
          </motion.div>
        </div>
      </section>

      {/* Founder / Contact Section */}
      <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="400" r="300" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10"/>
            <circle cx="0" cy="400" r="200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Leadership Identity */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Nuestro Equipo</h2>
                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Liderando un equipo apasionado por la tecnología, el diseño y los resultados orientados al crecimiento de tu empresa. Conoce a nuestros fundadores.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Gabriel */}
                <div className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl hover:border-brand-blue/50 transition-colors group">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">Gabriel Guadamuz Rivera</h3>
                  <div className="text-blue-400 text-[10px] font-bold tracking-wider mb-4 uppercase">CEO & Fundador</div>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+50663667242" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                      <Phone className="w-4 h-4 text-blue-400" />
                      +506 63667242
                    </a>
                    <a href="mailto:gabrielguadamuzriver@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                      <Mail className="w-4 h-4 text-blue-400" />
                      gabrielguadamuzriver@gmail.com
                    </a>
                  </div>
                </div>

                {/* Santiago */}
                <div className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl hover:border-brand-blue/50 transition-colors group">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">Santiago Guadamuz Espinoza</h3>
                  <div className="text-blue-400 text-[10px] font-bold tracking-wider mb-4 uppercase">CEO & Fundador</div>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+50684357138" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                      <Phone className="w-4 h-4 text-blue-400" />
                      +506 8435 7138
                    </a>
                    <a href="mailto:santiagoguadamuz66@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                      <Mail className="w-4 h-4 text-blue-400" />
                      santiagoguadamuz66@gmail.com
                    </a>
                  </div>
                </div>

                {/* Sebastian */}
                <div className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl hover:border-brand-blue/50 transition-colors group">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">Sebastián López Canessa</h3>
                  <div className="text-blue-400 text-[10px] font-bold tracking-wider mb-4 uppercase">CEO & Fundador</div>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+50661232277" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                      <Phone className="w-4 h-4 text-blue-400" />
                      +506 6123 2277
                    </a>
                    <a href="mailto:sebitas5245@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                      <Mail className="w-4 h-4 text-blue-400" />
                      sebitas5245@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 flex items-center justify-start">
                <a href="https://mantaiweb.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-brand-blue/50">
                  <Globe className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                  <span className="font-medium">mantaiweb.com</span>
                </a>
              </div>
            </motion.div>

            {/* CTA Form / Showcase */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue rounded-bl-full opacity-20" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">¿Listo para empezar?</h3>
              <form className="space-y-6 relative z-10" action="https://formsubmit.co/gabrielguadamuzriver@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Nuevo cliente en Mantai Web Agency" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_cc" value="santiagoguadamuz66@gmail.com,sebitas5245@gmail.com" />
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nombre o Empresa</label>
                  <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Correo Electrónico</label>
                  <input type="email" name="email" required className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="hola@empresa.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Cuéntanos sobre tu proyecto</label>
                  <textarea name="message" required rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none" placeholder="Me gustaría renovar o crear un sitio web..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/30 flex justify-center items-center gap-2">
                  Enviar Mensaje <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Mantai Web Designer Agency. Todos los derechos reservados.</p>
      </footer >
    </div>
  );
}
