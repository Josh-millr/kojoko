import type { Dispatch } from '@reduxjs/toolkit';

import { toast } from '@/components/ui/use-toast';
import { backendApiClient } from '@/libs/axios-instance';
import type { NetworkResponse } from '@/types/network-response';
import type { UserProfileWithoutId } from '@/types/user-profile';

import { userActions } from '../user-reducer';

type ToastVariantType = 'destructive';
type Response = NetworkResponse<UserProfileWithoutId>;

export const fetchUserProfile = () => {
  const fetchUserProfileAction = async (dispatch: Dispatch) => {
    try {
      const response = await backendApiClient.get<Response>('/user/profile');
      handleResponse(response.data, dispatch);
    } catch {
      handleFailedRequest(dispatch);
    }
  };

  const handleResponse = (responseData: Response, dispatch: Dispatch) => {
    const { data, error } = responseData;
    if (data) {
      dispatch(userActions.addUserProfile(data));
    }
    if (error) {
      handleUnexpectedResponse(error.message);
    }
  };

  const handleUnexpectedResponse = (message: string) => {
    showToast('destructive', message);
  };

  const handleFailedRequest = (dispatch: Dispatch) => {
    showToast('destructive', 'Network connection failed. Retrying...');
    addOnlineEventListener(dispatch);
  };

  const addOnlineEventListener = (dispatch: Dispatch) => {
    const onlineListener = () => {
      // console.log('You are now connected to the network.');
      window.removeEventListener('online', onlineListener);
      fetchUserProfileAction(dispatch);
    };
    window.addEventListener('online', onlineListener);
  };

  const showToast = (variant: ToastVariantType, message: string) => {
    toast({ variant, description: message });
  };

  return fetchUserProfileAction;
};