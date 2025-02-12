import { getDefaultConfigValue } from 'yargs-options';

describe('getDefaultConfigValue()', () => {
  it('should return the default value', () => {
    expect(getDefaultConfigValue('self-hosted')).toEqual(false);
    expect(getDefaultConfigValue('privileged')).toEqual(false);
  });

  it('should return undefined for unknown option', () => {
    expect(getDefaultConfigValue('unknown')).toBeUndefined();
  });
});
