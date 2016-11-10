# Equi Task in Javascript

```
function solution(A) {
  var total = (function(a){
      var l = a.length, s = 0;
      while(--l>-1){ s+=a[l] }
      return s;
      }(A)),
  eq = -1,
  l = A.length,
  Lsum = 0,
  Rsum = 0;
  A.forEach(function(n,i){
    Rsum = total - Lsum - n;
    if(Rsum == Lsum){ eq = i;}
    Lsum += n;
  });
  return eq;
}
```
