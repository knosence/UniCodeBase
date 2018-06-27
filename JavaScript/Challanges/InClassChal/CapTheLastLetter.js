function capTheLastLetter(input) {

    input = input.split(' ');

    arr = [];

    for (i = 0; i < input.length; i++) {
        new_inp = input[i].charAt(0).toLowerCase() + input[i].substring(1, input[i].length - 1) + input[i].charAt(input[i].length - 1).toUpperCase();
        arr.push(new_inp);
    }

    str = arr.join(' ');
    return str;

}

console.log(capTheLastLetter("today is friday"));

function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

console.log(wordFreq("the day is sunny the thethe sunny is is"));


