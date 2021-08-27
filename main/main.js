#!/usr/bin/env node
let helpObj=require("../commands/help")
let organizeObj=require("../commands/organize")
let treeObj=require("../commands/tree")

let contentArr=process.argv.slice(2);

let command=contentArr[0];

let givenpath=contentArr[1];


switch(command){

    case "help":
        helpObj.helpfun();
        break;

    case "tree":
        treeObj.treefun(givenpath,0);
        break;

    case "organize":
         organizeObj.organizefun(givenpath);
         break;

    default :
    console.log("Please enter the write command");
    break;
}