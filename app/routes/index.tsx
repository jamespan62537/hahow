import { redirect } from "react-router";
import type { Route } from "../+types/root";

/**
 * doc: https://reactrouter.com/api/utils/redirect
 */
export async function loader({}: Route.LoaderArgs) {
  return redirect("/heroes");
}
