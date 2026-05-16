import { createHashRouter } from "react-router";
import { Root } from "./pages/Root";
import { Discovery } from "./pages/Discovery";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Discovery,
      },
      {
        path: ":month",
        Component: Discovery,
      },
    ],
  },
]);
