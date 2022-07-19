function calc(){
  var w=document.getElementById('weight')
  var h=document.getElementById('height')
  w=parseFloat(w.value)
  h=parseFloat(h.value)
  var bmi=(w/(h*h))
  var ans=document.getElementById('ans')
  if(bmi<=18.4){
    ans.innerHTML=('You are underweight \<br>' +bmi)
  }
  else if(bmi>18.4 && bmi<=24.9){
    ans.innerHTML=('You are normal \<br>'+bmi)
  }
  else if(bmi>24.9 && bmi<=39.9){
    ans.innerHTML=('You are obese \<br>' +bmi)
  }
  else if(bmi>39.9){
    ans.innerHTML=('You are morbidly obese \<br>' +bmi)
  }
}