/**
 * 快速排序
 */

 function quickSort(arr){

     const len = arr.length - 1;
     let temp ;

     (function handle(left, right){
         let i, j, temp;
         if(left > right) return;

         //设置基准数
         temp = arr[left];
         i = left;
         j = right;

         while(i != j){
             //从右边开始往左寻找小于基准数的下标；
             while(arr[j] >= temp && i < j) j--;
             //然后从左边开始往右寻找大于基准数的下标
             while(arr[i] <= temp && i < j) i++;
            //互换
             if(i < j){
                 [arr[i], arr[j]] = [arr[j], arr[i]];
             }
         }
         //当下标相等时，即基准数的位置，互换。
         arr[left] = arr[i];
         arr[i] = temp;
         //继续处理左边的数值
         handle(left, i - 1);
         //继续处理右边的数值
         handle(i + 1, right);
     })(0, len);

     return arr;
 }

 console.log(quickSort([6,1,2,7,9,3,4,5,10,8]))
 