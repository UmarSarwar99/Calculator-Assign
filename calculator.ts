import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bold.red('CALCULATOR'));

let cond = true;
while (cond){
let input = await inquirer.prompt([
    {
name:   'n1',
type: 'number',
message:'enter 1st number',
validate: (n:number)=>{if (isNaN(n))
return 'invalid entry'
return true}
    },
    {
    name:   'n2',
    type: 'number',
    message:'enter 2nd number',
    validate: (n:number)=>{if (isNaN(n))
    return 'invalid entry'
    return true}
    },
    {
    name : 'opration',
    type : 'list',
    message: 'select opration',
    choices : ['sum','difference','product','division']    
    }      
])
async function calculator () {
    switch (input.opration) {
        case 'sum':
            let s =  input.n1+input.n2
            console.log(s);
            break;
        case 'difference':
            let d = input.n1 - input.n2
            console.log(d);
            break;
        case 'product':
            let p = input.n1 * input.n2
            console.log(p);
            break;
        case 'division' :
            let di = input.n1 / input.n2
            console.log(di.toFixed(3));
            break;        
    }
}
calculator()
let do_more = await inquirer.prompt([
{
    name : 'key',
    type:'confirm',
    message:'DO YOU WANT MORE CALCULATIONS ?'
}
])
cond = do_more.key
}
