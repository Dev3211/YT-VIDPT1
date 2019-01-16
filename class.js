let obj = {
} //define empty object

class random { //define the class
   constructor(height, age, name){ //main constructor to take in arguments
   this.height = height
   this.age = age
   this.name = name
   }

   output(){ //function to output the height, age and  name
   console.log(`
   height: ${this.height}

   age: ${this.age}

   name: ${this.name}
   `)

   
   }

   getheight(){ //returns height value
   return this.height;
   }

   getage(){ //returns age value
   return this.age;
   }

   getname(){ //returns name value
   return this.name;
   }
}

let classz = new random('156cm', '12', 'idk') //passing in the parameters(height, age, name)
let classzz = new random('144cm', '15', 'isdk') //passing in the parameters(height, age, name)

//after creating the properties by passing in the arguments

obj[classzz.getname()] = { //create an object with the desired data using the functions we have defined in the class
height: classzz.getheight(),
age: classzz.getage()
}

obj[classz.getname()] = {
height: classz.getheight(),
age: classz.getage()
}

console.log(obj) //output the object as in whole after adding your desired data
