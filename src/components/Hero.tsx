import { Map, MapPin, Compass, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [coords, setCoords] = useState({ lat: -21.2014, lng: -50.4312 }); // Araçatuba approx coords

  useEffect(() => {
    // Fictional coordinate ticking effect for "Geek/GIS" feel
    const interval = setInterval(() => {
      setCoords(prev => ({
        lat: prev.lat + (Math.random() * 0.0001 - 0.00005),
        lng: prev.lng + (Math.random() * 0.0001 - 0.00005)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden topo-bg pt-20">
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-geo-obsidian/80 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-geo-cyan/30 bg-geo-cyan/10 text-geo-cyan text-sm font-display font-medium tracking-wide">
              <MapPin size={16} />
              <span>Araçatuba, São Paulo, Brasil</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
              Luan Augusto <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-cyan to-geo-green">
                Barboza Simão
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto md:mx-0">
              Especialista em Geotecnologias, focado em transformar dados espaciais 
              em eficiência operacional no agronegócio.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a href="#experiencia" className="px-8 py-3 rounded-lg bg-geo-green text-geo-obsidian font-semibold font-display tracking-wide hover:bg-geo-green/90 transition-colors flex items-center gap-2">
                <Compass size={20} />
                Navegar Perfil
              </a>
              <a href="https://www.linkedin.com/in/luan-augusto-b-a99937141/" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-lg border border-slate-700 bg-geo-midnight/50 hover:bg-slate-800/80 transition-colors font-display tracking-wide flex items-center gap-2">
                Acessar LinkedIn
              </a>
            </div>
          </div>

          {/* Technical Info Card */}
          <div className="hidden md:block w-72">
            <div className="glass-panel p-6 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Map size={100} />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-display uppercase tracking-wider">Status Atual</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-geo-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-geo-green"></span>
                  </span>
                  <p className="text-geo-green font-medium">Satélite Conectado</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-display uppercase tracking-wider">Coordenadas RTK</p>
                <p className="font-display tracking-widest text-slate-300 font-medium">
                  {coords.lat.toFixed(6)}°S
                </p>
                <p className="font-display tracking-widest text-slate-300 font-medium">
                  {Math.abs(coords.lng).toFixed(6)}°W
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-slate-800/50">
                <p className="text-xs text-slate-500 font-display uppercase tracking-wider">Foco Operacional</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-[10px] uppercase bg-slate-800/50 border border-slate-700 px-2 py-1 rounded text-slate-300">Agro. Precisão</span>
                  <span className="text-[10px] uppercase bg-slate-800/50 border border-slate-700 px-2 py-1 rounded text-slate-300">Topografia</span>
                  <span className="text-[10px] uppercase bg-slate-800/50 border border-slate-700 px-2 py-1 rounded text-slate-300">SIG</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
