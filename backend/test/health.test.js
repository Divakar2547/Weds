import test from 'node:test'
import assert from 'node:assert/strict'

test('health endpoint responds successfully', async () => {
  process.env.NODE_ENV = 'test'
  const { default: app } = await import('../server.js')
  const server = await new Promise((resolve) => {
    const instance = app.listen(0, () => resolve(instance))
  })

  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/health`)
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { ok: true })
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()))
  }
})
