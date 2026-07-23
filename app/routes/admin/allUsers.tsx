import { Header } from "../../../components";
import {
  ColumnsDirective,
  ColumnDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { cn, formatDate } from "../../../lib/utils";
import { getAllUsers } from "~/appwrite/auth";
import type { Route } from "./+types/allUsers";

export const loader = async () => {
  const { users, total } = await getAllUsers(10, 0);

  return { users, total };
};

const allUsers = ({ loaderData }: Route.ComponentProps) => {
  const { users } = loaderData;

  // return (
  //   <main className="all-users wrapper">
  //     <Header
  //       title="Manage All Users"
  //       description="Check out our current users in real time."
  //     />
  //     <GridComponent dataSource={users} gridLines="None">
  //       <ColumnsDirective>
  //         <ColumnDirective
  //           field="name"
  //           headerText="Name"
  //           width="200"
  //           textAlign="Left"
  //           // template={(props: UserData) => (
  //           //   <div className="flex items-center gap-1.5 px-4">
  //           //     <img
  //           //       src={props.imageUrl}
  //           //       alt="user"
  //           //       className="rounded-full size-8"
  //           //     />
  //           //     <span>{props.name}</span>
  //           //   </div>
  //           // )}
  //         />
  //         <ColumnDirective
  //           field="email"
  //           headerText="Email"
  //           width={200}
  //           textAlign="Left"
  //         />
  //         <ColumnDirective
  //           field="joinedAt"
  //           headerText="Date Joined"
  //           width={140}
  //           textAlign="Left"
  //           // template={({ joinedAt }: { joinedAt: string }) =>
  //           //   formatDate(joinedAt)
  //           // }
  //         />
  //         <ColumnDirective
  //           field="status"
  //           headerText="Type"
  //           width={100}
  //           textAlign="Left"
  //           // template={({ status }: UserData) => (
  //           //   <article
  //           //     className={cn(
  //           //       "status-column",
  //           //       status === "user" ? "bg-success-50" : "bg-light-300",
  //           //     )}
  //           //   >
  //           //     <div
  //           //       className={cn(
  //           //         "size-1.5 rounded-full",
  //           //         status === "user" ? "bg-success-500" : "bg-gray-500",
  //           //       )}
  //           //     />

  //           //     <h3
  //           //       className={cn(
  //           //         "font-inter text-xs font-medium",
  //           //         status === "user" ? "text-success-700" : "text-gray-500",
  //           //       )}
  //           //     >
  //           //       {status}
  //           //     </h3>
  //           //   </article>
  //           // )}
  //         />
  //       </ColumnsDirective>
  //     </GridComponent>
  //   </main>
  // );
  return (
    <main className="all-users wrapper">
      <Header
        title="Manage All Users"
        description="Check out our current users in real time."
      />

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.$id}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.imageUrl}
                alt={user.name}
                className="size-10 rounded-full"
              />

              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div>
              <p>{user.status}</p>
              <p className="text-sm text-gray-500">
                Joined {new Date(user.joinedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default allUsers;
