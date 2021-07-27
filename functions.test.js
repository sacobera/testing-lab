const{ returnTwo, greeting, add, multiply, divide, subtract} = require ('./functions');

// test ('returnTwo function should return the number 2', function(){
//     expect([2]).toEqual([2]);
// })

// test ('greeting should expect greeting James to equal "Hello james" ', function(){
//     expect(greeting('James')).toBe("Hello ${name}");
// })

// test ('greeting should expect greeting Jill to equal "Hello Jill" ', function(){
//     expect(greeting('Jill')).toBe("Hello ${name}");
// })
// test ('add function should add 1 and 2', function(){
//     expect(add(1, 2)).toBe(3);
// })
// test ('add function should add 5 and 9', function(){
//     expect(add(5, 9)).toBe(14);
// })
// test ( 'multiply function should multiply 1 and 2', function() {
//     expect(multiply(1, 2)).toEqual(2);
// })
// test ('divide function should divide 9 and 3', function(){
//     expect(divide(9, 3)).toEqual(3);
// })
// test ('subtract function should subtract 7 from 14', function(){
//     expect(subtract(14, 7)).toBe(7);
// })


// describe('Math functions', function(){
//     test ('add function should add 5 and 9', function(){
//         expect(add(5, 9)).toBe(14);
//     })
//     test ( 'multiply function should multiply 1 and 2', function() {
//         expect(multiply(1, 2)).toEqual(2);
//     })
//     test ('divide function should divide 9 and 3', function(){
//         expect(divide(9, 3)).toEqual(3);
//     })
//     test ('subtract function should subtract 7 from 14', function(){
//         expect(subtract(14, 7)).toBe(7);
//     })
// })

// test ('add function should add banana and 9', function(){
//     expect(add('banana', 9)).toBe('banana9');
// })
test ('multiply function should multiply banana and 9', function(){
    expect(multiply('banana', 9)).toBeNaN();
})
test ('divide function should divide banana and 9', function(){
    expect(divide('banana', 9)).toBeNaN();
})
test ('subtract function should subbtract banana and 9', function(){
    expect(subtract('banana', 9)).toBeNaN();
})