import { CSSObject } from '@emotion/react';
import { styled } from '@mui/material';
import React from 'react';

interface IDashBoardLayoutWrapper extends React.HTMLAttributes<HTMLDivElement> {
  sidebarOpen: boolean;
  component: string;
}

export const DashBoardLayoutWrapper = styled('div')<IDashBoardLayoutWrapper>(
  ({ sidebarOpen }): CSSObject => ({
    height: '100%',
    padding: '80px 24px 24px 24px',
    marginLeft: sidebarOpen ? '240px' : '60px',
    transition: 'margin-left 0.3s ease',
    overflow: 'auto',
  }),
);

export const DashboardLayoutRoot: React.FC<React.HTMLAttributes<HTMLDivElement>> = styled('div')({
  height: '100dvh',
  width: '100%',
});
