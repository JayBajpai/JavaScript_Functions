function showSessionExpire(){
console.log("Your session expired");
}
setTimeout(showSessionExpire, 6000);
console.log("showSessionExpire will execute after 6000 ms");