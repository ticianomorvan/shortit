import { encodeURL, getShortedURL } from './url';

test('encodes simply URLs correctly', () => {
  expect(encodeURL('https://google.com')).toBe('https%3A%2F%2Fgoogle.com');
});

test('encodes URLs with queries correctly', () => {
  expect(encodeURL('https://github.com/search?q=ti7oyan')).toBe('https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3Dti7oyan');
})

jest.setTimeout(10000);

test('gets shorted URL from API correctly', async () => {
  return getShortedURL('https%3A%2F%2Fgoogle.com').then((response) => {
    expect(response.data.short).toHaveLength(5);
  })
})