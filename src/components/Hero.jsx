import FadeUp from './FadeUp'
import { CircleDollarSign, Fuel, Trophy } from 'lucide-react'

const CartIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)

const AppleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#09090B">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.46.07 2.46.98 3.29.99 1.27-.06 2.44-1.03 3.79-.95 1.65.1 2.82.77 3.57 1.99-3.18 1.81-2.53 5.91.35 7.17-.72 1.67-1.62 3.34-3 4.68zM12.03 7.25c-.17-2.33 1.86-4.28 4.1-4.5.3 2.58-2.34 4.5-4.1 4.5z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#09090B">
    <path d="M3.18 23.76a2 2 0 0 1-.92-.22 1.8 1.8 0 0 1-.89-1.6V2.06A1.8 1.8 0 0 1 2.26.46l11.4 11.4zm16.3-9.64l-2.9-1.69-3.35 3.35 3.34 3.34 2.9-1.69a1.78 1.78 0 0 0 0-3.31zM2.68.08l12.14 12.14L11.47 15.6 2.68.08z"/>
  </svg>
)

function PhoneMockup() {
  return (
    <div className="phone w-64 md:w-72" style={{ height: 560, padding: '12px 10px' }}>
      <div className="phone-notch mb-3" />
      <div className="rounded-2xl overflow-hidden h-full" style={{ background: '#09090B' }}>

        {/* App header */}
        <div className="px-4 pt-3 pb-3" style={{ background: '#18181B', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-text-muted">Bom dia,</div>
              <div className="text-sm font-bold text-text-main">Victor</div>
            </div>
            <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg,#A3E615,#4ADE80)' }} />
          </div>
        </div>

        {/* Comparison */}
        <div className="px-3 py-3">
          <div className="text-xs font-semibold text-text-muted mb-2.5 uppercase tracking-wide">Comparação de Preços</div>

          <div className="rounded-xl p-3 mb-2" style={{ background: 'rgba(163,230,21,.1)', border: '1px solid rgba(163,230,21,.3)' }}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" /> Melhor Opção
              </span>
              <span className="text-xs font-black text-primary">R$ 87,40</span>
            </div>
            <div className="text-xs font-bold text-text-main mb-1">Bistek</div>
            <div className="flex gap-3 text-xs text-text-muted">
              <span>Produtos R$ 79,80</span>
              <span className="inline-flex items-center gap-1">
                <Fuel className="w-3 h-3" /> R$ 7,60
              </span>
            </div>
          </div>

          {[{ name: 'Giassi', price: 'R$ 91,20' }, { name: 'Atacadão', price: 'R$ 93,50' }, { name: 'Angeloni', price: 'R$ 96,10' }].map(s => (
            <div key={s.name} className="rounded-xl p-3 mb-2 flex justify-between items-center" style={{ background: '#18181B', border: '1px solid rgba(255,255,255,.07)' }}>
              <span className="text-xs font-bold text-text-main">{s.name}</span>
              <span className="text-xs text-text-muted">{s.price}</span>
            </div>
          ))}
        </div>

        {/* Smart Coins */}
        <div className="mx-3 mt-1 rounded-xl p-3" style={{ background: 'linear-gradient(135deg,rgba(163,230,21,.12),rgba(163,230,21,.02))', border: '1px solid rgba(163,230,21,.15)' }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-xs text-text-muted">Smart Coins</div>
              <div className="text-sm font-bold text-primary inline-flex items-center gap-1.5">
                <CircleDollarSign className="w-4 h-4" /> 1.250 coins
              </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ background: 'rgba(163,230,21,.2)', color: '#A3E615' }}>Prata</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.1)' }}>
            <div className="h-full rounded-full" style={{ width: '75%', background: 'linear-gradient(to right,#A3E615,#4ADE80)' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-24 pb-20 px-5">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <FadeUp>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">Disponível para Android e iOS</span>
            </div>

            <h1 className="hero-h1 text-5xl md:text-6xl font-black leading-tight mb-5 text-text-main">
              Compre mais<br />
              <span className="gradient-text">inteligente.</span><br />
              Economize de<br />verdade.
            </h1>

            <p className="text-text-muted text-lg leading-relaxed mb-9 max-w-md">
              Lista Smart compara preços em supermercados, calcula o custo do combustível e mostra exatamente onde você economiza mais — tudo em um só app gratuito.
            </p>

            <div className="flex flex-wrap gap-4 mb-11">
              <a href="#download" className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm">
                <AppleIcon /> App Store
              </a>
              <a href="#download" className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm">
                <GoogleIcon /> Google Play
              </a>
            </div>

            <div className="flex items-center gap-7">
              {[
                { value: '4+',   label: 'Supermercados' },
                { value: '100%', label: 'Gratuito' },
                { value: '30%',  label: 'Economia média' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-7">
                  {i > 0 && <div className="w-px h-10 bg-elevated" />}
                  <div>
                    <div className="text-2xl font-black text-primary">{s.value}</div>
                    <div className="text-xs text-text-muted mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Phone */}
          <FadeUp delay={0.1} className="flex justify-center float">
            <PhoneMockup />
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
