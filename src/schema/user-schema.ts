import { z } from 'zod';

import { PASSWORD_REGEX, USER_NAME_REGEX } from '@/constants/regEx';
import {
  FEEDBACK_EMAIL_ADDRESS_NAME_REQUIRED,
  FEEDBACK_FIRST_NAME_REQUIRED,
  FEEDBACK_LAST_NAME_REQUIRED,
  FEEDBACK_PASSWORD_REQUIRED,
  FEEDBACK_USER_NAME_REQUIRED,
} from '@/constants/feedback-messages';

export const firstNameSchema = z.string().min(2, {
  message: FEEDBACK_FIRST_NAME_REQUIRED,
});

export const lastNameSchema = z.string().min(2, {
  message: FEEDBACK_LAST_NAME_REQUIRED,
});

export const userNameSchema = z.string().regex(USER_NAME_REGEX, {
  message: FEEDBACK_USER_NAME_REQUIRED,
});

export const passwordSchema = z.string().regex(PASSWORD_REGEX, {
  message: FEEDBACK_PASSWORD_REQUIRED,
});

export const emailAddressSchema = z.string().email({
  message: FEEDBACK_EMAIL_ADDRESS_NAME_REQUIRED,
});
