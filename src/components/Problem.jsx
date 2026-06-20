import FadeUp from './FadeUp'

const cards = [
  {
    emoji: '😤',
    title: 'Preços diferentes',
    desc: 'O mesmo produto pode custar até 40% mais caro em outro supermercado. Você está pagando o preço certo?',
  },
  {
    emoji: '⛽',
    title: 'Custo de ir até lá',
    desc: 'De nada adianta economizar R$10 no mercado se você gasta R$15 de gasolina para chegar até lá.',
  },
  {
    emoji: '📋',
    title: 'Lista desorganizada',
    desc: 'Esquecer itens, comprar duplicado, perder tempo. A lista de compras ainda vive no papel ou no WhatsApp?',
  },
]

export default function Problem() {
  return (
    <section className="alt-bg py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">O Problema</span>
          </div>
          <h2 className="text-4xl font-black mb-4 text-text-main">
            Quanto você desperdiça<br /><span className="gradient-text">sem perceber?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto">
            A diferença de preços entre supermercados pode ser enorme — e ainda tem o combustível para chegar lá.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.1}>
              <div className="card rounded-2xl p-7 text-center h-full">
                <div className="text-5xl mb-4">{c.emoji}</div>
                <h3 className="text-lg font-bold mb-2 text-text-main">{c.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
