// Try to break https://alf.nu/ReturnTrue examples
// using Property based testing
const fc = require('fast-check');
const settings = {num_runs: 100000};

const wrapIt = function(fn) {
    return (...args) => {
        try { return !fn(...args); }
        catch (err) { return true; }
    };
};
const constantFunction = fc.anything().map(v => {
    return eval(`_ => ${JSON.stringify(v)}`);
});

describe('Breaking \'return true to win\' using Property based Testing', () => {
    // Those examples have been extracted from
    // the website: https://alf.nu/ReturnTrue
    it('id', () => {
        function id(x) {
            return x;
        }
        fc.assert(fc.property(fc.anything(), x => wrapIt(id)(x)), settings);
    });
    it('reflexive', () => {
        function reflexive(x) {
            return x != x;
        }
        fc.assert(fc.property(fc.anything(), x => wrapIt(reflexive)(x)), settings);
    });
    it('infinity', () => {
        function infinity(x, y) {
            return x === y && 1/x < 1/y 
        }
        fc.assert(fc.property(fc.anything(), fc.anything(), (x, y) => wrapIt(infinity)(x, y)), settings);
    });
    it('transitive', () => {
        function transitive(x,y,z) {
            return x && x == y && y == z && x != z;
        }
        fc.assert(fc.property(fc.anything(), fc.anything(), fc.anything(), (x, y, z) => wrapIt(transitive)(x, y, z)), settings);
    });
    it('peano', () => {
        function peano(x) {
            return (x++ !== x) && (x++ === x);
        }
        fc.assert(fc.property(fc.anything(), x => wrapIt(peano)(x)), settings);
    });
    it('ouroborobj', () => {
        function ouroborobj(x) {
            return x in x;
        }
        fc.assert(fc.property(fc.anything(), x => wrapIt(ouroborobj)(x)), settings);
    });
    it('evil1', () => {
        function evil1(x) {
            return eval(x+'(x)') && !eval(x)(x);
        }
        fc.assert(fc.property(constantFunction, x => wrapIt(evil1)(x)), settings);
    });
    it('closure', () => {
        function closure(x) {
            return x[x] == x;
        }
        fc.assert(fc.property(fc.anything(), x => wrapIt(closure)(x)), settings);
    });
});