describe('Places',function(){
  it("Create a new Contact with the given properties", function(){
    var testPlace = new Places("Canada","Some Building","Winter","Had a great time");
    expect(testPlace.location).to.equal("Canada");
    expect(testPlace.ladmarks).to.equal("Some Building");
    expect(testPlace.timeOfYear).to.equal("Winter");
    expect(testPlace.notes).to.equal("Had a great time");
  });
});
