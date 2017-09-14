/**
 * 欧几里德算法，求最大公约数
 * 欧几里德算法又称辗转相除法
 * 计算两个非整数的p和q的最大公约数，如果q为0则最大公约数是为p，
 * 即将两个非负整数相除取余，再除数除以余取余，
 * 一直循环至直到余数为0止,最后的除数即最大公约数。
 */
 function gcd(p, q){

     if( q === 0) return p;
     r = p % q;
     return gcd(q, r);
 }

 console.log(gcd(377, 319));
 console.log(gcd(15, 35));