function validateForm(){
let f=document.getElementById("fname").value;
let l=document.getElementById("lname").value;
let p=document.getElementById("password").value;
let e=document.getElementById("email").value;
let m=document.getElementById("mobile").value;
let a=document.getElementById("address").value;

if(!/^[A-Za-z]{6,}$/.test(f)){alert("Invalid First Name");return false;}
if(p.length<6){alert("Password too short");return false;}
if(!/^\S+@\S+\.\S+$/.test(e)){alert("Invalid Email");return false;}
if(!/^\d{10}$/.test(m)){alert("Invalid Mobile");return false;}
if(l==""||a==""){alert("Empty fields");return false;}

alert("Form Submitted");
return true;
}

const freelancers=[
{id:1,name:"Ava",skill:"Design",price:500},
{id:2,name:"Liam",skill:"Dev",price:800}
];

function displayFreelancers(){
let t=document.getElementById("table");
freelancers.forEach(f=>{
let r=t.insertRow();
r.insertCell(0).innerHTML=f.id;
r.insertCell(1).innerHTML=f.name;
r.insertCell(2).innerHTML=f.skill;
r.insertCell(3).innerHTML=f.price;
});
}

function totalEarnings(){
let sum=0;
freelancers.forEach(f=>sum+=f.price);
document.getElementById("total").innerHTML="Total: "+sum;
}