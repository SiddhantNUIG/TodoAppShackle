function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let final = A[0];

    for (let i = 1; ; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[j].includes(i))
                break;
        }
    }
    i == final;
    return i;
}