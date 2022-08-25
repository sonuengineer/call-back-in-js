const posts=[
    {title:"post one",body:"this is post one",createdAt:new Date().getTime()},
    {title:"post two",body:"this is post two",createdAt:new Date().getTime()}
]



let intervalid=0
function getpost(){

    clearInterval(intervalid)
    intercalid=setInterval(()=>{
        let output=""
        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title} -last updated ${(new Date().getTime()-posts[i].createdAt)/1000}second ago</li>`
        }
        document.body.innerHTML=output

    },1000)
     
}



getpost()

function creatpost(post,callback){
    
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            callback()
        },2000)
    
}



function created4post(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()

    },6000)
}

//creatpost({title:"post three",body:"this is post three"}).then(getpost).catch(err=>console.log(err)).then(deletepost)
creatpost({title:"post three",body:"this is post three"},getpost);

created4post({title:"post four",body:"this is post four"},getpost);

    
var timer
var count=0
function lastEditedSecondAgo(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++
        console.log(count)
    },5000)
}