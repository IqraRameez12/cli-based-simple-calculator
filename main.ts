#!/usr/bin/env node

import inquirer from "inquirer";
const answer=await inquirer.prompt([
    {    name:"FirstNumber",
        message:"Enter your first number",
        type:"number"    },
        
    {   name:"secondNumber",
         type:"number",
         message:"Enter your secondNumber"
    },
    {   name:"operator",
        type:"list",
        message:"Select your operator to perform operation",
        choices:["+","-","*","/"]      
}]);
//conditional statment:
if(answer.operator==="+"){
    console.log(answer.FirstNumber+answer.secondNumber);
    }
    else if(answer.operator==="-"){
     console.log(answer.FirstNumber-answer.secondNumber);
    }
    else if(answer.operator==="*"){
         console.log(answer.FirstNumber*answer.secondNumber);
    }
    else if (answer.operator==="/"){
         console.log(answer.FirstNumber/answer.secondNumber);
    }
    else {
        console.log("please select a valid number");
    }

