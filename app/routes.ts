import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("heroes", "routes/heroes.tsx", [
    route(":heroId", "routes/heroes.$heroId.tsx"),
  ]),
] satisfies RouteConfig;
