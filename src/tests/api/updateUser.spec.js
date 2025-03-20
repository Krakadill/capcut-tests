import { test } from '@playwright/test';
import axios from 'axios';
import { expect } from 'chai';

const BASE_URL = 'https://reqres.in/api';

test.describe('Reqres PUT API Tests', () => {
  test('Update single user by id', async () => {
    const id = 2;
    const response = await axios.put(`${BASE_URL}/users/${id}`, {
      name: 'luka',
      job: 'Intern',
    });
    expect(response.status).to.equal(200);
    expect(response.headers).to.have.property(
      'content-type',
      'application/json; charset=utf-8',
    );
    expect(response.data.name).to.equal('luka');
  });
});
