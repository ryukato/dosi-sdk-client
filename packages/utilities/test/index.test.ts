import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { print } from '@dosi-sdk-client-js/utilities';

afterEach(() => {
  jest.clearAllMocks();
});

describe('print', () => {
  it('Check to see if the log outputs correctly.', () => {
    const spyConsoleLog = jest.spyOn(console, 'log').mockReturnValue();

    print('print');

    expect(spyConsoleLog).toHaveBeenCalledTimes(1);
    expect(spyConsoleLog).toHaveBeenCalledWith('print');
  });
});
