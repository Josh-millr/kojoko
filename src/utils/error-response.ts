import * as STATUS from '@/constants/network-status-codes';
import * as FEEDBACK from '@/constants/feedback-messages';
import { createNetworkResponse } from '@/utils/create-network-response';

export class ErrorResponse {
  static internalServerError() {
    return createNetworkResponse({
      status: STATUS.STATUS_INTERNAL_SERVER_ERROR,
      error: { message: FEEDBACK.FEEDBACK_INTERNAL_SERVER_ERROR },
    });
  }

  static badRequest(message: string) {
    return createNetworkResponse({
      status: STATUS.STATUS_BAD_REQUEST,
      error: { message },
    });
  }

  static notFound(message: string) {
    return createNetworkResponse({
      status: STATUS.STATUS_NOT_FOUND,
      error: { message },
    });
  }
}
