import type { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from '@/components/ui/use-toast';
import { backendApiClient } from '@/libs/axios-instance';
import type {
  NetworkResponse,
  NetworkResponseWithError,
} from '@/types/network-response';
import type { NetworkError } from '@/types/network-error';
import type { UserProfileWithoutId } from '@/types/user-profile';
import { addOnlineEventListener } from '@/utils/add-online-event-listener';

type Response = NetworkResponse<UserProfileWithoutId>;

const URL_PATH = '/user/profile';
const DISPATCH_TYPE = 'user/fetchUserProfile';

const action = async () => {
  try {
    const response = await backendApiClient.get<Response>(URL_PATH);
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error as AxiosError<NetworkResponseWithError>);
  }
};

export const fetchUserProfile = createAsyncThunk(DISPATCH_TYPE, action);

const handleResponse = (response: Response) => {
  const { data } = response;
  if (!data) throw response;
  return data;
};

const handleError = (error: AxiosError<NetworkResponseWithError>) => {
  // @note Response Error check should take precedence over request error check,
  // axios populate both properties when theres a response error.
  const { response, request } = error;

  if (response) return handleResponseError(response.data.error);
  if (request) return handleRequestError();
  return error;
};

const handleResponseError = (error: NetworkError) => {
  showToast(error.message);
};

const handleRequestError = () => {
  showToast('Network connection failed. Retrying...');
  addOnlineEventListener(action);
};

const showToast = (description: string) => {
  toast({ variant: 'destructive', description });
};
