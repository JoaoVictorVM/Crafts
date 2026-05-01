import { Zap, Sparkles, Star, Moon } from "lucide-react";
import { MoodMusicPlayer } from "../components/mood-music-player/MoodMusicPlayer";
import type { Track } from "../components/mood-music-player/MoodMusicPlayer";

const TRACKS: Track[] = [
  {
    id: "focus",
    icon: <Zap size={20} />,
    label: "Focus",
    name: "Lofi beats · focus",
    artist: "chill study session",
    accentColor: "#F97316",
    audioSrc: "/audio/focus.mp3",
  },
  {
    id: "energia",
    icon: <Sparkles size={20} />,
    label: "Energia",
    name: "Phonk drive",
    artist: "high energy mix",
    accentColor: "#06B6D4",
    audioSrc: "/audio/energia.mp3",
  },
  {
    id: "criativo",
    icon: <Star size={20} />,
    label: "Criativo",
    name: "Ambient flow",
    artist: "creative space",
    accentColor: "#8B5CF6",
    audioSrc: "/audio/criativo.mp3",
  },
  {
    id: "noturno",
    icon: <Moon size={20} />,
    label: "Noturno",
    name: "Jazzhop nights",
    artist: "late night vibes",
    accentColor: "#4F46E5",
    audioSrc: "/audio/noturno.mp3",
  },
];

export default function MoodMusicPlayerPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <MoodMusicPlayer tracks={TRACKS} />
    </div>
  );
}