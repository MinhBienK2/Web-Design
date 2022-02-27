const email = 'mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com'
const phoneNumber = 'dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734'
const regEmail =/[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}\.[a-z]{3}/g
const regPhone = /\d+/g
const a = email.match(regEmail)
const b = phoneNumber.match(regPhone)
const hello = process.argv[2]
console.log(a)
console.log(b)
console.log(hello.match(regEmail))