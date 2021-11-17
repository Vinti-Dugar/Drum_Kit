var count=document.querySelectorAll(".drum").length;
// alert(count);
for(var i=0;i<count;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var d=this.innerHTML;
        hadnleclick(d);
        
    });
    
}
document.addEventListener("keydown",function (event) 
{
    var i=event.key;
    hadnleclick(i);
});
function hadnleclick(d)
{
    // this is used when button is pressed through mouse click
    // var d=this.innerHTML;
    
    // this.style.color='red'
    // d.style.color="red";
    if(d=='w')
    {

        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(d=='a')
    {

        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(d=='s')
    {

        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(d=='d')
    {

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(d=='j')
    {

        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(d=='k')
    {

        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(d=='l')
    {

        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}


// creating object
// var bellboy={
//     name:"vinti",
//     age:16,
//     acess:true,
//     lang:['hindi','english','french']
// }
// // alert(bellboy.name+" language speak "+bellboy.lang); 
// alert(bellboy);
// creating  a constuctor
// function BellBoy(name, age, acess, lang) {
//     this.name=name;
//     this.age=age;
//     this.acess=acess;
//     this.lang=lang;
// }
// var bellboy=new BellBoy("vint",13,true,['english','hindi','french']);
// alert(bellboy.lang+" acess "+bellboy.acess)