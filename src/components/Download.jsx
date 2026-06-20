import FadeUp from './FadeUp'
import { ShoppingCart } from 'lucide-react'

const storeButtons = [
  {
    label: 'App Store',
    sub: 'Disponível na',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#FAFAFA">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.46.07 2.46.98 3.29.99 1.27-.06 2.44-1.03 3.79-.95 1.65.1 2.82.77 3.57 1.99-3.18 1.81-2.53 5.91.35 7.17-.72 1.67-1.62 3.34-3 4.68zM12.03 7.25c-.17-2.33 1.86-4.28 4.1-4.5.3 2.58-2.34 4.5-4.1 4.5z"/>
      </svg>
    ),
  },
  {
    label: 'Google Play',
    sub: 'Disponível no',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#FAFAFA">
        <path d="M3.18 23.76a2 2 0 0 1-.92-.22 1.8 1.8 0 0 1-.89-1.6V2.06A1.8 1.8 0 0 1 2.26.46l11.4 11.4zm16.3-9.64l-2.9-1.69-3.35 3.35 3.34 3.34 2.9-1.69a1.78 1.78 0 0 0 0-3.31zM2.68.08l12.14 12.14L11.47 15.6 2.68.08z"/>
      </svg>
    ),
  },
]

export default function Download() {
  return (
    <section id="download" className="alt-bg py-24 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <div
            className="card rounded-3xl p-12 md:p-16"
            style={{ background: 'linear-gradient(135deg,rgba(163,230,21,.07),rgba(24,24,27,.9))', border: '1px solid rgba(163,230,21,.18)' }}
          >
            <div className="icon-wrap w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 text-primary" strokeWidth={1.8} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-5 text-text-main">
              Comece a economizar<br /><span className="gradient-text">ainda hoje</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-md mx-auto">
              Baixe o Lista Smart gratuitamente e descubra quanto você pode economizar nas suas próximas compras.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-7">
              {storeButtons.map(s => (
                <a
                  key={s.label}
                  href="#"
                  className="glass flex items-center gap-3.5 px-6 py-4 rounded-xl transition-colors"
                  style={{ border: '1.5px solid rgba(255,255,255,.1)' }}
                >
                  {s.icon}
                  <div className="text-left">
                    <div className="text-xs text-text-muted">{s.sub}</div>
                    <div className="font-bold text-text-main">{s.label}</div>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-text-muted text-sm">Grátis · Sem anúncios · Android & iOS</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
