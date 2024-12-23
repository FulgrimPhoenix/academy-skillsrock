import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { DashboardLayoutRoot, DashBoardLayoutWrapper } from './DashboardLayout.styles';

export const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardLayoutRoot>
      <CssBaseline />
      <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <DashBoardLayoutWrapper component="main" sidebarOpen={sidebarOpen}>
        {children}
      </DashBoardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};
