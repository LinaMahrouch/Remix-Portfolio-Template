import { createThemeAction } from "remix-themes";
import { darkSessionResolver } from "../utils/session.server";

export const action = createThemeAction(darkSessionResolver);