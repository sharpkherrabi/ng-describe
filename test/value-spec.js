angular.module('A', [])
  .value('foo', 'bar');

/* global ngDescribe, it */
ngDescribe({
  name: 'test value',
  modules: 'A',
  inject: 'foo',
  tests: function (deps) {
    // deps object has every injected dependency as a property
    it('has correct value foo', function () {
      la(deps.foo === 'bar');
    });
  }
});