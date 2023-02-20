// describe("test", function () {
//     it('test', function () {
        
//     });
// })
let assert = chai.assert;
describe("validateEmail", function () {
    describe('valid string', function () {
        it('string has less than 5 characters', function () {
            assert.equal(validateEmail(1, 2, 3, 4), false);
        });
      
        describe('valid data', function () {
            it(' includes only one @', function () {
                assert.isFalse(validateEmail('@emailgmail@.com'), 'Have two the @');
                assert.isFalse(validateEmail('@emailgmail@.com@'), 'Have three the @')
            })
        })
        describe('valid data', function () {
            it('Don\'t have the . before @  as the first character', function () {
                assert.isFalse(validateEmail('e.mail@gmailcom'), 'Don\'t have the @');
                assert.isFalse(validateEmail('e.mail@gmail.com'), '@ the first character')
            })
        })
    })
})

