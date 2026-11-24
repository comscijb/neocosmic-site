export type Language = 'pt' | 'en'
export const spotify = 'https://open.spotify.com/artist/6xl4dbT3bCtvvIq2sRi50j'
export const soundcloud = 'https://soundcloud.com/neocosmicmusic'
export const mix = soundcloud + '/seed-of-consciousness-set'
export const socials = [
  ['Spotify', spotify], ['SoundCloud', soundcloud],
  ['YouTube', 'https://www.youtube.com/@neocosmicmusic1552'],
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
      'Neocosmic é mais que psytrance — é um antídoto para a rotina acelerada e a desconexão que consomem a vida moderna. Com atmosferas místicas e melodias elevadas, o projeto desperta a fagulha divina dentro de cada pessoa, transformando a pista de dança em um espaço de transcendência, pertencimento e celebração. Cada apresentação é uma ponte entre o caos do cotidiano e a clareza de uma experiência espiritual coletiva.',
      'Por trás do Neocosmic está Jean, DJ formado pela AIMEC Porto Alegre e produtor com mais de 10 anos de experiência. Guiado pelos valores de liberdade, igualdade e fraternidade, ele traduz sua busca pessoal por evolução em sons que unem poder rítmico e profundidade espiritual, criando momentos inesquecíveis tanto para o público quanto para quem contrata suas performances.',
      'O projeto já chamou atenção internacional: foi finalista em um dos maiores remix contests do Brasil com a faixa “Cante Por Nós” (Vintage Culture, KVSH, Breno Miranda) na categoria High BPM. Suas tracks autorais também marcaram presença global, como “Imagination” (Top #33 Hype de Psytrance no Beatport) e “Parallel Reality” (mais de 100 mil streams no Spotify). Resultados que comprovam a força e o potencial de expansão do projeto.',
      'Com a missão de elevar consciências e inspirar mudanças, Neocosmic segue em evolução constante. Seus shows entregam tanto introspecção quanto energia explosiva, gerando experiências que ficam gravadas na memória. Para fãs, contratantes e agências, o projeto oferece não apenas música, mas um produto cultural diferenciado: uma fusão de arte, espiritualidade e performance capaz de transformar qualquer evento em algo maior.'
    ],
    more: 'Release completo', social: 'Redes sociais', contact: 'Bookings e parcerias', kit: 'Baixar presskit', kitInfo: 'Dossiês em português e inglês, foto e logo', close: 'Fechar player', open: 'Abrir player', skip: 'Ir para o conteúdo', rights: 'Todos os direitos reservados.'
  },
  en: {
    nav: ['About', 'Music', 'Social', 'Contact'], role: 'DJ & producer', genre: 'Psytrance',
    tagline: 'Transcendence and spiritual elevation through psytrance.',
    listen: 'Listen to the mix', bookings: 'Bookings', featured: 'Featured mix',
    music: 'Music', artist: 'The project', records: 'Releases', play: 'Listen on', watch: 'Visit channel',
    bio: [
      'Neocosmic is more than just psytrance—it’s an antidote to the fast-paced routine and disconnection that consume modern life. With mystical atmospheres and uplifting melodies, the project awakens the divine spark within each person, transforming the dance floor into a space of transcendence, belonging, and celebration. Each performance serves as a bridge between the chaos of everyday life and the clarity of a collective spiritual experience.',
      'Behind Neocosmic is Jean, a DJ trained at AIMEC Porto Alegre and a producer with over 10 years of experience. Guided by the values of liberty, equality, and fraternity, he translates his personal quest for evolution into sounds that unite rhythmic power and spiritual depth, creating unforgettable moments for both the audience and those who book his performances.',
      'The project has already garnered international attention: it was a finalist in one of Brazil’s largest remix contests with the track “Cante Por Nós” (Vintage Culture, KVSH, Breno Miranda) in the High BPM category. His original tracks have also made a global impact, such as “Imagination” (Top #33 on Beatport’s Psytrance Hype chart) and “Parallel Reality” (over 100,000 streams on Spotify). These results demonstrate the project’s strength and potential for growth.',
      'With a mission to raise awareness and inspire change, Neocosmic continues to evolve. Their shows deliver both introspection and explosive energy, creating experiences that remain etched in the memory.'
    ],
    more: 'Full release', social: 'Social channels', contact: 'Bookings and collaborations', kit: 'Download press kit', kitInfo: 'Portuguese and English dossiers, photo and logo', close: 'Close player', open: 'Open player', skip: 'Skip to content', rights: 'All rights reserved.'
  }
}
export type Copy = (typeof content)[Language]


