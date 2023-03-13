#!/usr/bin/node
// Script that print a message depending on the number of argment

if (process.argv.length ===2){
	console.log('No argument');
	else if (process.argv.length ===3){
		console.log('Aguement found');
	} else {
		console.log('Arguement found');
	}
