import { expect, test } from '@jest/globals'
import request from 'supertest'
import app from '../src/app.js'

test('Confirm that movies shows the correct title', async () => {
  const res = await request(app).get('/').expect('Content-Type', /html/).expect(200)

  expect(res.text).toMatch('Encanto')
  expect(res.text).toMatch('Forrest Gump')
  expect(res.text).toMatch('Fire Walk With Me')
  expect(res.text).toMatch('Min granne Totoro')
  expect(res.text).toMatch('Isle of dogs')
  expect(res.text).toMatch('Pulp Fiction')
  expect(res.text).toMatch('The Shawshank Redemption')
  expect(res.text).toMatch('The Muppets')
  expect(res.text).toMatch('Training Day')
})
