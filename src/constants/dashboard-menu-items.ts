import { Settings, LayoutLeft } from 'iconoir-react';

import type { MenuItem } from '@/types/menu-item';

export default [
  {
    label: 'dashboard',
    icon: LayoutLeft,
    path: '/dashboard/account/team/project',
  },
  {
    label: 'account settings',
    icon: Settings,
    path: '/dashboard/account/settings/profile',
  },
] satisfies MenuItem;
