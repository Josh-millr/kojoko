import type { ReactNode } from 'react';

import * as Layout from '../../_components/dashboard-layout';
import { DashboardPageHeader } from '../../_components/dashboard-page-header';

interface AccountSettingsLayoutProps {
  children: ReactNode;
}
export default function AccountSettingsLayout(
  props: AccountSettingsLayoutProps,
) {
  return (
    <Layout.DashboardLayoutViewport>
      <Layout.DashboardLayoutSideBar>
        <></>
        {/* Navigation links goes here... */}
      </Layout.DashboardLayoutSideBar>
      <Layout.DashboardLayoutMain>
        <DashboardPageHeader />
        <Layout.DashboardLayoutContent>
          {props.children}
        </Layout.DashboardLayoutContent>
      </Layout.DashboardLayoutMain>
    </Layout.DashboardLayoutViewport>
  );
}
