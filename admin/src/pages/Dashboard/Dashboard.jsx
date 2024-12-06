import { Outlet } from 'react-router-dom';

import { DashboardLayout } from '~components/DashboardLayout';

export const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};
