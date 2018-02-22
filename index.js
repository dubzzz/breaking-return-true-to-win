// Try to break https://alf.nu/ReturnTrue examples
// using Property based testing
const fc = require('fast-check');

describe('Breaking \'return true to win\' using Property based Testing', () => {
    it('id', () => {
        function id(x) {
            return x;
        }
        fc.assert(fc.property(fc.anything(), obj => !id(obj)));
    });
});