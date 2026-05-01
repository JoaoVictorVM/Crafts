import { useState, type ReactNode } from "react";
import { MoodButton } from "./MoodButton";
import { AudioPlayer } from "./AudioPlayer";

export interface Track {
  id: string;
  icon: ReactNode;
  label: string;
  name: string;
  artist: string;
  accentColor: string;
  audioSrc: string;
}

interface MoodMusicPlayerProps {
  tracks: Track[];
}

export function MoodMusicPlayer({ tracks }: MoodMusicPlayerProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const track = tracks[activeIdx];

  return (
    <div
      style={{
        width: 440,
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        {tracks.map((t, i) => (
          <MoodButton
            key={t.id}
            icon={t.icon}
            label={t.label}
            accentColor={t.accentColor}
            isActive={activeIdx === i}
            onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>

      <AudioPlayer
        key={track.id}
        name={track.name}
        artist={track.artist}
        audioSrc={track.audioSrc}
        accentColor={track.accentColor}
      />
    </div>
  );
}