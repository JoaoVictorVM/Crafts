import { RadialContextMenu } from "../components/radial-context-menu/RadialContextMenu";

export default function RadialContextMenuPage() {
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
      <RadialContextMenu />
    </div>
  );
}