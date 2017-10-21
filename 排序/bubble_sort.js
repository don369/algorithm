
/**
 * 冒泡法，
 */
class BubbleSort {
    constructor(list) {
        this.list = list;
        this._handleList();
    }

    _handleList(){
        const list = this.list;
        const len = list.length - 1;
        for(let i = 0; i < len; i++){
            for(let j = 0; j < len - i; j++){
                if(list[j] > list[j +1]){
                    let temp = list[j];
                    list[j] = list[j+1];
                    list[j + 1] = temp;
                }
            }
        }
    }

    asc() {
        return this.list;
    }

    desc() {
        const list = [];
        for(let i = this.list.length - 1; i >= 0; i--){
            list.push(this.list[i]);
        }
        return list;
    }
}

const list = new BubbleSort([100,20,90, 40, 60, 80, 30, 70, 90, 10, 50, 0]);
console.log(list.asc());
console.log(list.desc());