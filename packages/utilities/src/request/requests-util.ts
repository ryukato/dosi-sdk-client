import { RequestAuthHeader } from "@dosi-sdk-client-js/core";
import { Base64 } from "js-base64";

export class RequestAuthHeaderUtil {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  public static serialize(requestAuthHeader: RequestAuthHeader): string {
    const _target = `${requestAuthHeader.channelId}:${requestAuthHeader.secret}`;
    return Base64.encode(_target);
  }
}
