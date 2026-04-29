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
    name: "Dev Roast",
    slug: "devroast",
    video: "/videos/devroast.webm",
    aspectRatio: "3/2",
    nameColor: "#ffffff",
  },
  {
    id: 2,
    name: "Pomodoro Idle Game",
    slug: "pomodoroidlegame",
    video: "/videos/pomodoroidlegame.webm",
    aspectRatio: "4/3",
    nameColor: "#ffffff",
  },
  {
    id: 3,
    name: "Webhook Inspector",
    slug: "webhookinspector",
    video: "/videos/webhookinspector.webm",
    aspectRatio: "16/9",
    nameColor: "#ffffff",
  },
  {
    id: 4,
    name: "Combobox",
    slug: "combobox",
    video: "/videos/devroast.webm",
    aspectRatio: "4/3",
    nameColor: "#ffffff",
  },
  {
    id: 5,
    name: "Sidebar",
    slug: "sidebar",
    video: "/videos/pomodoroidlegame.webm",
    aspectRatio: "3/2",
    nameColor: "#ffffff",
  },
  {
    id: 6,
    name: "Data Table",
    slug: "data-table",
    video: "/videos/webhookinspector.webm",
    aspectRatio: "16/9",
    nameColor: "#ffffff",
  },
];
