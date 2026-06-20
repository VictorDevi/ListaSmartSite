import FadeUp from './FadeUp'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Comparação de Preços',
    desc: 'Veja instantaneamente qual supermercado é mais barato para a sua lista completa. Compara Bistek, Giassi, Angeloni e Atacadão.',
    bullets: ['Ranking do mais barato ao mais caro', 'Destaque visual da melhor opção', 'Preço total com e sem combustível'],
    big: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13"/>
        <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M3 22h18"/>
        <rect x="6" y="14" width="7" height="8"/>
      </svg>
    ),
    title: 'Custo do Combustível',
    desc: 'Informe seu veículo e eficiência (km/L). O app calcula quanto custa ir e voltar de cada supermercado, com opção de ativar ou desativar.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/>
        <circle cx="3" cy="6" r=".5" fill="#A3E615"/><circle cx="3" cy="12" r=".5" fill="#A3E615"/><circle cx="3" cy="18" r=".5" fill="#A3E615"/>
      </svg>
    ),
    title: 'Lista Inteligente',
    desc: 'Crie e organize múltiplas listas de compras. Busca rápida com histórico, adicione itens em segundos e veja o breakdown completo dos preços.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
        <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
        <line x1="7" y1="12" x2="17" y2="12"/>
      </svg>
    ),
    title: 'Scanner de Nota Fiscal',
    desc: 'Escaneie a nota fiscal (NFCe) com a câmera do celular. O app captura os preços automaticamente — e você ganha Smart Coins por cada scan.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Catálogo de Produtos',
    desc: 'Explore produtos com informações nutricionais completas (calorias, proteínas, carboidratos). Favoritos para acesso rápido e visão em grade ou lista.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
    title: 'Tema Claro e Escuro',
    desc: 'Interface refinada em modo claro ou escuro. Escolha o tema que prefere ou deixe sincronizar automaticamente com o sistema do dispositivo.',
  },
]

export default function FeaturesUsers() {
  return (
    <section id="usuarios" className="dark-bg py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Para Usuários</span>
          </div>
          <h2 className="text-4xl font-black mb-4 text-text-main">
            Tudo que você precisa<br /><span className="gradient-text">para economizar</span>
          </h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto">
            Funcionalidades pensadas para facilitar suas compras e fazer seu dinheiro render muito mais.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <div
                className="card rounded-2xl p-7 h-full"
                style={f.big ? { background: 'linear-gradient(135deg,rgba(163,230,21,.06),rgba(24,24,27,.85))' } : undefined}
              >
                <div className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-main">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{f.desc}</p>
                {f.bullets && (
                  <ul className="space-y-2">
                    {f.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-xs text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
