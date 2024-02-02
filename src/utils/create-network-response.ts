import type { Json } from '@/types/database';
import type { NetworkResponse } from '@/types/network-response';

export const createNetworkResponse = <Data extends Json>(
  response: Partial<Omit<NetworkResponse<Data>, 'status'>> & { status: number },
) => {
  const { status, data = null, error = null } = response;

  return { data, status, error };
};
