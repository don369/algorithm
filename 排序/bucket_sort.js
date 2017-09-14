
class ListSort{
    constructor(list){
        this._handleList(list);
    }
    getList(list){
        this._handleList(list);
    }
    _handleList(list){
        let _list = [];
        let p;
        for(let i = 0, len = list.length; i < len; i ++){
            p = list[i];
            _list[p] = _list[p] ? _list[p] + 1 : 1;
        }
        this._list = _list;
    }

    asc(){
        let _list = this._list;
        let rs = [];

        for(let i = 0, len = _list.length; i < len; i++ ){
            if(!_list[i]) continue;
            rs = rs.concat(Array(_list[i]).fill(i));
        }
        return rs;
    }

    desc(){
        let _list = this._list;
        let rs = [];
        for(let i = _list.length - 1; i >= 0; i-- ){
            if(!_list[i]) continue;
            rs = rs.concat(Array(_list[i]).fill(i));
        }
        return rs;
    }
}

const list = new ListSort([1,2,3,5,3,5,6,8]);
console.log(list.asc());
console.log(list.desc());