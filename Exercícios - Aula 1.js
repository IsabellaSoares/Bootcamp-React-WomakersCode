// setTimeout(function(){
//     console.log("oieee");
// }, 2000);

// console.log("hello");

// function exibeTexto(callback){
//     setTimeout(function(){
//         callback('texto 1');
//     }, 3000);
// }

// function exibeOutroTexto(callback){
//     setTimeout(function(){
//         console.log('texto 2');
//     });
// }

// exibeTexto(function(data){
//     console.log('callback:1:', data);
//     exibeOutroTexto(function(data2){
//         console.log('texto2:', data2);
//     });
// });

// var promise = job1();

// promise

// .then(function(data1) {
//     console.log('data1', data1);
//     return job2();
// })

// .then(function(data2) {
//     console.log('data2', data2);
//     return 'Hello world';
// })

// .then(function(data3) {
//     console.log('data3', data3);
// });

// function job1() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 1');
//         }, 1000);
//     });
// }

// function job2() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 2');
//         }, 1000);
//     });
// }

// function job() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, 500, 'Hello world 1');
//     });
// }

// async function test() {
//     let message = await job();
//     console.log(message);

//     return 'Hello world 2';
// }

// test().then(function(message) {
//     console.log(message);
// });

function job(data) {
    return new Promise(function(resolve, reject) {
        if(isNaN(data)){
            reject('error');
        }
        
        if(data % 2 !== 0) {
            setTimeout(resolve, 1000, 'odd');
        } else {
            setTimeout(resolve, 2000, 'even');
        }        
    });
}

job(4).then(content => console.log(content)).catch(erro => console.log(erro));
job(3).then(content => console.log(content)).catch(erro => console.log(erro));
job('a').then(content => console.log(content)).catch(erro => console.log(erro));