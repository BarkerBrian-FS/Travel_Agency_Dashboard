import { Header } from "../../../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import { users } from "~/constants";
import { cn } from "../../../lib/utils";

const allUsers = () => {
  const user = {
    name: "Brian",
  };
  return (
    <main className="all-users wrapper">
      <Header
        title="Manage All Users"
        description="Check out our current users in real time."
      />
      <GridComponent dataSource={users} gridLines="None">
        <ColumnsDirective>
          <ColumnDirective
            field="name"
            headerText="Name"
            width="200"
            textAlign="Left"
            template={(props: UserData) => (
              <div className="flex items-center gap-1.5 px-4">
                <img
                  src={props.imageUrl}
                  alt="user"
                  className="rounded-full size-8 aspect-square"
                  referrerPolicy="no-referrer"
                />
                <span>{props.name}</span>
              </div>
            )}
          />
          <ColumnDirective
            field="email"
            headerText="Email"
            width={200}
            textAlign="Left"
          />
          <ColumnDirective
            field="dateJoined"
            headerText="Date Joined"
            width={140}
            textAlign="Left"
          />
          <ColumnDirective
            field="itineraryCreated"
            headerText="Trip Created"
            width={130}
            textAlign="Left"
          />
          <ColumnDirective
            field="status"
            headerText="Type"
            width={100}
            textAlign="Left"
            template={({ status }: UserData) => (
              <article
                className={cn(
                  "status-column",
                  status === "user" ? "bg-success-50" : "bg-light-300",
                )}
              >
                <div
                  className={cn(
                    "size-1.5 rounded-full",
                    status === "user" ? "bg-success-500" : "bg-gray-500",
                  )}
                />

                <h3
                  className={cn(
                    "font-inter text-xs font-medium",
                    status === "user" ? "text-success-700" : "text-gray-500",
                  )}
                >
                  {status}
                </h3>
              </article>
            )}
          />
        </ColumnsDirective>
      </GridComponent>
    </main>
  );
};

export default allUsers;
