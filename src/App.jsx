import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import AudioPlayer from './components/AudioPlayer'

function App() {
  const musicUrl = 'https://cdn.pixabay.com/download/audio/2021/09/27/audio_2e8b21ea04.mp3?filename=romantic-ambient-10955.mp3'

  return (
    <div className="min-h-screen w-full bg-rose-50 text-rose-900">
      {/* Hero Section with Spline Cover */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/AHV4iNim7HKPpHMA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Romantic gradient veil */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/20 via-rose-50/40 to-rose-50" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
            <div className="backdrop-blur-sm bg-white/40 rounded-3xl border border-white/60 shadow-xl p-8 sm:p-12">
              <p className="text-rose-600 tracking-widest uppercase text-xs sm:text-sm font-semibold">We are getting married</p>
              <h1 className="mt-4 font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-rose-900 drop-shadow-md">
                Amelia & Theodore
              </h1>
              <p className="mt-4 text-rose-800/80 text-base sm:text-lg max-w-2xl">
                Join us for a celebration of love in a lush garden, where flowers whisper and time stands still.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#rsvp" className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-3 text-sm font-semibold shadow-md hover:bg-rose-700 transition-colors">
                  RSVP Now
                </a>
                <a href="#details" className="inline-flex items-center justify-center rounded-full bg-white text-rose-700 px-6 py-3 text-sm font-semibold shadow border border-rose-200 hover:bg-rose-50 transition-colors">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-[1] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,114,182,0.15),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            <Card title="The Ceremony" subtitle="June 21, 2026 · 4:00 PM">
              Under the canopy of ancient trees, we exchange vows surrounded by roses and songbirds.
            </Card>
            <Card title="The Reception" subtitle="Golden Garden Hall" >
              Starlit dinner, soft strings, and a dance floor woven with petals and light.
            </Card>
            <Card title="Dress Code" subtitle="Garden Formal">
              Pastel hues, flowing fabrics, and florals. Let the garden inspire your attire.
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="relative py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="rounded-3xl border border-rose-200/60 bg-rose-50/60 p-8 sm:p-12 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-serif text-rose-900">RSVP</h2>
            <p className="mt-2 text-rose-700/80">We would be honored to celebrate with you. Kindly let us know if you can attend.</p>
            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Full name" className="sm:col-span-1 col-span-2 rounded-xl border border-rose-200/70 bg-white px-4 py-3 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300" />
              <input type="email" placeholder="Email address" className="sm:col-span-1 col-span-2 rounded-xl border border-rose-200/70 bg-white px-4 py-3 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300" />
              <select className="col-span-2 rounded-xl border border-rose-200/70 bg-white px-4 py-3 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300">
                <option>Joyfully Accept</option>
                <option>Regretfully Decline</option>
              </select>
              <textarea placeholder="Leave a message for the couple" className="col-span-2 min-h-[120px] rounded-xl border border-rose-200/70 bg-white px-4 py-3 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300" />
              <button type="button" className="col-span-2 inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-3 text-sm font-semibold shadow-md hover:bg-rose-700 transition-colors">
                Send Wishes
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Audio Controls */}
      <AudioPlayer src={musicUrl} />

      {/* Footer */}
      <footer className="py-10 text-center text-rose-600/80 bg-gradient-to-b from-transparent to-rose-50">
        <p>With love, from our hearts to yours.</p>
      </footer>
    </div>
  )
}

function Card({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/70 border border-rose-200/70 p-6 shadow-sm backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold text-rose-900">{title}</h3>
      <p className="text-sm text-rose-500 mb-3">{subtitle}</p>
      <p className="text-rose-800/90">{children}</p>
    </motion.div>
  )
}

export default App
