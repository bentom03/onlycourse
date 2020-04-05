import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');

    require('./modal');

} catch (e) {}