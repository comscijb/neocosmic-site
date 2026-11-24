import { socials, type Copy } from '../content'

export function Social({t}:{t:Copy}) {
  const feeds = [
    ['Instagram','https://www.instagram.com/neocosmicmusic/embed',400],
    ['Facebook','https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fneocosmicmusic&tabs=timeline&width=500&height=300',300]
  ] as const
  return <section className="section" id="social"><h2>{t.social}</h2>
    <div className="networks">{socials.map(([name,href])=><a key={name} href={href}>{name} ↗</a>)}</div>
    {feeds.map(([name,src,height])=><details key={name} className="social-feed"><summary>{name} · Feed</summary>
      <iframe title={name+' · Neocosmic'} src={src} height={height} loading="lazy" />
    </details>)}
  </section>
}

