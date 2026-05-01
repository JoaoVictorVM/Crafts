import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DesignSystem from "../pages/DesignSystem";
import Components from "../pages/Components";
import { Devroast } from "../pages/Devroast";
import PomodoroIdleGame from "../pages/PomodoroIdleGame";
import WebhookInspector from "../pages/WebhookInspector";
import TerminalTypewriter from "../pages/TerminalTypewriter";
import SkillBarsPage from "../pages/SkillBars";
import ProjectCardFlipPage from "../pages/ProjectCardFlip";
import MoodMusicPlayerPage from "../pages/MoodMusicPlayer";
import ImageCursorHoverListPage from "../pages/ImageCursorHoverList";
import RadialContextMenuPage from "../pages/RadialContextMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/designsystem",
    element: <DesignSystem />,
  },
  {
    path: "/designsystem/devroast",
    element: <Devroast />,
  },
  {
    path: "/designsystem/pomodoroidlegame",
    element: <PomodoroIdleGame />,
  },
  {
    path: "/designsystem/webhookinspector",
    element: <WebhookInspector />,
  },
  {
    path: "/components",
    element: <Components />,
  },
  {
    path: "/components/terminal-typewriter",
    element: <TerminalTypewriter />,
  },
  {
    path: "/components/skill-bars",
    element: <SkillBarsPage />,
  },
  {
    path: "/components/project-card-flip",
    element: <ProjectCardFlipPage />,
  },
  {
    path: "/components/mood-music-player",
    element: <MoodMusicPlayerPage />,
  },
  {
    path: "/components/image-cursor-hover-list",
    element: <ImageCursorHoverListPage />,
  },
  {
    path: "/components/radial-context-menu",
    element: <RadialContextMenuPage />,
  },
]);