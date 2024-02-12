import type { RequestStatus } from '@/types/request-status';
import type { UserProfileWithoutId } from '@/types/user-profile';

export interface UserState {
  profile: UserProfileWithoutId | null;
  status: RequestStatus;
}
