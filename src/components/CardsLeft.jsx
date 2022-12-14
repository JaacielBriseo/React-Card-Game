import { Looser } from "./Looser"
import { Winner } from "./Winner"

export const CardsLeft = ({deck,aces,setResults}) => {
  const resultsNegative = () => {
    if(aces === 0 && deck.length != 0)  
     return true
   }
   const resultsPositive = () => {
     if(aces === 0 && deck.length === 0){
       return true
     }
   }
   if(resultsNegative() || resultsPositive()){
    setResults(true)
   }

  return (
    <>
    <h5>Cards left :{deck.length} <br /> Aces left : {aces} </h5>
    {resultsNegative() && <Looser/>}
    {resultsPositive() && <Winner/>}
    </>
  )
}
