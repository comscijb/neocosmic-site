export type Language = 'pt' | 'en'
export const spotify = 'https://open.spotify.com/artist/0dyECszpDJX5TRTFqjNenx'
export const soundcloud = 'https://soundcloud.com/neocosmicmusic'
export const mix = soundcloud + '/cosmic-flow-live-mix-01'
export const socials = [
  ['Spotify', spotify], ['SoundCloud', soundcloud],
  ['YouTube', 'https://www.youtube.com/@neocosmicmusic'],
  ['Instagram', 'https://www.instagram.com/neocosmicmusic/'],
  ['Facebook', 'https://www.facebook.com/neocosmicmusic']
]
export const content = {
  pt: {
    nav: ['Sobre', 'Música', 'Social', 'Contato'], role: 'DJ & produtor', genre: 'Psytrance',
    tagline: 'Transcendência e elevação espiritual através do psytrance.',
    listen: 'Ouvir live mix', bookings: 'Bookings', featured: 'Mix em destaque',
    music: 'Música', artist: 'O projeto', records: 'Lançamentos', play: 'Ouvir no', watch: 'Visitar canal',
    bio: [
      'Neocosmic é o projeto de Jean, DJ e produtor que encontra no psytrance um caminho de evolução pessoal. Melodias elevadas, atmosferas místicas e ritmos envolventes levam conhecimento ancestral para a pista.',
      'Com mais de nove anos de experiência na música eletrônica e formação pela AIMEC Porto Alegre e Make Music Now, Jean traduz liberdade, igualdade e fraternidade em som.',
      'Finalista entre os cinco melhores do remix contest de “Cante Por Nós”, de Vintage Culture, KVSH e Breno Miranda, na categoria High BPM, também levou “Imagination” ao 33º lugar no Hype de Psytrance do Beatport. “Parallel Reality” ultrapassou 100 mil streams no Spotify.',
      'Em cada apresentação, Neocosmic busca transformar a pista em um espaço de conexão e levar essa experiência a festivais mundo afora.'
    ],
    more: 'Biografia completa', social: 'Redes sociais', contact: 'Bookings e parcerias', kit: 'Baixar presskit', kitInfo: 'Dossiês em português e inglês, foto e logo', close: 'Fechar player', open: 'Abrir player', skip: 'Ir para o conteúdo', rights: 'Todos os direitos reservados.'
  },
  en: {
    nav: ['About', 'Music', 'Social', 'Contact'], role: 'DJ & producer', genre: 'Psytrance',
    tagline: 'Transcendence and spiritual elevation through psytrance.',
    listen: 'Listen to the mix', bookings: 'Bookings', featured: 'Featured mix',
    music: 'Music', artist: 'The project', records: 'Releases', play: 'Listen on', watch: 'Visit channel',
    bio: [
      'Neocosmic is the project of Jean, a DJ and producer who finds a path to personal growth in psytrance. Soaring melodies, mystical atmospheres and driving rhythms bring ancestral knowledge to the dance floor.',
      'With over nine years in electronic music and training at AIMEC Porto Alegre and Make Music Now, Jean translates freedom, equality and fraternity into sound.',
      'A top-five finalist in the High BPM category of the “Cante Por Nós” remix contest by Vintage Culture, KVSH and Breno Miranda, Jean reached #33 on Beatport’s Psytrance Hype chart with “Imagination”. “Parallel Reality” passed 100,000 streams on Spotify.',
      'With every set, Neocosmic aims to turn the dance floor into a space for connection and bring that experience to festivals around the world.'
    ],
    more: 'Full biography', social: 'Social channels', contact: 'Bookings and collaborations', kit: 'Download press kit', kitInfo: 'Portuguese and English dossiers, photo and logo', close: 'Close player', open: 'Open player', skip: 'Skip to content', rights: 'All rights reserved.'
  }
}
export type Copy = (typeof content)[Language]

