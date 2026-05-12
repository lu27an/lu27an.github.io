import { Target, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-geo-cyan rounded-full"></span>
              Análise de Perfil
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 space-y-4 col-span-2">
              <p className="text-slate-300 leading-relaxed text-lg">
                Profissional de Topografia e Geotecnologia com 4 anos de experiência em geoprocessamento aplicado na área agrícola. 
                Atuo diariamente com AutoCAD, QGIS, AgroCAD e InfoRow, desenvolvendo mapas agrícolas, análises espaciais e 
                projetos voltados à eficiência operacional no campo.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Minha missão é garantir que cada hectare cultivado opere com o máximo de precisão, 
                reduzindo pisoteio, otimizando paralelismo e promovendo a conservação do solo através de inteligência geográfica e tomadas de decisão baseadas em dados.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-6 flex items-start gap-4 h-[calc(50%-0.5rem)]">
                <div className="p-3 bg-geo-obsidian/80 border border-slate-800 rounded-lg text-geo-cyan">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Formação</h3>
                  <p className="text-sm text-slate-400 mt-1">Engenharia Agronômica</p>
                  <p className="text-xs text-slate-500">UniToledo Wyden</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex items-start gap-4 h-[calc(50%-0.5rem)]">
                <div className="p-3 bg-geo-obsidian/80 border border-slate-800 rounded-lg text-geo-green">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Precisão</h3>
                  <p className="text-sm text-slate-400 mt-1">RTK / RTX / Drones</p>
                  <p className="text-xs text-slate-500">Projetos de sistematização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
