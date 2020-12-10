function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
//we wan to be able to move the player

//1. start by selecting the image for the player
const avatar = document.querySelector("#player");

//5. select the coin location using DOM
const coin = document.querySelector("#coin");

//2.add an event for keyup activities and attach it to the window
//we want to work with arrows
window.addEventListener("keyup",function(e){
    if (e.key === 'ArrowDown' || e.key === 'Down'){
    const currTop = extractPos(avatar.style.top);
    //this variable is now our current top position
    //currently it's set to an empty string, NaN. we change that @38
    avatar.style.top=`${currTop + 50}px`;
    //we want to set the avatar to be move down
    //this line means we're adding more pixels to the top, thus
    //moving the avatar down
    } else if(e.key === "ArrowUp" || e.key === "Up"){
        const currTop = extractPos(avatar.style.top);
        avatar.style.top=`${currTop - 50}px`;
        //this time we're taking the current position and subtracting
        //pixels from the top, thus moving the avatar up
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft + 50}px`;
        avatar.style.transform = 'scale(1,1)';
        //transform makes the avatar mirror to look right
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft - 50}px`;
        avatar.style.transform = 'scale(-1,1)';
        //transform makes the avatar mirror to look left
    }
    if(isTouching(avatar, coin)) moveCoin();
});
    // avatar.style.top="200"; 
    // console.log(e.key); to see our recorded keyups

//3. we made a function called extractPos to get our position
//we also want the positin to be a number and not including px
//px makes it into a string. use slice starting from 0, ended at -2
//this removes the last 2 characters of the slice, px.
const extractPos = (pos)=>{
    if(!pos) return 100;
    //this sets the position to 100 if it's currently at NaN
    //make sure this matches whatever the avatar position is set
    //in the css file, otherwise when we make our first
    //arrow key, it'll move as if the start should be 0
    //ex before this was set to top 0, and css was 100.
    //when we press arrow down, it actually moved the avatar up
    return parseInt(pos.slice(0,-2));
}
//this is where we slice our positino
//parseInt makes things into a number but putting in it's parameters
//the pos, our position event, and slicing it

//4. to move the coin
const moveCoin = () => {
    const x = Math.floor(Math.random()*window.innerHeight);
    const y = Math.floor(Math.random()*window.innerHeight);
    coin.style.top=`${y}px`
    coin.style.left=`${x}px` 
};
//we want the coiin to move somewhere in our page within the 
//available screen size
//now our coin moves selected by the x and y axis variables

moveCoin();

//////////////////////////////////////////////////////////////////////
//REFACTORED. we put eeeverything in a function
//then made moveVertical and horizontal variables so less repitition

// function isTouching(a, b) {
// 	const aRect = a.getBoundingClientRect();
// 	const bRect = b.getBoundingClientRect();

// 	return !(
// 		aRect.top + aRect.height < bRect.top ||
// 		aRect.top > bRect.top + bRect.height ||
// 		aRect.left + aRect.width < bRect.left ||
// 		aRect.left > bRect.left + bRect.width
// 	);
// }

// const init = () => {
// 	const avatar = document.querySelector('#player');
// 	const coin = document.querySelector('#coin');
// 	moveCoin();
// 	window.addEventListener('keyup', function(e) {
// 		if (e.key === 'ArrowDown' || e.key === 'Down') {
// 			moveVertical(avatar, 50);
// 		}
// 		else if (e.key === 'ArrowUp' || e.key === 'Up') {
// 			moveVertical(avatar, -50);
// 		}
// 		else if (e.key === 'ArrowRight' || e.key === 'Right') {
// 			moveHorizontal(avatar, 50);
// 			avatar.style.transform = 'scale(1,1)';
// 		}
// 		else if (e.key === 'ArrowLeft' || e.key === 'Left') {
// 			moveHorizontal(avatar, -50);
// 			avatar.style.transform = 'scale(-1,1)';
// 		}
// 		if (isTouching(avatar, coin)) moveCoin();
// 	});
// };

// const moveVertical = (element, amount) => {
// 	const currTop = extractPos(element.style.top);
// 	element.style.top = `${currTop + amount}px`;
// };
// const moveHorizontal = (element, amount) => {
// 	const currLeft = extractPos(element.style.left);
// 	element.style.left = `${currLeft + amount}px`;
// };

// const extractPos = (pos) => {
// 	if (!pos) return 100;
// 	return parseInt(pos.slice(0, -2));
// };

// const moveCoin = () => {
// 	const x = Math.floor(Math.random() * window.innerWidth);
// 	const y = Math.floor(Math.random() * window.innerHeight);
// 	coin.style.top = `${y}px`;
// 	coin.style.left = `${x}px`;
// };

// init();
