import { test, expect, request, APIResponse } from '@playwright/test';

test.describe('@api', () => {
  let response: APIResponse;

  test.beforeAll(async () => {
    const apiContext = await request.newContext();
    response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  });

  test('QA1 - GET /posts/1 returns 200 OK', async () => {
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });

  test('QA2 - Response body contains post with id 1', async () => {
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
  });
});
