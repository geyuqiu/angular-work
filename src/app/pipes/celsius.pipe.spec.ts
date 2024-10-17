import {CelsiusPipe} from './celsius.pipe';

describe('CelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new CelsiusPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns null for empty value', () => {
    const pipe = new CelsiusPipe();
    expect(pipe.transform(13)).toEqual('13 °C');
  });
});
