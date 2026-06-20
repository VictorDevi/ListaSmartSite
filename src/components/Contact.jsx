import { useState } from 'react'
import FadeUp from './FadeUp'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSend(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contato" className="dark-bg py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3 text-text-main">Fale com a gente</h2>
          <p className="text-text-muted">Seja você um usuário com dúvidas ou uma empresa interessada em parceria, estamos aqui.</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form className="card rounded-2xl p-8 md:p-10" onSubmit={handleSend}>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="field w-full px-4 py-3 rounded-xl text-sm text-text-main transition-all"
                  style={{ background: '#27272A', border: '1px solid rgba(255,255,255,.09)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="field w-full px-4 py-3 rounded-xl text-sm text-text-main transition-all"
                  style={{ background: '#27272A', border: '1px solid rgba(255,255,255,.09)' }}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                Tipo de contato
              </label>
              <select
                className="field w-full px-4 py-3 rounded-xl text-sm text-text-main appearance-none transition-all"
                style={{ background: '#27272A', border: '1px solid rgba(255,255,255,.09)' }}
              >
                <option value="">Selecione...</option>
                <option>Sou usuário — tenho uma dúvida</option>
                <option>Sou empresa — quero ser parceiro</option>
                <option>Tenho uma sugestão</option>
                <option>Encontrei um bug</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                Mensagem
              </label>
              <textarea
                rows={4}
                placeholder="Escreva sua mensagem..."
                className="field w-full px-4 py-3 rounded-xl text-sm text-text-main resize-none transition-all"
                style={{ background: '#27272A', border: '1px solid rgba(255,255,255,.09)' }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-base font-bold transition-all"
              style={{
                background: sent
                  ? 'linear-gradient(135deg,#22C55E,#16A34A)'
                  : 'linear-gradient(135deg,#A3E615,#8BC811)',
                color: '#09090B',
                cursor: 'pointer',
              }}
            >
              {sent ? '✓ Mensagem enviada!' : 'Enviar mensagem'}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
