import { Briefcase, Crosshair } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Bunge",
      role: "Assistente Topografia e Geotecnologia",
      period: "Julho de 2024 - Presente",
      location: "Guararapes, SP",
      color: "text-geo-cyan",
      borderColor: "border-geo-cyan",
      items: [
        "Produção de mapas agrícolas no AutoCAD e QGIS: pré-plantio, pós-plantio, sistematização, colheita e temáticos.",
        "Integração de bases georreferenciadas para múltiplas fazendas, com padronização de dados.",
        "Projetos de plantio e sistematização: Sulcação desenhada para colheita com piloto automático.",
        "Sistematização com terraços embutidos ou abaulados, favorecendo conservação do solo."
      ]
    },
    {
      company: "Viterra",
      role: "Assistente de Topografia e Geotecnologia",
      period: "Janeiro de 2022 - Julho de 2024",
      location: "Guararapes, SP",
      color: "text-geo-green",
      borderColor: "border-geo-green",
      items: [
        "Iniciei como Jovem Aprendiz (2022), evoluindo para Auxiliar e depois Assistente.",
        "Levantamentos topográficos com RTK/RTX e Drone para geração de Ortomosaicos.",
        "Análise de falhas de plantio, geração de relatórios de paralelismo e pisoteio.",
        "Restituição de linhas para colheita e elaboração de cadernos de safra."
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-24 relative bg-geo-midnight/30 border-y border-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-geo-green rounded-full"></span>
              Trajetória Operacional
            </h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-geo-obsidian bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg ${exp.borderColor} z-10`}>
                  <Crosshair size={16} className={exp.color} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-6 hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className={exp.color} />
                    <h3 className="font-display font-bold text-xl text-white">{exp.company}</h3>
                  </div>
                  <h4 className="text-slate-300 font-medium mb-2">{exp.role}</h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-display text-slate-500 uppercase tracking-wider mb-4">
                    <span>{exp.period}</span>
                    <span className="hidden md:inline">&bull;</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-400">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full ${exp.color} shrink-0`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
