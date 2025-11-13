import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (!audioRef.current) return
    // Try to autoplay muted to comply with browser policies
    audioRef.current.muted = true
    audioRef.current.volume = 0.6
    audioRef.current.loop = true
    const playAttempt = audioRef.current.play()
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {
        // Autoplay failed; wait for user interaction
        setIsPlaying(false)
      })
    } else {
      setIsPlaying(true)
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (_) {
        // ignore
      }
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    const next = !isMuted
    audioRef.current.muted = next
    setIsMuted(next)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 backdrop-blur-md bg-white/60 shadow-lg rounded-full px-4 py-2 border border-white/40">
      <audio ref={audioRef} src={src} preload="auto" />
      <button
        onClick={togglePlay}
        className="h-10 w-10 grid place-items-center rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <button
        onClick={toggleMute}
        className="h-10 w-10 grid place-items-center rounded-full bg-white text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <span className="text-sm text-rose-700/80 font-medium pr-1">Background music</span>
    </div>
  )
}
