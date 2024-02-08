import { MIN_DASHBOARD_VIEWPORT_WIDTH } from '@/constants/min-dashboard-screen-size';

export const isMinDashboardViewport = (width: number) =>
  width > MIN_DASHBOARD_VIEWPORT_WIDTH;
