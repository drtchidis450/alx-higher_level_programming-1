#!/usr/bin/node
// Script that print a message depending on the number of argument

if (process.argv.length ===2)
{
	console.log('No argument');
}
else if (process.argv.length ===3)
{
	console.log('Agument found');
}

else
{
	console.log('Argument found');
}
