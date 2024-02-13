import { HistoryNavigator } from './history-navigator';
import { UserAccountMenu } from './user-account-menu';

export function SettingsExitNavigation() {
  return (
    <div className="flex items-center justify-between">
      <HistoryNavigator />
      <UserAccountMenu />
    </div>
  );
}
