export const detectAce = (arr,value,aces) => {
    const valueToRest = []
    if(arr.includes('Ace♣')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
    if(arr.includes('Ace♦')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
    if(arr.includes('Ace♥')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
    if(arr.includes('Ace♠')){
        valueToRest.push('1')
        value(aces -valueToRest.length)
    }
}