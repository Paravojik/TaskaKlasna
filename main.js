
    $('.nicknameInp').css('border','1px solid black')
    $('.gmailInp').css('border','1px solid black')
    $('.passwordInp').css('border','1px solid black')
    let nick=false
    let gmail=false
    let password=false
    let trans=0
nicknameInp.oninput = function(){
    checkName()
}
gmailInp.oninput = function(){
    checkGmail()
 }
 passwordInp.oninput = function(){
    checkPassword()
 }
 $('.btn').mouseenter(function(){
    checkPassword()
    checkGmail()
    checkName()
    if(gmail==true && password==true && nick==true){

    }else if(gmail==false || password==false || nick==false){
        if(trans==0){

            $('.lowtab').css('paddingLeft','150px')
            trans=1
        }else if(trans==1){
            $('.lowtab').css('paddingLeft','30px')
            trans=0
        }
    }
 })
 $('.btn').click(function(){
    if(gmail==true && password==true && nick==true){
        alert('You complited registration')
    }

 })

 function checkName(){
    if(nicknameInp.value.length>0){
        $('.nicknameInp').css('border','1px solid black')
        nick=true
       }else{
        $('.nicknameInp').css('border','1px solid red')
        nick=false
       }
 }
 function checkGmail(){
    if(gmailInp.value.length>0){
        $('.gmailInp').css('border','1px solid black')
        gmail=true
       }else{
        $('.gmailInp').css('border','1px solid red')
        gmail=false
       }
 }
 function checkPassword(){
    if(passwordInp.value.length>6 && passwordInp.value.length<20){
        $('.passwordInp').css('border','1px solid black')
        password=true
       }else{
        $('.passwordInp').css('border','1px solid red')
        password=false
       }
 }

 tippy('#passwordInp', {
    followCursor: true,
    content:"Enter your password bettween 6 and 20 symbols"
  });