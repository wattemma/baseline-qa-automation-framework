
import { test, expect, request } from '@playwright/test';

test('Sample API Test - Status 200 from example endpoint', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body).toHaveProperty('id', 1);
});
