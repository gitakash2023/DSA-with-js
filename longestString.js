const longestString = (str) => {
    if (typeof str !== "string") {
        return "Enter a valid string";
    }
    if (str === "") {
        return "Enter a non-empty string";
    }

    let splitedStr = str.split(" ");
    let n = splitedStr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (splitedStr[j].length < splitedStr[j + 1].length) {
                [splitedStr[j], splitedStr[j + 1]] = [splitedStr[j + 1], splitedStr[j]];
            }
        }
    }

    return splitedStr.join(" ");
}

console.log(longestString("i am a developer jhjjhhhhbhhkhbkhhbkh"));
