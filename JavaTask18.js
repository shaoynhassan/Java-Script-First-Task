let x = 0;


if( x%2!=0 && x>0 ){
    console.log("Your Number Odd & Positive")
}
else if( x%2!=0 && x<0 ){
    console.log("Your Number Odd But Not Positive")
}
else if( x%2==0 && x>0 ){
    console.log("Your Number even & Positive")
}
else if( x%2==0 && x<0 ){
    console.log("Your Number even But Not Positive")
}
else{
    console.log("Your Number Not Found")
}
