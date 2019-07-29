//* Simple app to sort a group of students in 2s and 3s

// Random integer between min and max, min and max included
const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Fisher-Yates shuffle https://bost.ocks.org/mike/shuffle/
const shuffle = array => {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

const cohort = [
  "Michael",
  "Giovanni",
  // "Gabriel",
  "Jonathan",
  "Jeffery",
  "Darshan",
  "Yousif",
  "Alessander",
  "Eric",
  "Wesley",
  "Nicholas C.",
  "Nicolas H-B",
  "Akinola",
  "Omar",
  "Mohamed",
  "Oscar",
  "Leonardo"
];

const shuffling = arr => {
  let num = randomize(1, 5);
  while (num > 0) {
    arr = shuffle(arr);
    num--;
  }

  return arr;
};

//* Returns an Array of pair arrays , 1 is 3 elements
//* if cohort has odd number of students

const pairing = () => {
  const result = [];
  const studentArray = shuffling(cohort);

  while (studentArray.length > 1) {
    const student = studentArray.pop();
    const pairedStudent = studentArray.shift();
    const pair = [student, pairedStudent];
    result.push(pair);
  }

  //* cohort has odd or even number of students
  if (studentArray.length) {
    result[result.length - 1].push(studentArray[0]);
  }

  return result;
};
// console.log(pairing());

const showPair = (arr, indx) => {
  const pairCard = document.createElement("div");
  const pairTitle = document.createElement("div");
  const pairNames = document.createElement("div");

  pairCard.className = "pair-card";
  pairCard.id = indx;
  pairTitle.className = "pair-title";
  pairTitle.innerText = `Pair ${indx}`;
  pairNames.className = "pair-names";

  for (let i = 0; i < arr.length; i++) {
    const studentName = document.createElement("div");
    studentName.className = "name";
    studentName.id = i + 1;
    studentName.innerText = arr[i];
    pairNames.appendChild(studentName);
  }

  pairCard.append(pairTitle, pairNames);
  document.querySelector("main").appendChild(pairCard);
};

const loopCreate = () => {
  const arr = pairing();
  for (let i = 0; i < arr.length; i++) {
    setTimeout(showPair, 500, arr[i], i + 1);
  }
};

/**
 * ? Look into this:
 * const delay = 1000
*  let cancel
*  cancel = setTimeout(function loop () {
    doSingleAnimation()
    cancel = setTimeout(loop, delay)
}, delay)
...
someOtherSystem.on('pageChange', clearTimeout(cancel))
 */
