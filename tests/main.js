import assert from 'assert';

describe('teste-todo', function () {
  it('package.json has correct name', async function () {
    const { name } = await import('../package.json');
    assert.strictEqual(name, 'teste-todo');
  });

  // eslint-disable-next-line no-undef
  if (Meteor.isClient) {
    it('client is not server', function () {
      // eslint-disable-next-line no-undef
      assert.strictEqual(Meteor.isServer, false);
    });
  }
  // eslint-disable-next-line no-undef
  if (Meteor.isServer) {
    it('server is not client', function () {
      // eslint-disable-next-line no-undef
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
