import { Portal } from './Portal'
import type { Copy, Language } from '../content'
export const ids = ['sobre','musica','social','contato']

export function Header({t,lang}:{t:Copy,lang:Language}) {
  return <header className="mast"><a href="#inicio" aria-label="Neocosmic"><img src="/media/wordmark.png" alt="Neocosmic" /></a>
    <nav>{ids.map((id,i)=><a key={id} href={'#'+id}>{t.nav[i]}</a>)}</nav>
    <div className="languages" aria-label="Idioma / Language"><a href="/" lang="pt" aria-current={lang==='pt'?'page':undefined}>PT</a><span>/</span><a href="/en" lang="en" aria-current={lang==='en'?'page':undefined}>EN</a></div>
  </header>
}

export function Hero({t,start}:{t:Copy,start:()=>void}) {
  return <section className="hero" id="inicio">
    <div className="art"><Portal/><img className="portrait" src="/media/artist.png" alt="Jean, Neocosmic" fetchPriority="high"/></div>
    <div className="hero-copy"><p className="identity"><i/>{t.genre} <span>/</span> {t.role}</p>
    <h1>Neocosmic</h1><p className="tagline">{t.tagline}</p>
    <div className="actions"><button className="primary" onClick={start}><span aria-hidden="true">▶</span>{t.listen}</button><a className="secondary" href="#contato">{t.bookings}</a></div></div>
    <button className="mix-tag" onClick={start}><img src="/media/Capa Seed of Consciousness.jpg" alt=""/><span><small>{t.featured}</small><strong>Seed of Consciousness</strong></span><b aria-hidden="true">▂▅▇▃▆▂</b></button>
  </section>
}

