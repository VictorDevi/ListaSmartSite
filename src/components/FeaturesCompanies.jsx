import FadeUp from './FadeUp'

const featureList = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Preços atualizados por consumidores reais',
    desc: 'Usuários escaneiam notas fiscais após cada compra, gerando um banco de dados atualizado constantemente — sem custo para o supermercado.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    ),
    title: 'Inteligência competitiva',
    desc: 'Entenda como seus preços se comparam com a concorrência e tome decisões baseadas em dados reais do mercado local.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Parceria estratégica sem fricção',
    desc: 'Processo simples de cadastro. Seja parceiro oficial e tenha seu supermercado em destaque para compradores da sua região.',
  },
]

const benefits = [
  { emoji: '📍', title: 'Presença Local',     desc: 'Visibilidade para compradores na sua cidade' },
  { emoji: '📈', title: 'Mais Tráfego',       desc: 'Clientes chegam prontos e decididos a comprar' },
  { emoji: '🎯', title: 'Público Qualificado', desc: 'Consumidores que pesquisam antes de comprar' },
  { emoji: '🤝', title: 'Fácil Integração',   desc: 'Onboarding simples e suporte dedicado' },
]

export default function FeaturesCompanies() {
  return (
    <section id="empresas" className="company-bg py-24 px-5">
      <div className="max-w-7xl mx-auto">

        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Para Empresas</span>
          </div>
          <h2 className="text-4xl font-black mb-4 text-text-main">
            Conecte-se com clientes<br /><span className="gradient-text">que já querem comprar</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Supermercados e varejistas presentes no Lista Smart têm acesso direto a consumidores ativos que já estão planejando suas compras antes de sair de casa.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Big highlight */}
          <FadeUp>
            <div className="card rounded-2xl p-8 h-full" style={{ background: 'linear-gradient(135deg,rgba(163,230,21,.06),rgba(24,24,27,.85))' }}>
              <div className="icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A3E615" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3 text-text-main">Visibilidade para consumidores ativos</h3>
              <p className="text-text-muted leading-relaxed mb-7">
                Usuários do Lista Smart planejam as compras antes de sair. Estar no app significa aparecer exatamente no momento da decisão — quando o cliente decide para onde vai.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-primary mb-1">95%</div>
                  <div className="text-xs text-text-muted">dos usuários compram no supermercado indicado</div>
                </div>
                <div className="stat-card rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-primary mb-1">3×</div>
                  <div className="text-xs text-text-muted">mais visitas de usuários que planejam as compras</div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Feature list */}
          <FadeUp delay={0.12} className="flex flex-col gap-5">
            {featureList.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 flex gap-4">
                <div className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1.5 text-text-main">{f.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </FadeUp>
        </div>

        {/* Benefits */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map(b => (
              <div key={b.title} className="card rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">{b.emoji}</div>
                <h4 className="font-bold text-sm mb-1 text-text-main">{b.title}</h4>
                <p className="text-text-muted text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp className="text-center">
          <a href="#contato" className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
            </svg>
            Quero ser parceiro
          </a>
          <p className="text-text-muted text-sm mt-3">Entre em contato e descubra como crescer com Lista Smart</p>
        </FadeUp>

      </div>
    </section>
  )
}
