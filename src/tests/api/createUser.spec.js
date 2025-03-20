import { test } from '@playwright/test';
import axios from 'axios';
import { expect } from 'chai';

const BASE_URL = 'https://reqres.in/api';

test.describe('Reqres Get API Tests', () => {
  test('Getting single user by ID', async () => {
    const response = await axios.post(`${BASE_URL}/users`, {
      name: 'luka',
      job: 'intern',
    });
    expect(response.status).to.equal(201);
    expect(response.data.name).to.equal('luka');
    expect(response.headers).to.have.property(
      'content-type',
      'application/json; charset=utf-8',
    );
  });
});
