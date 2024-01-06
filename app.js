const calcuform = document.querySelector("#clacform");

let calculate = (event)=>{
  const maxmarks = 400;
  event.preventDefault();

  const formdata = new FormData(calcuform);//taking values from form....

  const data = {};
  formdata.forEach((value,key)=>{
    data[key]= value;

  });
const mark1 = new Number(data.maths);
const mark2 = new Number(data.english);
const mark3 = new Number(data.hindi);
const mark4 = new Number(data.science);
const totalmarks = mark1+mark2+mark3+mark4;
// console.log(totalmarks);
const percentage = ((totalmarks/maxmarks)*100);
const result = document.createElement('p');
result.className = "res";
result.innerText = `you got total marks is ${totalmarks} out of marrks ${maxmarks}  and your percentage is ${percentage}`;
calcuform.after(result);

};

