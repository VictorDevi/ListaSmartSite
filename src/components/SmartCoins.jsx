import FadeUp from './FadeUp'
import { BarChart3, CircleDollarSign, Gift, Medal, Smartphone, Trophy } from 'lucide-react'

const tiers = [
  { Icon: Medal, name: 'Bronze', range: '0–500' },
  { Icon: Medal, name: 'Prata',  range: '500–1500', borderColor: 'rgba(192,192,192,.25)' },
  { Icon: Trophy, name: 'Ouro',   range: '1500+',    borderColor: 'rgba(255,215,0,.25)' },
]

const rewards = [
  {
    Icon: Gift,
    title: '500 Coins de Boas-Vindas',
    desc: 'Ao criar sua conta você já recebe 500 Smart Coins — chegando direto no nível Prata.',
  },
  {
    Icon: Smartphone,
    title: '+250 Coins por Nota Fiscal',
    desc: 'Cada nota escaneada rende 250 coins. Quanto mais você contribui, mais rápido avança de nível.',
  },
  {
    Icon: BarChart3,
    title: 'Acompanhe seu impacto',
    desc: 'Veja quantas notas escaneou, buscas realizadas e sua estimativa de economia total acumulada.',
  },
]

export default function SmartCoins() {
  return (
    <section id="smart-coins" className="dark-bg py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <FadeUp className="flex justify-center">
            <div className="relative">
              {/* Ring + static center */}
              <div className="relative w-52 h-52 mx-auto">
                {/* Only the ring spins */}
                <div
                  className="absolute inset-0 rounded-full spin-slow"
                  style={{ background: 'conic-gradient(#A3E615 0%,#4ADE80 30%,#A3E615 60%,transparent 60%)' }}
                />
                {/* Inner circle with content — does NOT spin */}
                <div
                  className="absolute rounded-full flex items-center justify-center"
                  style={{ inset: '3px', background: '#09090B' }}
                >
                  <div className="text-center">
                    <CircleDollarSign className="w-12 h-12 mx-auto mb-1 text-primary" strokeWidth={1.8} />
                    <div className="text-primary font-black text-sm">Smart Coins</div>
                  </div>
                </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-6 card rounded-xl px-4 py-2 shadow-xl">
                <div className="text-xs text-text-muted">Nível atual</div>
                <div className="text-primary font-bold text-sm inline-flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" /> Ouro
                </div>
              </div>
              <div className="absolute -bottom-2 -left-6 card rounded-xl px-4 py-2 shadow-xl">
                <div className="text-xs text-text-muted">Ganhe hoje</div>
                <div className="text-success font-bold text-sm">+250 coins</div>
              </div>
              </div>

              {/* Tier cards */}
              <div className="flex gap-3 mt-10 justify-center">
                {tiers.map(t => (
                  <div
                    key={t.name}
                    className="card rounded-xl px-4 py-3 text-center"
                    style={t.borderColor ? { borderColor: t.borderColor } : undefined}
                  >
                    <t.Icon className="w-5 h-5 mx-auto mb-1 text-primary" strokeWidth={1.8} />
                    <div className="text-xs font-bold text-text-main">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.range}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.12}>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-7">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Smart Coins</span>
            </div>
            <h2 className="text-4xl font-black mb-4 text-text-main">
              Economize <span className="gradient-text">e ainda</span><br />seja recompensado
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Contribua com o ecossistema escaneando notas fiscais e ganhe coins a cada scan. Acumule, suba de nível e desbloqueie benefícios exclusivos.
            </p>

            <div className="space-y-4">
              {rewards.map(r => (
                <div key={r.title} className="card rounded-xl p-5 flex gap-4">
                  <div className="icon-wrap w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    <r.Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-text-main">{r.title}</h4>
                    <p className="text-text-muted text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
