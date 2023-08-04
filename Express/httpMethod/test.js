const users= [
    {id:1,name:'shankar',age:24},
    {id:2,name:'Shannn',age:23},
    {id:3,name:'Praveena',age:20},
    {id:4,name:'Jerry',age:21},
    {id:5,name:'Ammmuuu',age:22}

]

let title ="NAAA THA"

const userData = users.map((item)=>{
    if(item.id === 3){
        return {...item,title:title}
    }else{
        return item
    }
})
console.log(userData)