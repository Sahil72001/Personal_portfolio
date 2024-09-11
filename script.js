

let n, em, mess, arr = [];
function pdata() {
  n = document.getElementById("name1").value;
  em = document.getElementById("email").value;
  mess = document.getElementById("message").value;
  arr.push(n, em, mess);
  console.log(arr);
  alert("Your data has been submitted successfully");
}