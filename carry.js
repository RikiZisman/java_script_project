// const showCart = document.getElementById('i_love')

// showCart.onclick = () => {
//     const prinCaring = sessionStorage.getItem('carringarr');

//     const sal = document.querySelector('#sal');
//     // sal.innerHTML = '';
//     sal.classList.add('arrcarringclass');
//     JSON.parse(prinCaring).forEach(element => {
//         console.log(element);
//         const sal1 = document.createElement('div');
//         sal1.classList.add('eachsal');
//         const salDive = document.createElement('div')
//         const sumDive = document.createElement('div')
//         const imgDive = document.createElement('div')
//         const codDive = document.createElement('div')
//         const xbtn = document.createElement('button');
//         xbtn.setAttribute('type', 'button');
//         // xbtn.classList.add('button');
//         xbtn.classList.add(element.id + '')
//         xbtn.innerHTML = '🗑️';
//         sumDive.innerHTML = `<span>${'מחיר: '}</span>${element.price} `;
//         imgDive.innerHTML = `<div id="carImg"><img src="${element.image}" width="15%" ></div>`
//         codDive.innerHTML = `<span>${''}</span> ${element.model} `;

//         sal1.appendChild(xbtn);
//         sal1.appendChild(codDive);
//         sal1.appendChild(salDive);
//         sal1.appendChild(sumDive);
//         sal.append(sal1);
//         sal1.appendChild(imgDive);
//         xbtn.onclick = (e) => {
//             let keepCode = parseInt(e.target.classList.value);
//             let arr = JSON.parse(sessionStorage.getItem('carringarr'));
//             let newSum;
//             let i = 0;
//             arr.forEach(element => {
//                 i++;

//                 if (element.id == keepCode) {
//                     console.log(i);
//                     newSum = element.price;
//                     arr.splice(i - 1, 1);
//                 }
//             });
//             console.log(arr);
//             let sum1 = JSON.parse(sessionStorage.getItem('sum'));
//             sum1 -= newSum;
//             sessionStorage.setItem('sum', JSON.stringify(sum1));
//             sessionStorage.setItem('carringarr', JSON.stringify(arr));
//             sal1.remove();
//         }
//     });
// }

const showCart = document.getElementById('i_love');

showCart.onclick = () => {
  const prinCaring = sessionStorage.getItem('carringarr');
  const sal = document.querySelector('#sal');
  sal.innerHTML = ''; // Clear the existing content before rendering the updated cart

  JSON.parse(prinCaring).forEach(element => {
    const sal1 = document.createElement('div');
    sal1.classList.add('eachsal');

    const salDive = document.createElement('div');
    const sumDive = document.createElement('div');
    const imgDive = document.createElement('div');
    const codeDive = document.createElement('div');
    const xbtn = document.createElement('button');

    xbtn.setAttribute('type', 'button');
    // xbtn.classList.add('button');
    xbtn.classList.add(element.id + '')
    xbtn.innerHTML = '🗑️';

    sumDive.innerHTML = `<span>${'Price: '}</span>${element.price} `;
    imgDive.innerHTML = `<div id="carImg"><img src="${element.image}" width="15%"></div>`;
    codeDive.innerHTML = `<span>${''}</span> ${element.model} `;

    sal1.appendChild(xbtn);
    sal1.appendChild(codeDive);
    sal1.appendChild(salDive);
    sal1.appendChild(sumDive);
    sal.append(sal1);
    sal1.appendChild(imgDive);

    xbtn.onclick = (e) => {
      console.log("onClick xbtn click");

      const keepCode = parseInt(e.target.classList.value);
      console.log("keepCode"+keepCode);
      let arr = JSON.parse(sessionStorage.getItem('carringarr'));
      let i = 0;
console.log(arr);
      arr.forEach(element => {
        i++;
        console.log(element.id);
        if (element.id == keepCode) {
          console.log("i found he item that should be deleted"+i);
          arr.splice(i - 1, 1);
        }
      });
console.log(arr);
      sessionStorage.setItem('carringarr', JSON.stringify(arr));
      sal1.remove();
    };
  });
};

