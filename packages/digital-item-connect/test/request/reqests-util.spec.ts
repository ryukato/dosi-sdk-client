import { describe, expect, it } from '@jest/globals';
import { RequestAuthHeaderUtil } from '@dosi-sdk-client-js/utilities';
import { RequestAuthHeader } from '@dosi-sdk-client-js/core';

describe('request-util', () => {
  it('request-auth-header-util::serialize', () => {
    const actual = RequestAuthHeaderUtil.serialize(
      RequestAuthHeader.createInstance('test-channelId', 'test-secret'),
    );
    const expected = 'dGVzdC1jaGFubmVsSWQ6dGVzdC1zZWNyZXQ=';
    expect(actual).toEqual(expected);
  });
});
