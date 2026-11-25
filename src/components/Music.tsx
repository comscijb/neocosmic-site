import { mix, spotify, type Copy } from '../content'
export type Player = 'SoundCloud' | 'Spotify'
export function Music({t,player,select}:{t:Copy,player:Player|null,select:(p:Player|null)=>void}) {
  const source = player==='Spotify' ? spotify.replace('/artist/', '/embed/artist/') : 'https://w.soundcloud.com/player/?url='+encodeURIComponent(mix)
  return <section className="section" id="musica"><div className="section-head"><h2>{t.music}</h2><a href={spotify}>Spotify ↗</a></div>
    <div className="library">
      <article className="mix-card"><img loading="lazy" src="/media/seed-of-consciousness.webp" alt="Seed of Consciousness"/><div><small>SoundCloud</small><h3>Seed of Consciousness</h3><p>DJ Set</p><button className="text-button" onClick={()=>select('SoundCloud')}>▶ {t.open}</button></div></article>
      <div className="releases"><h3>{t.records}</h3>{[['Vegas - Answer From the Stars (Neocosmic Remix)','answer-from-the-stars'],['Parallel Reality','parallel-reality']].map(([title,file])=><div className="release" key={file}><img loading="lazy" src={'/media/'+file+'.webp'} alt=""/><strong>{title}</strong></div>)}<button className="text-button" onClick={()=>select('Spotify')}>▶ {t.play} Spotify</button></div>
    </div>
    {player && <div className="player" id="active-player"><div><a href={player==='Spotify'?spotify:mix}>{t.play} {player} ↗</a><button onClick={()=>select(null)}>{t.close} ×</button></div><iframe key={player} title={player+' · Neocosmic'} src={source} height="166" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"/></div>}
  </section>
}
