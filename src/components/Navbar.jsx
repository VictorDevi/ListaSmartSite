import { useState, useEffect } from 'react'

const links = [
  { href: '#usuarios',      label: 'Para Usuários' },
  { href: '#empresas',      label: 'Para Empresas' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#smart-coins',   label: 'Smart Coins' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const ids = ['usuarios', 'empresas', 'como-funciona', 'smart-coins', 'download']
    const onScroll = () => {
      let cur = ''
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      })
      setActiveId(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav-bg fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary flex-shrink-0">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
          </div>
          <span className="text-base font-bold text-text-main">
            Lista <span className="text-primary">Smart</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: activeId === href.slice(1) ? '#A3E615' : '#A1A1AA' }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#download" className="hidden md:inline-flex btn-primary px-5 py-2.5 rounded-xl text-sm">
            Baixar App
          </a>
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 text-text-muted">
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col px-5 pb-5 gap-1" style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-text-muted border-b"
              style={{ borderColor: 'rgba(255,255,255,.06)' }}
            >
              {label}
            </a>
          ))}
          <a href="#download" onClick={() => setOpen(false)} className="btn-primary block text-center py-3 rounded-xl text-sm mt-3">
            Baixar App
          </a>
        </div>
      )}
    </nav>
  )
}
