/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useCallback } from 'react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  STATUS_CREATED,
  STATUS_OK,
  STATUS_BAD_REQUEST,
} from '@/constants/network-status-codes';
import {
  FEEDBACK_INTERNAL_SERVER_ERROR,
  FEEDBACK_REQUEST_UNSUCCESSFUL,
  FEEDBACK_USER_NAME_REGISTERED,
  FEEDBACK_USER_NAME_EXIST,
  FEEDBACK_USER_NAME_FORMAT_INVALID,
} from '@/constants/feedback-messages';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { userNameSchema } from '@/schema/user-schema';
import { useFormHandler } from '@/hooks/use-form-handler';
import { storeUserName } from '@/actions/user/store-user-name';
import { withFormButtonState } from '@/hocs/with-form-button-state';

export function AccountSetupForm() {
  const router = useRouter();
  const { toast } = useToast();

  const { form, submitForm } = useFormHandler({
    defaultValues: {
      userName: '',
    },
    formSchema: z.object({
      userName: userNameSchema,
    }),
    async submit({ userName }) {
      try {
        const response = await storeUserName(userName);
        handleResponse(response.status);
      } catch {
        handleUnsuccessfulRequest();
      }
    },
  });

  const handleResponse = useCallback((status: number) => {
    switch (status) {
      case STATUS_CREATED:
        handleSuccess();
        break;
      case STATUS_OK:
        handleAlreadyExist();
        break;
      case STATUS_BAD_REQUEST:
        handleBadRequest();
        break;
      default:
        handleServerError();
        break;
    }
  }, []);

  const handleSuccess = useCallback(() => {
    toast({
      description: FEEDBACK_USER_NAME_REGISTERED,
    });
    router.replace('/dashboard/account/team/project');
  }, []);

  const handleAlreadyExist = useCallback(() => {
    form.setError('userName', {
      message: FEEDBACK_USER_NAME_EXIST,
    });
  }, []);

  const handleBadRequest = useCallback(() => {
    form.setError('userName', {
      message: FEEDBACK_USER_NAME_FORMAT_INVALID,
    });
  }, []);

  const handleUnsuccessfulRequest = useCallback(() => {
    toast({
      variant: 'destructive',
      description: FEEDBACK_REQUEST_UNSUCCESSFUL,
    });
  }, []);

  const handleServerError = useCallback(() => {
    toast({
      variant: 'destructive',
      description: FEEDBACK_INTERNAL_SERVER_ERROR,
    });
  }, []);

  const FormButton = withFormButtonState(Button);

  return (
    <Form {...form}>
      <form action={() => submitForm()}>
        <div className="grid gap-y-4">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="mike_ola" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full [&>*]:flex-grow">
            <FormButton type="submit">Submit</FormButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
