async function jay(){
    console.log('inside function');
    const response = await fetch ('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
}
console.log("Before calling jay");
let a = jay();
console.log("After calling jay"); 
console.log(a);
a.then(data => console.log(data))
console.log("last line of this code");