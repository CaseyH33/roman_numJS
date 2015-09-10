
describe('romanize', function() {

    it("returns III if 3 is entered", function(){
        expect(romanize(3)).to.eql("III");
    });

    it("returns IV if 4 is entered", function(){
        expect(romanize(4)).to.eql("IV");
    });

    it("returns MMXV if 2015 is entered", function(){
        expect(romanize(2015)).to.eql("MMXV");
    });
});
