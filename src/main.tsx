import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Social } from './components/Social'
import { content } from './content'
import { Header, Hero } from './components/Hero'
import { Music, type Player } from './components/Music'
import '@fontsource/barlow-condensed/latin-700.css'
import '@fontsource-variable/dm-sans'
import './style.css'

const lang = location.pathname.replace(/\/$/,'')==='/en' ? 'en' : 'pt'
document.documentElement.lang = lang==='pt'?'pt-BR':'en'
const t = content[lang]

function App() {
  const [player,select] = useState<Player|null>(null)
  function start() {
    select('SoundCloud')
    requestAnimationFrame(()=>document.getElementById('active-player')?.scrollIntoView({block:'center'}))
  }
  return <><a className="skip" href="#main">{t.skip}</a><Header t={t} lang={lang}/><main id="main"><Hero t={t} start={start}/>
    <Music t={t} player={player} select={select}/>
    <section className="section bio" id="sobre"><img className="studio" src="/media/studio.webp" alt="Jean, Neocosmic" loading="lazy" /><div><h2>{t.artist}</h2><p>{t.bio[0]}</p><details><summary>{t.more}</summary>{t.bio.slice(1).map(p=><p key={p}>{p}</p>)}</details></div></section>
    <Social t={t}/>
    <section className="section contact" id="contato"><div><h2>{t.contact}</h2><a href="mailto:neocosmicmusic@gmail.com">neocosmicmusic@gmail.com</a><a href="https://wa.me/5549991088198">WhatsApp · +55 (49) 99108-8198</a></div><div><h3>Presskit</h3><p>{t.kitInfo}</p><a className="secondary" href="/media/neocosmic-presskit.zip" download>{t.kit} ↓</a></div></section>
  </main><footer><img src="/media/symbol.png" alt=""/><span>© Neocosmic DJ/Producer. {t.rights}</span></footer></>
}
createRoot(document.getElementById('root')!).render(<App/>)
