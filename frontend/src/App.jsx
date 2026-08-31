import { useEffect, useState } from 'react'
import { CalendarDays, ChevronDown, Clock3, MapPin, Navigation, Share2 } from 'lucide-react'
import { wedding } from './data/wedding'
import { events } from './data/events'
import './App.css'
import './gallery.css'
import './hero-background.css'

const reception = events.find((event) => event.id === 'reception')
const target = new Date(`${reception.date}T18:00:00`)
const copy = {
  en: {
    nav: ['Our story', 'Events', 'Gallery', 'Venue'], blessings: 'WITH THE BLESSINGS OF OUR FAMILIES', receptionTamil: 'Reception celebration',
    month: 'NOVEMBER', day: 'SATURDAY · 2026', receptionTime: 'RECEPTION · 6:00 PM – 9:00 PM',
    joy: 'A JOYOUS CELEBRATION', title: <>Two souls, one<br /><em>beautiful</em> journey.</>,
    invite: 'With grateful hearts and the blessings of our beloved families, we invite you to share in the beginning of our new chapter together.',
    tamilInvite: 'We warmly invite you to celebrate this beautiful new chapter of our lives with us.',
    countdown: 'COUNTING DOWN TO THE RECEPTION', units: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'], celebration: 'THE CELEBRATION', journey: <>Our wedding <em>journey</em></>,
    engagement: 'Engagement', wedding: 'Wedding', reception: 'Reception', coming: 'Details coming soon', invited: 'YOU ARE INVITED TO', receptionTitle: <>The <em>reception</em></>,
    receptionCopy: 'An evening of warmth, laughter and togetherness as we celebrate this happy occasion.', receptionLabel: 'Reception', date: 'Saturday, 14 November 2026', directions: 'Get directions',
    venueEyebrow: 'CELEBRATE WITH US', venueTitle: <>A gathering to<br /><em>remember</em></>, save: 'Save the date', location: 'View location', footer: 'RECEPTION', galleryEyebrow: 'OUR MOMENTS', galleryTitle: <>Moments to <em>treasure</em></>, galleryText: 'Our beautiful moments will be added soon.', reachUs: 'REACH US', contactSoon: 'Contact details will be shared soon.',
  },
  ta: {
    nav: ['எங்கள் கதை', 'நிகழ்வுகள்', 'புகைப்படங்கள்', 'இடம்'], blessings: 'எங்கள் குடும்பங்களின் ஆசியுடன்', receptionTamil: 'வரவேற்பு விழா',
    month: 'நவம்பர்', day: 'சனிக்கிழமை · 2026', receptionTime: 'வரவேற்பு · மாலை 6:00 – 9:00',
    joy: 'மகிழ்ச்சியான கொண்டாட்டம்', title: <>இரு உள்ளங்கள்,<br /><em>அழகிய</em> பயணம்.</>,
    invite: 'எங்கள் அன்பான குடும்பங்களின் ஆசியுடன், எங்கள் வாழ்வின் புதிய அத்தியாயத்தை உங்களுடன் இணைந்து கொண்டாட அன்புடன் அழைக்கிறோம்.',
    tamilInvite: 'அன்பும் மகிழ்ச்சியும் நிறைந்த இந்த இனிய தருணத்தில் எங்களுடன் இணைந்திருங்கள்.',
    countdown: 'வரவேற்பு விழாவிற்கு இன்னும்', units: ['நாட்கள்', 'மணிகள்', 'நிமிடங்கள்', 'விநாடிகள்'], celebration: 'கொண்டாட்டம்', journey: <>எங்கள் திருமண <em>பயணம்</em></>,
    engagement: 'நிச்சயதார்த்தம்', wedding: 'திருமணம்', reception: 'வரவேற்பு', coming: 'விவரங்கள் விரைவில்', invited: 'உங்களை அன்புடன் அழைக்கிறோம்', receptionTitle: <><em>வரவேற்பு</em> விழா</>,
    receptionCopy: 'அன்பு, சிரிப்பு மற்றும் மகிழ்ச்சியால் நிறைந்த இந்த இனிய மாலைப் பொழுதில் எங்களுடன் இணைந்திருங்கள்.', receptionLabel: 'வரவேற்பு', date: 'சனிக்கிழமை, 14 நவம்பர் 2026', directions: 'வழிகாட்டுதல்',
    venueEyebrow: 'எங்களுடன் கொண்டாடுங்கள்', venueTitle: <>மறக்க முடியாத<br /><em>ஒரு சந்திப்பு</em></>, save: 'தேதியைச் சேமிக்கவும்', location: 'இடத்தைக் காண்க', footer: 'வரவேற்பு விழா', galleryEyebrow: 'எங்கள் நினைவுகள்', galleryTitle: <>பொக்கிஷமான <em>தருணங்கள்</em></>, galleryText: 'எங்களின் அழகிய தருணங்கள் விரைவில் சேர்க்கப்படும்.', reachUs: 'தொடர்புக்கு', contactSoon: 'தொடர்பு விவரங்கள் விரைவில் பகிரப்படும்.',
  },
}

function useCountdown() {
  const [time, setTime] = useState(() => Math.max(0, target - Date.now()))
  useEffect(() => { const timer = setInterval(() => setTime(Math.max(0, target - Date.now())), 1000); return () => clearInterval(timer) }, [])
  let rest = time
  return [86400000, 3600000, 60000, 1000].map((unit) => { const value = Math.floor(rest / unit); rest %= unit; return String(value).padStart(2, '0') })
}

export default function App() {
  const [language, setLanguage] = useState('en')
  const t = copy[language]
  const countdown = useCountdown()
  const eventNames = { engagement: t.engagement, reception: t.reception, wedding: t.wedding }
  const dayDate = new Intl.DateTimeFormat(language === 'ta' ? 'ta-IN' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).format(target).toUpperCase()
  const saveDate = () => navigator.clipboard?.writeText(`${wedding.brideName} & ${wedding.groomName} — ${t.reception} — ${dayDate}`)
  return <main lang={language}>
    <nav className="nav"><a className="monogram" href="#home">H<span>♥</span>S</a><div className="nav-links"><a href="#story">{t.nav[0]}</a><a href="#events">{t.nav[1]}</a><a href="#gallery">{t.nav[2]}</a><a href="#venue">{t.nav[3]}</a></div><button className="language" onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}>{language === 'en' ? 'தமிழ்' : 'EN'}</button></nav>
    <section className="hero" id="home"><div className="arch arch-left" /><div className="arch arch-right" /><p className="eyebrow">{t.blessings}</p><div className="leaf-line">✦</div><h1>{wedding.groomName}<span>&amp;</span>{wedding.brideName}</h1><p className="hero-tamil">{t.receptionTamil}</p><div className="date-block"><span>14</span><div><b>{t.month}</b><small>{t.day}</small></div><span>26</span></div><p className="hero-reception">{t.receptionTime}</p><a className="down" href="#invitation" aria-label="Scroll"><ChevronDown size={19} /></a></section>
    <section className="invitation" id="invitation"><p className="eyebrow dark">{t.joy}</p><h2>{t.title}</h2><p className="copy">{t.invite}</p><p className="tamil">{t.tamilInvite}</p><div className="lotus">✦</div></section>
    <section className="countdown-section"><p className="eyebrow">{t.countdown}</p><div className="countdown">{t.units.map((label, index) => <div key={label}><strong>{countdown[index]}</strong><span>{label}</span></div>)}</div></section>
    <section className="journey" id="story"><div className="section-title"><p className="eyebrow dark">{t.celebration}</p><h2>{t.journey}</h2></div><div className="timeline">{events.map((event) => <article key={event.id}><span className="event-number">{event.number}</span><div className="event-dot" /><p className="event-type">{language === 'ta' ? event.tamilName : event.name}</p><h3>{eventNames[event.id]}</h3><p>{event.date ? new Intl.DateTimeFormat(language === 'ta' ? 'ta-IN' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${event.date}T00:00:00`)) : t.coming}</p>{event.time && <p>{language === 'ta' ? 'மாலை 6:00 – 9:00' : event.time}</p>}</article>)}</div></section>
    <section className="reception" id="events"><div><p className="eyebrow">{t.invited}</p><h2>{t.receptionTitle}</h2><p className="reception-text">{t.receptionCopy}</p></div><div className="event-card"><p className="event-type">{t.receptionLabel}</p><h3>{t.reception}</h3><div className="gold-rule" /><p><CalendarDays size={17} /> {t.date}</p><p><Clock3 size={17} /> {language === 'ta' ? 'மாலை 6:00 – 9:00' : reception.time}</p><p><MapPin size={17} /> {reception.venue}<br /><i>{reception.address}</i></p><a href={reception.mapUrl} target="_blank" rel="noreferrer"><Navigation size={16} /> {t.directions}</a></div></section>
    <section className="gallery" id="gallery"><p className="eyebrow dark">{t.galleryEyebrow}</p><h2>{t.galleryTitle}</h2><div className="gallery-grid"><div>✦</div><div>♥</div><div>✦</div></div><p>{t.galleryText}</p></section>
    <section className="venue" id="venue"><p className="eyebrow dark">{t.venueEyebrow}</p><h2>{t.venueTitle}</h2><p>{reception.venue}<br />{reception.address}</p><div className="actions"><button onClick={saveDate}><Share2 size={16} /> {t.save}</button><a href={reception.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> {t.location}</a></div></section>
    <footer><span>H ♥ S</span><p>HARI PRIYA &amp; SANKAR KUMAR</p><small>14 · 11 · 2026 · {t.footer}</small><div className="reach-us"><b>{t.reachUs}</b><p>{t.contactSoon}</p></div></footer>
  </main>
}
