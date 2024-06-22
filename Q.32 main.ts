let current_user:string[]=[`taha`,`daniyal`,`salman`,`mahnoor`,`sawera`];

let new_user:string[]=[`yamna`,`ausaf`,`abubakar`,`salar`]

new_user.forEach(newUsername =>{
    let lowerCase:string=newUsername.toLowerCase();

    if(current_user.map(c_user => c_user.toLowerCase().includes(lowerCase))){
        console.log(`the username  ${newUsername} is not available . please write a different username`);
    }
    else{
        console.log(`the username ${newUsername}is available`);
    }
})