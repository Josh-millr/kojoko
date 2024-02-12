import axios from 'axios';
import axiosRetry from 'axios-retry';

import { toast } from '@/components/ui/use-toast';
import { backendApiClientRequestConfig } from '@/config/axios.config';
import { FEEDBACK_REQUEST_RETRYING } from '@/constants/feedback-messages';

const MAX_RETRIES = 3;

const backendApiClient = axios.create(backendApiClientRequestConfig);

backendApiClient.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) =>
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

    Promise.reject(error),
);

const showToast = (description: string) => {
  toast({ variant: 'destructive', description });
};

axiosRetry(backendApiClient, {
  retries: MAX_RETRIES,
  shouldResetTimeout: true,
  retryDelay(retryCount) {
    // Exponential backoff
    return 2 ** retryCount * 1000;
  },
  onRetry(retryCount) {
    showToast(`${FEEDBACK_REQUEST_RETRYING} (${retryCount}/${MAX_RETRIES})`);
  },
});

export { backendApiClient };
