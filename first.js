//telling the user that they have reached the end of the page
window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offseetHeight) {
 // console.log("You have reached the end of the page, please click the back to top button to go back.")
    }

}

const toTheTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
console.log ("Whats up");


// So to user can go back to the last page.
history.back();
history.go(-1);

