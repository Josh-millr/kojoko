import type { Tables } from './database';
import type { NonNullableProps } from './non-nullable-props';

export type UserProfileWithId = NonNullableProps<Tables<'user_profiles'>>;
export type UserProfileWithoutId = NonNullableProps<Omit<Tables<'user_profiles'>, 'id'>>;
