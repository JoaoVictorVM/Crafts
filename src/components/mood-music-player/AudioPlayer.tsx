import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  name: string;
  artist: string;
  audioSrc: string;
  accentColor: string;
}

function formatTime(s: number) {
  if (!isFinite(s) || isNaN(s)) return "--:--";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

const WAVEFORM_HEIGHTS = [4, 9, 14, 7, 11, 5, 13, 6, 10, 4];

export function AudioPlayer({ name, artist, audioSrc, accentColor }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = audioSrc;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [audioSrc]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: accentColor,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.3s ease",
        }}
      >
        {isPlaying ? (
          <Pause size={15} color="#fff" />
        ) : (
          <Play size={15} color="#fff" style={{ marginLeft: 2 }} />
        )}
      </button>

      {/* Track info + progress */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 7,
          }}
        >
          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'DM Sans', sans-serif",
                marginLeft: 5,
              }}
            >
              · {artist}
            </span>
          </div>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'DM Mono', monospace",
              flexShrink: 0,
              marginLeft: 10,
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <div
          onClick={handleProgressClick}
          style={{
            height: 3,
            background: "rgba(255,255,255,0.07)",
            borderRadius: 2,
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: accentColor,
              borderRadius: 2,
              transition: "background 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Waveform decoration */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          flexShrink: 0,
          height: 18,
        }}
      >
        {WAVEFORM_HEIGHTS.map((h, i) => (
          <div
            key={i}
            style={{
              width: 2.5,
              height: isPlaying ? h : Math.max(3, h * 0.35),
              background: isPlaying ? accentColor : "rgba(255,255,255,0.1)",
              borderRadius: 1,
              transition: `height 0.35s ease ${i * 0.04}s, background 0.3s ease`,
            }}
          />
        ))}
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}