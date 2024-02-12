import type { Json } from './database';
import type { NetworkError } from './network-error';

export interface NetworkResponse<Data extends Json> {
  data: Data | null;
  status: number;
  error: NetworkError | null;
}

export interface NetworkResponseWithError {
  data: null;
  status: number;
  error: NetworkError;
}
