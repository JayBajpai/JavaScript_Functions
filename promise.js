let p = new Promise((resolve, reject) => {
    let present = 1 
    if  (present == 1) {
        resolve('Employee is Present')
    }else {
        reject('Employee is Absent')
    }
})

p.then((message) => {
    console.log('Today ' +message)
}).catch((message)=> {
    console.log('Today ' +message)
})