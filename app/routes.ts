import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  route("sign-in", "routes/root/sign-in.tsx"),
  layout("routes/admin/AdminLayout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("allUsers", "routes/admin/allUsers.tsx"),
    route("trips", "routes/admin/trips.tsx"),
    route("trips/create", "routes/admin/create-trip.tsx"),
  ]),
] satisfies RouteConfig;
