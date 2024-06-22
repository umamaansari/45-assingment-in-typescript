let guest_list:string[]=[`tarim`, `urooj`, `mahnoor`, `rubisha`];
//for(let i=0; i<guest_list.length;i++){
    //console.log(`Respected sir/Madam`+guest_list[i] +`,\nwe invited you on dinner tomorrow.\nThank you\n`)
let not_present:string=`mizna`;
let new_guest:string=`rimsha`;
guest_list[1]=new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir?Madam`+guest_list[i]+`,\nwe invited you on dinner tomorrow.\nThank you\n`)
}
guest_list.unshift(`noman`, `mureed`, `faizan`);
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir?Madam`+guest_list[i]+`,\nwe invited you on dinner tomorrow.we found big table so we decide to invite 3 more guest\nThank you\n`)
}

