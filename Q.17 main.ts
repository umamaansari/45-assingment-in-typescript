let guest_list:string[]=[`tarim`, `urooj`, `mahnoor`, `rubisha`];
//for(let i=0; i<guest_list.length;i++){
    //console.log(`Respected sir/Madam`+guest_list[i] +`,\nwe invited you on dinner tomorrow.\nThank you\n`)}
let not_present:string=`mizna`;
let new_guest:string=`rimsha`;
guest_list[1]=new_guest;
//for(let i=0; i<guest_list.length; i++){
    //console.log(`Respected sir/Madam`+guest_list[i]+`,\nwe invited you on dinner tomorrow.\nThank you\n`)
//}
guest_list.unshift(`noman`, `mureed`, `faizan`);
//for(let i=0; i<guest_list.length; i++){
    //console.log(`Respected sir/Madam`+guest_list[i]+`,\nwe invited you on dinner tomorrow.we found big table so we decide to invite 3 more guest\nThank you\n`)
//}
console.log(`\nunfortunately we can not arrange big table, only two people allow.`)
while(guest_list.length>2){
    let remove_guest= guest_list.pop();
    console.log(`sorry sir /Madam.${remove_guest}we are not invited for dinner.`);
} for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam`+ guest_list[i]+`,\n yes you are still invited on dinner\nThank you\n`)}
guest_list.splice(0,2);
console.log(guest_list)