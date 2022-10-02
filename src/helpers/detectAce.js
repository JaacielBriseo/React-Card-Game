export const detectAce = (arr,value,aces) => {
    const valueToRest = []
    if(arr.includes('Aceclubs')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
    if(arr.includes('Acediamonds')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
    if(arr.includes('Acehearts')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
    if(arr.includes('Acespades')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
}
