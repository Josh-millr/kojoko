import type { UserProfileWithoutId } from '@/types/user-profile';

export interface UserState {
  profile: UserProfileWithoutId | null;
  isPresent: boolean;
}
