// const btn = document.querySelector(".btn");
// const item = document.querySelector("#items");
// const frm = document.querySelector('#my-form');
// const apiUrl =
//   "http://localhost:4000/get/api";

// btn.addEventListener("click", submitItem);

// window.addEventListener("DOMContentLoaded", async () => {
//     try{
//       const res = await axios.get(apiUrl);
//       for (var i = 0; i < res.data.length; i++) {
//         showList(res.data[i]);
//       }
//     }
//     catch (err) {
//       console.log(err)
//     };
// });

// async function submitItem(e) {
//   e.preventDefault();
//   const itemName = document.querySelector("#name").value;
//   const itemDesc = document.querySelector("#description").value;
//   const itemPrice = document.querySelector("#Price").value;
//   const itemQuantity = document.querySelector("#Quantity").value;

//   if (
//     itemName === "" ||
//     itemDesc === "" ||
//     itemPrice === "" ||
//     itemQuantity === ""
//   ) {
//     const msg = document.querySelector(".msg");
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter value in all the fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     let obj = {
//       itemName: itemName,
//       itemDesc: itemDesc,
//       itemPrice: itemPrice,
//       itemQuantity: itemQuantity,
//     };

//     await axios.post(apiUrl, obj)
//       .then((res) => {
//         showList(res.data);
//         frm.reset();
//       })
//       .catch((err) => console.log(err));
//   }

  
// }

// function showList(obj) {
//   const li = document.createElement("li");
//   const quantity = parseInt(obj.itemQuantity); 

//   li.appendChild(
//     document.createTextNode(`${obj.itemName} - 
//     ${obj.itemDesc} - Rs.${obj.itemPrice} - ${quantity}`)
//   );

//   item.appendChild(li);

//   const BuyOneBtn = createButton("Buy One", 1, obj, li);
//   const BuyTwoBtn = createButton("Buy Two", 2, obj, li);
//   const BuyThreeBtn = createButton("Buy Three", 3, obj, li);

//   li.appendChild(BuyOneBtn);
//   li.appendChild(BuyTwoBtn);
//   li.appendChild(BuyThreeBtn);
// }

// function createButton(text, quantity, obj, listItem) {
//   const btn = document.createElement("button");
//   btn.className = "BuyOne buyBtn";
//   btn.appendChild(document.createTextNode(text));

//   btn.addEventListener("click", () => {
//     console.log('click');
//     handleButtonClick(obj, quantity, listItem);
//   });

//   return btn;
// }

// async function handleButtonClick(obj, quantity, listItem) {
//   const idPosted = obj._id;
//   const currentQuantity = parseInt(obj.itemQuantity, 10); 

//   if (currentQuantity >= quantity) {
//     await axios
//       .put(`${apiUrl}/${idPosted}`, {
//         itemName: obj.itemName,
//         itemDesc: obj.itemDesc,
//         itemPrice: obj.itemPrice,
//         itemQuantity: currentQuantity - quantity,
//       })
//       .then((res) => {
//         obj.itemQuantity = (currentQuantity - quantity).toString(); 
//         updateQuantityOnScreen(listItem, obj);
//       })
//       .catch((err) => console.log(err));
//   } else {
//     const msg = document.querySelector(".msg");
//     msg.classList.add("error");
//     msg.innerHTML = `The quantity of the ${obj.itemName} is less than ${quantity}`;
//     setTimeout(() => msg.remove(), 3000);
//   }
// }

// function updateQuantityOnScreen(listItem, obj) {
//   const quantityNode = listItem.childNodes[0];
//   quantityNode.textContent = `${obj.itemName} - 
//     ${obj.itemDesc} - Rs.${obj.itemPrice} - ${obj.itemQuantity}`;
// }