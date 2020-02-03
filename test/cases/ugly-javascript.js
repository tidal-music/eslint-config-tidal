
/* eslint-env es6 */

'use strict'

var something = {
  someFunction: function (){
    var world = this.world();

    return 'hello' + world
  },
  world(hai = 2) {
    return hai;
  }
};
