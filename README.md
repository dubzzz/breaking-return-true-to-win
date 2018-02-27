# Breaking down *return true to win* using properties

## Abstract

The idea of *return true to win* exercises is to find a value such as a given function returns `true`.
Values can be of any types but can also be restricted to objects, arrays, functions depending on the problem statement. 

This repository applies property based testing, using framework [fast-check](https://github.com/dubzzz/fast-check), to solve such problems.

Statements have been extracted from https://alf.nu/ReturnTrue

## Running it locally

```js
npm install
npm run test
```

## Example of output

The following content is an example of what can be the possible output of the `npm run test` command.
The *red* status of the steps is totally expected.
The entry resulting in the value `true` is given by the framework as the failing example so failure is the answer here.

In the following extract:

```
  4) Breaking 'return true to win' using Property based Testing
       transitive:
     Error: Property failed after 3011 tests (seed: 1519757029330): [[],false,[]]
```

The counterexample is `[], false, []`.
Using it as an input for `const transitive = (x,y,z) => x && x == y && y == z && x != z` should result to `true`.

```
$ npm run test

> breaking-return-true-to-win@1.0.0 test C:\src\breaking-return-true-to-win
> mocha "index.js"



  Breaking 'return true to win' using Property based Testing
    1) id
    2) reflexive
    3) infinity
    4) transitive
    5) peano
    6) ouroborobj
    7) evil1
    8) closure


  0 passing (13s)
  8 failing

  1) Breaking 'return true to win' using Property based Testing
       id:
     Error: Property failed after 1 tests (seed: 1519757018521): [{}]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:23:12)

  2) Breaking 'return true to win' using Property based Testing
       reflexive:
     Error: Property failed after 8 tests (seed: 1519757018571): [NaN]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:29:12)

  3) Breaking 'return true to win' using Property based Testing
       infinity:
     Error: Property failed after 35776 tests (seed: 1519757018574): [0,0]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:35:12)

  4) Breaking 'return true to win' using Property based Testing
       transitive:
     Error: Property failed after 3011 tests (seed: 1519757029330): [[],false,[]]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:41:12)

  5) Breaking 'return true to win' using Property based Testing
       peano:
     Error: Property failed after 36 tests (seed: 1519757031015): [9007199254740991]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:47:12)

  6) Breaking 'return true to win' using Property based Testing
       ouroborobj:
     Error: Property failed after 1319 tests (seed: 1519757031031): [[0]]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:53:12)

  7) Breaking 'return true to win' using Property based Testing
       evil1:
     Error: Property failed after 3 tests (seed: 1519757031327): [_ => ""]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:59:12)

  8) Breaking 'return true to win' using Property based Testing
       closure:
     Error: Property failed after 136 tests (seed: 1519757031343): [[0]]
Got error: Property failed by returning false
      at Object.throwIfFailed (node_modules\fast-check\lib\check\runner\utils\utils.js:73:15)
      at Object.assert (node_modules\fast-check\lib\check\runner\Runner.js:179:19)
      at Context.it (index.js:65:12)
```
