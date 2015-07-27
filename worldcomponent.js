(function() {
  'use strict';

  var worldcomponent = function() {
    var computingF = [];

    var value = {};
    var state;

    Object.defineProperties(value,
      {
        val: //value.val
        {
          get() {
            return state;
          },
          set(x) {
            state = x;
            computingF.map(
              function(f) {
                f(x);
              });
            return;
          }
        }
      });

    var o = {
      compute(f) {
        var f1 = function() {
          computingF[computingF.length] = f; //push  f
        };
        return f1;
      },
      appear(a) {
        var f1 = function() {
          value.val = a;
        };
        return f1;
      },
      now() {
        return value.val;
      }
    };

    return o;
  };

  Object.defineProperties(worldcomponent,
    {
      world: //our physical world
      {
        set(f) {
          return f();
        }
      }
    });

  worldcomponent.log = function(a) {
    var f = console.log.bind(console, a);
    return f;
  };

  module.exports = worldcomponent;
})();
