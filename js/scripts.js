

var romanize = function(num) {
    var roman_numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var number_list = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var output = "";

    if(num <= 0 || num >= 4000) {
        output = "invalid number";
    } else {

        for (var i = 0; i <= roman_numerals.length; i++) {
            while(num >= number_list[i]) {
                output += roman_numerals[i];
                num -= number_list[i];
            }
        }
    }
    return output;
}



$(document).ready(function() {

    $("form#Roman").submit(function(event) {
        var rome = parseInt($("input#rome").val());

        var result = romanize(rome);

        $(".output").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
