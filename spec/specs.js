describe("cost", function() {
  it("calculates estimated shipping cost for a package", function() {
    cost(97212,90026,4,2,6,3).should.equal(3161.84);
  });
});
