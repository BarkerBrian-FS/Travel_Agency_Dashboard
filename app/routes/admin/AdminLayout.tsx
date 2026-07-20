import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="AdminLayout.tsx">
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
