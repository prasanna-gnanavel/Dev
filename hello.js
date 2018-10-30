// define async function:
function login(username, password, callback){
  console.log('I will be logged second');
  // Another async call nested inside. A common	 pattern:
  setTimeout(function(){
    console.log('I will be logged third');
    callback(null, {});
  }, 1000);
};

//  invoke async function:
console.log('I will be logged first');
login("er", "wer", function(err,result){
  console.log('I will be logged fourth');
  console.log('The user is', result)
});