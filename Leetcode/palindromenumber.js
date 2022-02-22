var isPalindrome = function(x) {

    if(x < 0) {
        return false;
    }

    const num = x;


    let reverseNum = 0;

    while(x) {
        reverseNum = reverseNum * 10 + x % 10;
        x = parseInt(x / 10);
    }

    return num === reverseNum;
};
