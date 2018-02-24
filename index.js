'use strict'

const jordan = {
    name: 'Jordan',
    age: 33,
    happy: true,
    hairColor: 'brown'
}

const luke ={
    hair: 'blonde'
}

const peter = {
    hair: 'red'
}

const studentArray = [jordan, luke, peter ]
console.log(typeof jordan, jordan)


for (let i = 0; i < studentArray.length; i++) {
    console.log('Hello, ${studentArray[i].name}. I heard you are are ${student.Array[i].age}.')
}
