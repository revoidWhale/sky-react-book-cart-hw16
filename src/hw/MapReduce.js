function MapReduce() {
  let arrNum = [88, 1, 2, 3, 4, 5, 9, 12, 44];
  //максимальное число массива

  let max = 0;

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > max) {
      max = arrNum[i];
    }
  }

  const maxReduce = arrNum.reduce(function (max, current) {
    if (max < current) {
      return current;
    } else return max;
  }, 120);

  console.log(maxReduce);
}

export default MapReduce;

//const nameArrOld = ["Masha", "Alex", "Oleg", "Vicktor", "Marina", "Katya"];

//const liNameArray = nameArrOld.map((name) => `<li>${name}</li>`);

//console.log(liNameArray);

//   const liNameArr = [
//     "<li>Masha</li>",
//     "<li>Alex</li>",
//     "<li>Oleg</li>",
//     "<li>Vicktor</li>",
//     "<li>Vicktor</li>",
//   ];

//   return (
//     <div>
//       <ul>
//         {nameArrOld.map((name) => (
//           <li>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );

//const isMaleName = isMaleName();
//   const nameArrNew = nameArrOld.map(function (name) {
//     if (isMaleName(name)) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

// const nameArrNew = nameArrOld.map( (name) => {
//    return isMaleName(name) ? 1 : 0;  //тернарное выражение
// }

// const nameArrNew = nameArrOld.map( name => isMaleName(name) ? 1 : 0 )

// nameArrOld = [0,1,1,1,0]

// ожидаемый результат  [0,1,1,1,0]

// function MapReduce() {
//     let arrNum = [1, 2, 3, 4, 5, 9, 12, 44];
//     //сумма чисел массива

//     let sum = 0;

//     //   for (let i = 0; i < arrNum.length; i++) {
//     //     sum = sum + arrNum[i];
//     //   }
//     //prev - ака sum - вычисляемое значение равное нулю, если не указано иное значение как параметр функции
//     const sumReduce = arrNum.reduce(function (prev, current, index) {
//       console.log(prev, current);
//       return prev + current;
//     }, 0);

//     console.log(sumReduce);
//   }
