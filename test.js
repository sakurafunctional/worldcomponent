'use strict';

var ___ = require('./worldcomponent');

var ___a = ___(0);
var ___b = ___(0);
var ___c = ___(0);

___.world = ___a.compute(___.log('a:'));
___.world = ___b.compute(___.log('b:'));
___.world = ___c.compute(___.log('c:'));

___.world = ___a.compute(function(x)
{
  ___.world = ___b.appear(x * 5);
});
___.world = ___b.compute(function(x)
{
  ___.world = ___c.appear(x * 2);
});


var f = function()
{
  ___.world = ___a.appear(___a.now() + 1);
};
var timer = setInterval(f, 1000);
