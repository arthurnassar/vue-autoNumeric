// autoNumeric-shim.js
let AutoNumeric;
if (typeof window !== 'undefined' && window.AutoNumeric) {
    // AutoNumeric loaded from CDN and attached to the window object
    AutoNumeric = window.AutoNumeric;
} else {
    // AutoNumeric installed via npm or yarn and imported as a module
    AutoNumeric = require('autonumeric/dist/autoNumeric.min');
}

export default AutoNumeric;
