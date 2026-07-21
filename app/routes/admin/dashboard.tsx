import { Header, StatsCard, TripCard } from "../../../components";

const dashboard = () => {
  const user = { name: "Brian" };
  const dashboardStats = {
    totalUsers: 12450,
    usersJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3210,
    tripsCreated: { currentMonth: 150, lastMonth: 250 },
    userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
  };
  const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
    dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}👋`}
        description="Track activity, trends and popular destinations in real time."
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonth={usersJoined.currentMonth}
            lastMonth={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users Today"
            total={totalTrips}
            currentMonth={tripsCreated.currentMonth}
            lastMonth={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Total Users"
            total={userRole.total}
            currentMonth={userRole.currentMonth}
            lastMonth={userRole.lastMonth}
          />
        </div>
      </section>

      <TripCard />
    </main>
  );
};

export default dashboard;
