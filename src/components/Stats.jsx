import FadeUp from './FadeUp'

const stats = [
  { value: '4+',   label: 'Supermercados',   sub: 'comparados em tempo real' },
  { value: '30%',  label: 'Economia Média',  sub: 'por compra mensal' },
  { value: '100%', label: 'Gratuito',        sub: 'para usuários finais' },
  { value: '2min', label: 'Para decidir',    sub: 'onde comprar hoje' },
]

export default function Stats() {
  return (
    <section className="dark-bg py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="stat-card rounded-2xl p-8 text-center">
                <div className="text-5xl font-black text-primary mb-2">{s.value}</div>
                <div className="font-semibold text-sm text-text-main">{s.label}</div>
                <div className="text-text-muted text-xs mt-1">{s.sub}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
