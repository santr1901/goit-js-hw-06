
const list = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${list.length}`);

const listName = document.querySelectorAll('#categories h2');
const Itemlist = document.querySelectorAll('#categories ul')

for ( let i = 0; i < listName.length; i++) {
console.log(`Category: ${listName[i].textContent}`);
console.log(`Elements: ${Itemlist[i].childElementCount}`);
}












    


    
    
    


