import { Header } from "../../../components";

const allUsers = () => {
  const user = {
    name: "Brian",
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}👋`}
        description="Check out our current users in real time."
      />
      All Users Page Contents
    </main>
  );
};

export default allUsers;
