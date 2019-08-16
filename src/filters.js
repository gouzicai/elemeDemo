export function distanceFilter(num){
    if(num > 1000){
        return (num/1000).toFixed(1) + 'km'
    }else{
        return num+'m'
    }
}
export function intFilter(num){
    return parseInt(num)
}

export function oneDecimalFilter(num){
    return Number(num).toFixed(1);
}

export function moneyFilter(value){
    return "￥"+value;
}