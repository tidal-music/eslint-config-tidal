'use strict'

var something = {
  someFunction: function (){
    var world = this.world();

    return 'hello' + world
  },
  world(hai = 2) {
    /* c8 ignore start */
    return hai;
    /* c8 ignore stop */
  }
};

export default { foo: 'bar' };
