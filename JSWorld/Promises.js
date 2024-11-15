// const myPromise = new Promise((resolve, reject) => {
//     let a = 10;
//     if (a > 5) {
//         resolve("value of a is resolved!!");
//     } else {
//         reject("a is rejected!!");
//     }
// });

// myPromise
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("All resources have been closed!!"));

const myPromise = new Promise((resolve, reject) => {
    let a = Math.random()*1000;
    console.log(a);
    if (a > 52) {
        resolve("value of a is resolved!!");
    } else {
        reject("a is rejected!!");
    }
});

myPromise
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))
    .finally(() => console.log("All resources have been closed!!"));

