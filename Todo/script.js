let inputValue=document.getElementById('input_field_item')
let addButton=document.getElementById('addBtn')


let count=1;

addButton.addEventListener('click',()=>{
    if(inputValue.value===''){
        toastBox("Error");
    }else{
        let itemList=document.getElementById('item-content');
        itemList.insertAdjacentHTML('beforeend',List(inputValue.value,count++));
        inputValue.value='';
        toastBox('success');
    }
})

const List=(val,len)=>{
    const item=`
        <div class="item" id="item-${len}">
            <input class="check_field" type="checkbox" name="" id="check-${len}" onclick="valueCheck(this.id)" />
            <p class="content">
                ${val}
            </p>
            <img
                
                class="remove-icon"
                src="./img/remove.png"
                alt=""
                srcset=""
                onclick="removeItem('item-${len}')"
            />
        </div>
    `
    return item
}

const valueCheck=(id)=>{
    // console.log(id)
    let checkItem=document.getElementById(id);
    // console.log(checkItem.checked);
    if (checkItem.checked){
        toastBox("completed",id)
    }
}

const removeItem=(val)=>{
    const removeList=document.getElementById(val);
    removeList.remove();
}

const toastContainer=document.getElementById('toast_container');
const successMsg = "New iten has been added";
const errorMsg = "Don't submit empty value!";
// const completedMsg = "Item has been completed";

const toastBox=(msg,val="")=>{
    let toast=document.createElement('div')
    toast.classList.add('toast');
    if(msg==='success' && val===""){
        toast.classList.add('success');
        toast.innerHTML='<img src="./img/success.png" alt="" srcset="" width="20px">'+successMsg;
    }
    if(msg==='Error' && val===""){
        toast.classList.add('error');
        toast.innerHTML='<img src="./img/remove.png" alt="" srcset="" width="20px">'+errorMsg;
    }
    if(msg==='completed' && val!==""){
        toast.classList.add('completed');
        toast.innerHTML=`<img src="./img/success.png" alt="" srcset="" width="20px"> ${val} has been completed"`;
    }
    
    toastContainer.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },5000)
}