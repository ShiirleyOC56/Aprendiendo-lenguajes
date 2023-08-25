/*describe("pow", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} elevado a 3 es ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  
  });*/
  describe("pow", function() {

    describe("eleva x a la potencia de 3", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} elevado a 3 es ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });
  
    // ... otros test irían aquí, se puede escribir describe como it
  });