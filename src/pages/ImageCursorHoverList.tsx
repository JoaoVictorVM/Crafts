import { ImageCursorList } from "../components/image-cursor-hover/ImageCursorList";

const ITEMS = [
  {
    index: "01",
    name: "E-commerce Dashboard",
    tags: "React · TypeScript · Recharts",
    caption: "dashboard & analytics",
  },
  {
    index: "02",
    name: "Chat em tempo real",
    tags: "Socket.io · Node.js · Redis",
    caption: "real-time messaging",
  },
  {
    index: "03",
    name: "Design System",
    tags: "Storybook · Figma tokens · CSS",
    caption: "components & tokens",
  },
  {
    index: "04",
    name: "Mobile App · Fintech",
    tags: "React Native · Expo · Stripe",
    caption: "payments & wallet",
  },
  {
    index: "05",
    name: "API REST + GraphQL",
    tags: "Node · PostgreSQL · Docker",
    caption: "backend & infra",
  },
];

export default function ImageCursorHoverListPage() {
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
      <ImageCursorList items={ITEMS} />
    </div>
  );
}