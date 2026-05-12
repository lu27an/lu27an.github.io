import { Database, Satellite, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Softwares & Plataformas",
      icon: <Layers size={20} className="text-geo-cyan" />,
      skills: ["AutoCAD", "QGIS", "AgroCAD", "InfoRow", "WebGIS"]
    },
    {
      title: "Processamento & Dados",
      icon: <Database size={20} className="text-geo-green" />,
      skills: ["Mapas Agrícolas", "Análises Espaciais", "Restituição de Linhas", "Nuvem de Pontos", "Ortomosaicos"]
    },
    {
      title: "Coleta & Equipamentos",
      icon: <Satellite size={20} className="text-slate-300" />,
      skills: ["RTK / RTX", "Drones", "Piloto Automático", "Projetos de Sistematização"]
    }
  ];

  return (
    <section id="habilidades" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-slate-500 rounded-full"></span>
              Stack Tecnológico
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-panel p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-800/50 rounded-md">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-xs font-display tracking-wide px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 text-slate-300 rounded hover:border-geo-cyan/50 hover:text-geo-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
