import { Header } from "../../../components";
import { GridComponent } from "@syncfusion/ej2-react-grids";
import { users } from "~/constants";

const allUsers = () => {
  const user = {
    name: "Brian",
  };
  return (
    <main className="all-users wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}👋`}
        description="Check out our current users in real time."
      />
      <GridComponent dataSource={users}></GridComponent>
    </main>
  );
};

export default allUsers;
