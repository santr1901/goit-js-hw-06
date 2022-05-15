
const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

const listName = document.querySelectorAll('h2');
const Itemlist = document.querySelectorAll('.item ul')

for ( let i = 0; i < listName.length; i++) {
console.log(`Category: ${listName[i].textContent}`);
console.log(`Elements: ${Itemlist[i].childElementCount}`);
}












    


    
    
    


