import FadeUp from './FadeUp'
import { Check, Fuel, Trophy } from 'lucide-react'

const steps = [
  {
    n: 1,
    title: 'Monte sua lista',
    desc: 'Adicione os produtos que deseja comprar. Use a busca rápida, escolha pelo catálogo ou adicione diretamente pelo nome.',
    active: true,
  },
  {
    n: 2,
    title: 'Configure seu veículo',
    desc: 'Informe o modelo e a eficiência (km/L) do seu carro. O app calcula o custo real de ida e volta a cada supermercado.',
  },
  {
    n: 3,
    title: 'Veja onde economizar',
    desc: 'O app gera um ranking com custo total de cada opção (produtos + combustível). Escolha o melhor e vá comprar com confiança!',
  },
]

const listItems = [
  { checked: true,  label: 'Leite Integral 1L', qty: '× 2' },
  { checked: true,  label: 'Arroz Branco 5kg',  qty: '× 1' },
  { checked: false, label: 'Frango Filé 1kg',   qty: '× 1' },
  { checked: false, label: 'Iogurte Natural',    qty: '× 3' },
]

function ListPreview() {
  return (
    <div className="card rounded-2xl p-7">
      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Sua Lista de Hoje</h4>

      <div className="space-y-2 mb-5">
        {listItems.map(item => (
          <div
            key={item.label}
            className="flex items-center justify-between p-3 rounded-xl"
            style={item.checked
              ? { background: 'rgba(163,230,21,.07)', border: '1px solid rgba(163,230,21,.14)' }
              : { background: '#27272A' }
            }
          >
            <div className="flex items-center gap-3">
              {item.checked ? (
                <div className="w-5 h-5 rounded flex items-center justify-center bg-primary flex-shrink-0">
                  <Check className="w-3 h-3 text-dark" strokeWidth={3.5} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded border flex-shrink-0" style={{ borderColor: 'rgba(255,255,255,.2)' }} />
              )}
              <span className={`text-sm font-medium ${item.checked ? 'text-text-main' : 'text-text-muted'}`}>
                {item.label}
              </span>
            </div>
            <span className="text-xs text-text-muted">{item.qty}</span>
          </div>
        ))}
      </div>

      <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,.07)' }} />

      <div className="rounded-xl p-4" style={{ background: 'linear-gradient(135deg,rgba(163,230,21,.1),rgba(163,230,21,.02))', border: '1px solid rgba(163,230,21,.25)' }}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="text-xs font-semibold text-primary inline-flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" /> Melhor opção
            </div>
            <div className="text-lg font-black text-text-main mt-0.5">Bistek</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-black text-primary">R$ 87,40</div>
            <div className="text-xs text-text-muted">total c/ combustível</div>
          </div>
        </div>
        <div className="flex gap-5 text-xs text-text-muted">
          <span>Produtos: R$ 79,80</span>
          <span className="inline-flex items-center gap-1">
            <Fuel className="w-3 h-3" /> R$ 7,60
          </span>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="alt-bg py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Steps */}
          <FadeUp>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-7">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Como Funciona</span>
            </div>
            <h2 className="text-4xl font-black mb-3 text-text-main">
              3 passos para<br /><span className="gradient-text">economizar mais</span>
            </h2>
            <p className="text-text-muted mb-11">Simples, rápido e eficiente. Em menos de 2 minutos você já sabe onde comprar.</p>

            <div className="space-y-9">
              {steps.map((s, i) => (
                <div key={s.n} className={`flex gap-5 ${i < steps.length - 1 ? 'step-connector' : ''}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={s.active
                      ? { background: 'linear-gradient(135deg,#A3E615,#8BC811)', boxShadow: '0 0 48px rgba(163,230,21,.3)' }
                      : undefined}
                  >
                    {!s.active && <div className="icon-wrap w-full h-full rounded-xl flex items-center justify-center">
                      <span className="text-primary font-black text-lg">{s.n}</span>
                    </div>}
                    {s.active && <span className="text-dark font-black text-lg">{s.n}</span>}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-lg mb-1 text-text-main">{s.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Preview */}
          <FadeUp delay={0.15}>
            <ListPreview />
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
