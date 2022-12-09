const form= document.getElementById('my-form');
const itemlist=document.getElementById('list of user');

document.addEventListener('DOMContentLoaded',refresh);
function refresh(){
    axios.get('http://localhost:4000/expense/get-expensive')
    .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.allExpenses.length;i++){
          ShowNewUsersOnScreen(response.data.allExpenses[i]);
          }
        })
    .catch((err) => {
        console.log(err)
    })
}

form.addEventListener('submit',saveToLocalStorage);
async function saveToLocalStorage(e){
    e.preventDefault();
    const chooseexpensive = document.getElementById('chooseexpensive').value;
    const choosetheater = document.getElementById('choosetheater').value;
    const choosemovie = document.getElementById('choosemovie').value;
    const expense = {
        chooseexpensive,
        choosetheater,
        choosemovie
    };
    axios.post('http://localhost:4000/expense/add-expensive',expense)
    .then(()=>{
        ShowNewUsersOnScreen(expense);  
    })
    .catch((err)=>{
        console.log(err);
    })
}
function ShowNewUsersOnScreen(user){
    form.reset();
    
    const childHTML=`<li id=${user.id}> ${user.chooseexpensive}-${user.choosetheater}-${user.choosemovie}
                        <button onclick=deleteuser('${user.id}')> Delete user </button>
                        <button onclick=editUserDetails('${user.choosetheater}','${user.chooseexpensive}','${user.choosemovie}','${user.id}')>Edit</button></li>`
    itemlist.innerHTML=itemlist.innerHTML+childHTML;
}
function deleteuser(userid){
    axios.delete(`http://localhost:4000/expense/delete-expensive/${userid}`)
    .then(() => {
        removeExpenseFromScreen(userid);
    })
    .catch((err) => {
        console.log(err);
    })
}
function editUserDetails(choosetheater,chooseexpensive,choosemovie,userid){
    document.getElementById('chooseexpensive').value = chooseexpensive;
    document.getElementById('choosetheater').value = choosetheater;
    document.getElementById('choosemovie').value =choosemovie;
    deleteuser(userid)
    const expense = {
        chooseexpensive,
        choosetheater,
        choosemovie
    };
    axios.put('https://crudcrud.com/api/62d890f5292446c0a507068940b75dba/addexpensive',expense)
    .then(()=>{
        ShowNewUsersOnScreen(expense);
    })
    .catch((err)=>{
        console.log(err);
    })
}
function removeExpenseFromScreen(userid){
    const expenseToBeDeleted = document.getElementById(`${userid}`);
    if(expenseToBeDeleted != null){
        itemlist.removeChild(expenseToBeDeleted);
    }
}

/*html code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Demo</h1>
    <form id="my-form" >

        <label for="chooseexpensive">ChooseExpensive:</label>
        <input type="number" id="chooseexpensive" style="margin-left:5px" required>
        <label for="choosetheater">ChooseTheater:</label>
        <input type="'text" id="choosetheater">
        <label for="choosemovie">ChooseMovie:</label>
        <select id="choosemovie" id="choosemovie"  style="margin-left:5px">
            <option value="KGF">KGF</option>
            <option value="RRR">RRR</option>
            <option value="Pushpa">Pushpa</option>
            <option value="Sita Ramam">Sita Ramam</option>
        </select>
        <input class="btn" type="submit" value="AddExpensive">
    
</form>
<ul id="list of user" class="'list-group"></ul>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js"></script>
    <script src="axiosproject.js"></script>
</body>
</html>
*/