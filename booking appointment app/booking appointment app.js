const form= document.getElementById('my-form');
const itemlist=document.getElementById('list of user');

document.addEventListener('DOMContentLoaded',refresh)
function refresh(){
    axios.get('http://localhost:4000/user/get-users')
      
    .then((response)=>{
        console.log(response);
    for(var i=0;i<response.data.allUsers.length;i++){
        ShowNewUsersOnScreen(response.data.allUsers[i]);
    }
    })
    .catch((error)=>{
        console.log(error);
    })
}
form.addEventListener('submit',UserDetails); 
function UserDetails(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phonenumber=event.target.phonenumber.value;
    
   
    let obj={

      name,
      email,
      phonenumber
      
    };
    //console.log(obj,"line 33");
    
    axios.post('http://localhost:4000/user/add-user',obj)
    .then((response)=>{
      console.log(response);
      ShowNewUsersOnScreen(response.data.newUserDetail);
      
    })
    .catch((err)=>{ 
      document.body.innerHTML=document.body.innerHTML+'<h3>something went wrong</h3>';
      console.log(err);
    }) 
}
function ShowNewUsersOnScreen(user){
  form.reset();


  const childHTML=`<li id=${user.id}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.id}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user.id}')>Edit User </button>
                          </li>`
  itemlist.innerHTML=itemlist.innerHTML+childHTML;
}
function deleteUser(userid){
    axios.delete(`http://localhost:4000/user/delete-user/${userid}`)
    .then(()=>{
        removeFromScreen(userid);
    })
    .catch((error)=>{
      console.log(error);
    })
       
}
function editUserDetails(email,name,phonenumber,userid){
 
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  document.getElementById('phonenumber').value =phonenumber;
  deleteUser(userid)
  let obj={
    name,
    email,
    phonenumber,
    password
  };
  axios.put('https://crudcrud.com/api/402d0977c45a4455ac2303bd5843dbee/appointment',obj)
  .then(()=>{

    ShowNewUsersOnScreen(obj); 
  })
  .catch((error)=>{
    console.log(error);
  })   
}
function removeFromScreen(userid){
    
    const childNodeToBeDeleted=document.getElementById(`${userid}`);
    
    if(childNodeToBeDeleted != null){
      itemlist.removeChild(childNodeToBeDeleted);
    }
}
  