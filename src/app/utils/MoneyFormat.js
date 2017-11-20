export const fMoney = (n)=> {
    n = n.toString().replace(/,/g, '');
    n = n.split('').reverse().join('');
    n = n.match(/.{1,3}/g);
    n = n.toString();
    n = n.split('').reverse().join('');
    return n;
};
