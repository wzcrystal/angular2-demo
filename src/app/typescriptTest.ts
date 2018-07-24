/**
 * Created by crystal on 2017/11/8.
 */
function change(person:string){
  console.log(person);
}

var person='crystal';

change(person);

interface Person{
  firstName:string,
  lastName:string
}

function setPerson(person:Person){
  console.log(person.firstName+' '+person.lastName);
}

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);
