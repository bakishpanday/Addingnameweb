
let itemText = document.getElementById('txtItem');
let shoppingListItems = document.getElementById('shoppingList');
let items = []; 
let sayingHeader = document.getElementById('saying');
let saying = [ 'To the man who only has a hammer, everything he encounters begins to look like a nail.—Abraham Maslow',
    'We are what we repeatedly do; excellence, then, is not an act but a habit.—Aristotle',
   'A wise man gets more use from his enemies than a fool from his friends.—Baltasar Gracian',
    'Do not seek to follow in the footsteps of the men of old; seek what they sought.—Basho',
    'All men are frauds. The only difference between them is that some admit it. I myself deny it.—H. L. Mencken',
    'I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.—Victor Hugo',
   'I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.—Woody Allen',
    'I have made this letter longer than usual because I lack the time to make it shorter.—Blaise Pascal',
    'Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.—Cale Yarborough',
    'An inventor is simply a fellow who doesn’t take his education too seriously.—Charles F. Kettering',
]

let header = document.getElementById('header');
let description = document.getElementById('description');
let bannerPos = 0;
let banners = [
    'banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg', 'banner5.jpg',
    'banner6.jpg', 'banner7.jpg', 'banner8.jpg', 'banner9.jpg', 'banner10.jpg'];

let masterTimer = setInterval('NextBanner();',4000);

function NextBanner() {
    bannerPos++;
    if(bannerPos == bannerPos.length) {
       bannerPos = 0;
   
}
header.setAttribute('style', 'background: url("assets/images/' + 
        banners[bannerPos] + '"); background-size: cover;');
    
}
function randomQuote() { 
     let randNum = Math.floor(Math.random() * (saying.length)); 
    document.getElementById('sayingHeader').innerHTML = sayingHeader[randNum];
} 

function ClearItems() {
    items = []; 
    shoppingListItems.innerHTML = ''; 
} 

function AddItem() {
    let item = itemText.value; 
    items.push(item); 
    DrawItems();

    
    itemText.value = '';
    itemText.focus();
} 

function RemoveItem(idx) {
    items.splice(idx, 1);
    DrawItems();
} 

function DrawItems() {
    shoppingListItems.innerHTML = ''; 

    
    
    for(let i = 0; i < items.length; i++) {
        
        curItem = document.createElement('li');
        curItem.setAttribute('class', 'listItem');
        curItem.innerHTML = items[i];
        shoppingListItems.appendChild(curItem);
        
        btnImg = document.createElement('img');
        btnImg.setAttribute('src', 'assets/images/deleteImg.png');
        btnImg.setAttribute('class', 'btnDelete');
        btnImg.setAttribute('onclick', 'RemoveItem(' + i + ');');
        shoppingListItems.appendChild(btnImg);
    } 
} 