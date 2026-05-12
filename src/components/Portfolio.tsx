import { ImageIcon } from 'lucide-react';

export default function Portfolio() {
  const placeholders = [
    {
      title: "Mapa de Colheita & Paralelismo",
      desc: "Análise de pisoteio e paralelismo utilizando dados de máquinas e InfoRow.",
      color: "bg-geo-cyan/10 border-geo-cyan/20"
    },
    {
      title: "Sistematização de Terraços",
      desc: "Projeto em AutoCAD/AgroCAD para conservação de solo (terraços embutidos).",
      color: "bg-geo-green/10 border-geo-green/20"
    },
    {
      title: "Levantamento por Drone",
      desc: "Nuvem de pontos e ortomosaicos processados para detecção de falhas de plantio.",
      color: "bg-slate-800/50 border-slate-700"
    }
  ];

  return (
    <section id="projetos" className="py-24 relative bg-geo-midnight/20 border-t border-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-white rounded-full"></span>
              Galeria de Mapas
            </h2>
            <p className="text-slate-400">
              Espaço reservado para a exibição visual dos projetos e análises espaciais (Em breve).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {placeholders.map((item, idx) => (
              <div key={idx} className="glass-panel group overflow-hidden flex flex-col h-72">
                <div className={`flex-1 flex items-center justify-center border-b border-slate-800/50 ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                  <ImageIcon size={48} className="text-slate-600 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute bottom-3 right-3 text-[10px] font-display tracking-widest uppercase text-slate-500">Image Space</span>
                </div>
                <div className="p-5 h-32 bg-geo-obsidian/40">
                  <h3 className="font-display font-semibold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
