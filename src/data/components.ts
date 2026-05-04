export interface ComponentItem {
  id: number;
  name: string;
  slug: string;
  video: string;
  aspectRatio: string;
  nameColor: string;
}

export const componentItems: ComponentItem[] = [
  {
    id: 1,
    name: "Terminal Typewriter",
    slug: "terminal-typewriter",
    video: "/videos/components/terminaltypewriter.webm",
    aspectRatio: "4/3",
    nameColor: "#ffffff",
  },
  {
    id: 2,
    name: "Skill Bars",
    slug: "skill-bars",
    video: "/videos/components/skillbars.webm",
    aspectRatio: "2/1",
    nameColor: "#ffffff",
  },
  {
    id: 3,
    name: "Project Card Flip",
    slug: "project-card-flip",
    video: "/videos/components/projectcardflip.webm",
    aspectRatio: "3/2",
    nameColor: "#ffffff",
  },
  {
    id: 4,
    name: "Mood Music Player",
    slug: "mood-music-player",
    video: "/videos/components/moodmusicplayer.webm",
    aspectRatio: "3/2",
    nameColor: "#ffffff",
  },
  {
    id: 5,
    name: "Image Cursor Hover List",
    slug: "image-cursor-hover-list",
    video: "/videos/components/imagecursorhover.webm",
    aspectRatio: "4/3",
    nameColor: "#ffffff",
  },
  {
    id: 6,
    name: "Radial Context Menu",
    slug: "radial-context-menu",
    video: "/videos/components/radialcontextmenu.webm",
    aspectRatio: "4/3",
    nameColor: "#ffffff",
  },
];
