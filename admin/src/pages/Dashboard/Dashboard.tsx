import { Outlet } from 'react-router-dom';

import { DashboardLayout } from '~/components/DashboardLayout';

export const Dashboard = (): JSX.Element => {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};
