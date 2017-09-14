//更相减损法
function gcd(p, q){
    if( p === q) return q;
    if(p % 2 === 0 && q % 2 === 0){
        p = p / 2;
        q = q / 2;
    }else{
        if(p > q){
            p = p - q;
        }else{
            q = q - p;
        }
    }
    return gcd(p, q);
}
console.log(gcd(377, 319));