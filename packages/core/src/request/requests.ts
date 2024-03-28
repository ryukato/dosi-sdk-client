export class RequestAuthHeader {
  // do forcing to use createInstance factory function
  private constructor(
    readonly channelId: string,
    readonly secret: string,
  ) {}

  public static createInstance(
    channelId: string,
    secret: string,
  ): RequestAuthHeader {
    // TODO add some validation against channelId and secret
    return new RequestAuthHeader(
      channelId,
      secret,
    );
  }
}
