// function test() {
//     return true
// }

function validateEmail(email){
  
        
        if (email.split().length < 5) return false;
        
        
    // if (email.length <= 5) return false
    
    // if (typeof email !== 'string') return false
    if (email.split('').filter(symbol => symbol === '@').length > 1)  return false
   if(!email.split('').includes('@', '.') || email.split('')[0] === '.') return false
return true   
}

// function validateEmail(email){
//     if (email == ''){
//         return false
//     }
//     if (typeof email != 'string'){
//         return false
//     }
//     if (+email == 0){
//         return false
//     }
//     let checkCharacters = email.split('');
//     if (!checkCharacters.includes('@') 
//         || checkCharacters[0] == '@'){
//         return false
//     }
//     return true
// }

