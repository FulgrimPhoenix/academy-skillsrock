import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useState } from 'react';

import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { DashboardLayoutRoot, DashBoardLayoutWrapper } from './DashboardLayout.styles';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <DashboardLayoutRoot>
      <CssBaseline />
      <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <DashBoardLayoutWrapper as="main" sidebarOpen={sidebarOpen}>
        {children}
      </DashBoardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};
