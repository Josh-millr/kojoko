import axios from 'axios';
import axiosRetry from 'axios-retry';

import { toast } from '@/components/ui/use-toast';
import { FEEDBACK_REQUEST_RETRYING } from '@/constants/feedback-messages';

import { backendApiClientRequestConfig } from '@/config/axios.config';

const backendApiClient = axios.create(backendApiClientRequestConfig);

const MAX_RETRIES = 3;

axiosRetry(backendApiClient, {
  retries: MAX_RETRIES,
  shouldResetTimeout: true,
  retryDelay(retryCount) {
    return 2 ** retryCount * 1000; // Exponential backoff
  },
  onRetry(retryCount) {
    toast({
      variant: 'destructive',
      description: `${FEEDBACK_REQUEST_RETRYING} (${retryCount}/${MAX_RETRIES})`,
    });
  },
});

export { backendApiClient };
