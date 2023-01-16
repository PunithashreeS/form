let selectedskillsarray=[];
let checkboxallskillsarray=document.querySelectorAll('input[type=Checkbox]')

checkboxallskillsarray.forEach((skill,index)=>{
    skill.addEventListener('click',(skill)=>{
        if(skill.target.checked){
            selectedskillsarray.push(skill.target.value)
        }
        else{
            let deselectedindex =selectedskillsarray.findIndex(ele=> ele===skill.target.value)
            selectedskillsarray.splice(deselectedindex,1)
        }
    })
})


//Accessing Elements to show Output 
let fullname =document.getElementById('fullname')
let mobilenumber = document.getElementById('mobilenumber')
let mailid =document.getElementById('mailid')
let dateofbirth =document.getElementById('dateofbirth')
let yearofpassout =document.getElementById('yearofpassout')
let skills =document.getElementById('skills')
let preferredlocation =document.getElementById('preferredlocation')
let moreaboutyou =document.getElementById('moreaboutyou')


//accessing Textbars
let fname=document.getElementById('fname')
let Mobile = document.getElementById('Mobile')
let lname=document.getElementById('lname')
let email= document.getElementById('email')
let DOB = document.getElementById('date')
let description=document.getElementById('description')


//accessing dropdown
let locationvalue=document.getElementById('locationdropdown')
//---------------------------------------------------


 
let headingfordetails=document.getElementById('headingfordetais')


function submitform(){

    headingfordetails.style.display='block'
   
    fullname.innerHTML=`<b>Full Name : </b>`+fname.value+' '+lname.value
    mobilenumber.innerHTML=`<b>Mobile : </b>`+Mobile.value
    mailid.innerHTML=`<b>Mail ID : </b>`+email.value
    dateofbirth.innerHTML=`<b>DOB : </b>`+DOB.value
    
            //Accessing radiobtn


    let radiobtn=document.querySelectorAll('input[type=radio]')
    
    let yearofpass='';
    radiobtn.forEach(year=>{
      if(year.checked){
        yearofpass=year.value
      }
    })
    yearofpassout.innerHTML=`<b>Year Of PassOut : </b>`+yearofpass
    
    let li='';
  selectedskillsarray.forEach(skill=>{
    li=li+`<li>${skill}</li>`
  })
    li=li?li:'No Programming Languages Known'

   let ul=`<ul>${li}</ul>`
  skills.innerHTML=`<span><b>Skills :</b></span>${ul}`
  
  preferredlocation.innerHTML=`<b class="boldhint">Preferred Location : </b>`+locationvalue.value
  
  moreaboutyou.innerHTML=`<b>Description: </b>`+description.value
    
}
