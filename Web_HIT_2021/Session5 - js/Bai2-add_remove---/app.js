const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

//chèn thêm 2 phần tử
insertUser(users,5,'bien',20,'male',20000)
insertUser(users,6,'Minh bien',21,'female',19300)
// xóa element
removeUser(users,2)
// hiển thị danh sách
viewUser(users)
// tìm kiếm
statistical(users,'male',15)
// tổng tiền người có id chẵn
console.log(sumPrice(users))
// giầu nghèo
findRichAndpoor(users)
// chuyển male to female
replaceGender(users)


//function xem phần tử trong mảng
function viewUser(users) {
    users.forEach(ele=>{
        console.log(ele)
    })
}

// function chèn hoặc sửa nội dung nếu id trung với id hiện tại
function insertUser(users,local,name,age,gender,money) {
        users.find(ele =>{
            if(ele.id == local){
                return ele.name=name
                ,ele.age = age
                ,ele.gender = gender
                ,ele.gender = money
            }
        })
        let b = users.every(ele =>{
            return(!(ele.id == local))
        })
        if(b)  users.splice(local,0,{id : local > users.length ? users.length+1 :local,name:name, age: age,gender:gender, money: money})
}

//function xoas phan tu
function removeUser(users,id){
    users.splice(id-1,1)
    users.forEach(ele =>{
        if(ele.id>=id)
            return ele.id = ele.id-1
    })
}

function statistical(users,gender,age) {
    let countGender =0
    let countAge = 0
    users.forEach(ele =>{
        if(ele.gender==gender)
            countGender++
    })
    users.forEach(ele =>{
        if(ele.age>age)
            countAge++
    })
    console.log(`số người male : ${countGender}`)
    console.log(`số người trên 15 tuổi : ${countAge}`)
}

function sumPrice(users){
    let sum = 0
    users.forEach(ele =>{
        if(ele.id%2==0)
           sum+=ele.money
    })
    return sum
}

function findRichAndpoor(users){
    let userMoney = users.map(ele =>{
        return ele.money;
    })
    users.forEach(ele =>{
        if(Math.max(...userMoney)==ele.money)
            console.log(ele)
        if(Math.min(...userMoney)==ele.money)
            console.log(ele)
    })
}

function replaceGender(users) {
    users.forEach(user =>{
        if(user.gender == 'male')
            user.gender = 'female'
    })
    console.log(users)
}