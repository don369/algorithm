/**
 * 最小栈，最大栈
 */

 class Stack{
     constructor(){
         this.stack = [];
         this.min_stack = [];
         this.max_stack = [];
         this.min = 0;
         this.max = null;
     }

     push(int){
        this.stack.push(int);
        this.handlePush();
     }

     pop(){
        const stack_p = this.stack.length - 1; 
        let min_save_p = this.min_stack[this.min_stack.length - 1];
        let max_save_p = this.max_stack[this.max_stack.length - 1];

        this.stack.pop();

        if(stack_p === min_save_p){
            this.min_stack.pop();
            min_save_p = this.min_stack[this.min_stack.length - 1];
            this.min = this.stack[min_save_p] || null;
        }
        if(stack_p === max_save_p){
            this.max_stack.pop();
            max_save_p = this.max_stack[this.max_stack.length - 1];
            this.max = this.stack[max_save_p  - 1] || null;
        }

     }

     handlePush(){
         let p = this.stack.length - 1;
         let val = this.stack[p];

         if(val > this.max || p == 0){
             this.max = val
             this.max_stack.push(p);
         }

         if(val < this.min || p == 0){
            this.min = val;
            this.min_stack.push(p);
        }

     }

     getMin(){
         return this.min;
     }
     getMax(){
         return this.max;
     }
 }

 const stack = new Stack();
 stack.push(1000);
 stack.push(2);
 stack.push(4);
 stack.push(1);
 stack.push(5);
 stack.push(10);
 stack.push(0);
 stack.pop();
 stack.pop();
 console.log(stack.getMin());
 console.log(stack.getMax());