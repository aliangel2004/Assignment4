    function findMissing(array1, array2){
     var i;
     var Missing_numb;
     if (array1.length === 0 && array2.length === 0) {
       return 0;
     }
     for (i in array2){
       if (array1.length === array2.length){
         return 0;
       }
       if (array1.indexOf(array2[i]) === -1){
         Missing_numb = array2[i];
       }
     }
     return Missing_numb;
   }


   module.exports = findMissing