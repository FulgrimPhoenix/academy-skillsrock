import { Outlet } from 'react-router-dom';

import { DashboardLayout } from '~components/DashboardLayout';

export const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};
