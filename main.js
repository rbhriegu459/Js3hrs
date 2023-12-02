const btn = document.querySelector('.btn');
const item = document.querySelector('#items');

btn.addEventListener('click', submitItem);

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('https://crudcrud.com/api/7a722e8c985d4e69bee16197abd74592/rationData')
    .then(res => {
        for(var i = 0; i<res.data.length;i++){
            showList(res.data[i]);
        }
    })
    .catch(err => console.log(err));
})

function submitItem(e){
    e.preventDefault();
    const itemName = document.querySelector('#name').value;
    const itemDesc = document.querySelector('#description').value;
    const itemPrice = document.querySelector('#Price').value;
    const itemQuantity = document.querySelector('#Quantity').value;

    if(itemName === '' || itemDesc === '' || itemPrice === '' || itemQuantity === ''){
        const msg = document.querySelector('.msg');
        msg.classList.add('error');
        msg.innerHTML= 'Please enter value in all the fields';
        setTimeout(() => msg.remove(), 3000);
    }

    else{
        let obj = {
            'itemName':itemName,
            'itemDesc':itemDesc,
            'itemPrice':itemPrice,
            'itemQuantity':itemQuantity
        };

        axios.post('https://crudcrud.com/api/7a722e8c985d4e69bee16197abd74592/rationData', obj)
            .then(res => {
                showList(obj);
            })
            .catch(err => console.log(err));
    }
}

function showList(obj){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${obj.itemName} - 
    ${obj.itemDesc} - Rs.${obj.itemPrice} - ${obj.itemQuantity}`))

    item.appendChild(li);

    const BuyOneBtn = document.createElement('button');
    BuyOneBtn.className = "BuyOne buyBtn";
    BuyOneBtn.appendChild(document.createTextNode("Buy One"));
    li.appendChild(BuyOneBtn);

    const BuyTwoBtn = document.createElement('button');
    BuyTwoBtn.className = "BuyOne buyBtn";
    BuyTwoBtn.appendChild(document.createTextNode("Buy Two"));
    li.appendChild(BuyTwoBtn);

    const BuyThreeBtn = document.createElement('button');
    BuyThreeBtn.className = "BuyOne buyBtn";
    BuyThreeBtn.appendChild(document.createTextNode("Buy Three"));
    li.appendChild(BuyThreeBtn);


    BuyOneBtn.addEventListener('click',() => {
        const idPosted = obj._id;
        if(obj.itemQuantity>=1){
            axios.put(`https://crudcrud.com/api/7a722e8c985d4e69bee16197abd74592/rationData/${idPosted}`, 
            {
                'itemName':obj.itemName,
                'itemDesc':obj.itemDesc,
                'itemPrice':obj.itemPrice,
                'itemQuantity':obj.itemQuantity-1
            })
            .then(res => {
                location.reload();
            })
            .catch(err=> console.log(err));
        }

        else{
            const msg = document.querySelector('.msg');
            msg.classList.add('error');
            msg.innerHTML= `The quantity of the ${obj.itemName} is less than 1`;
            setTimeout(() => msg.remove(), 3000);
        }
    })

    BuyTwoBtn.addEventListener('click',() => {
        const idPosted = obj._id;
        if(obj.itemQuantity>=2){
            axios.put(`https://crudcrud.com/api/7a722e8c985d4e69bee16197abd74592/rationData/${idPosted}`, 
            {
                'itemName':obj.itemName,
                'itemDesc':obj.itemDesc,
                'itemPrice':obj.itemPrice,
                'itemQuantity':obj.itemQuantity-2
            })
            .then(res => {
                location.reload();
            })
            .catch(err=> console.log(err));
        }

        else{
            const msg = document.querySelector('.msg');
            msg.classList.add('error');
            msg.innerHTML= `The quantity of the ${obj.itemName} is less than 2`;
            setTimeout(() => msg.remove(), 3000);
        }
    })

    BuyThreeBtn.addEventListener('click',() => {
        const idPosted = obj._id;
        if(obj.itemQuantity>=3){
            axios.put(`https://crudcrud.com/api/7a722e8c985d4e69bee16197abd74592/rationData/${idPosted}`, 
            {
                'itemName':obj.itemName,
                'itemDesc':obj.itemDesc,
                'itemPrice':obj.itemPrice,
                'itemQuantity':obj.itemQuantity-3
            })
            .then(res => {
                location.reload();
            })
            .catch(err=> console.log(err));
        }
        else{
            const msg = document.querySelector('.msg');
            msg.classList.add('error');
            msg.innerHTML= `The quantity of the ${obj.itemName} is less than 3`;
            setTimeout(() => msg.remove(), 3000);
        }
    })
}