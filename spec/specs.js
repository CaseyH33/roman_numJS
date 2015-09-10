
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

    it("returns error if 0 is entered", function(){
        expect(romanize(0)).to.eql("invalid number");
    });

    it("returns error if 5000 is entered", function(){
        expect(romanize(5000)).to.eql("invalid number");
    });
});
