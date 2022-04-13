function convert_from_CLP_to_USD(amount_in_usd){
  return Math.round((amount_in_usd)/800)}
  
function convert_from_USD_to_CLP(amount_in_clp){
  return amount_in_clp*800}
  

export default function formatCurrency(amount, currency){
    if(currency === "USD") {
        return `${convert_from_USD_to_CLP(amount)} CLP (${amount} USD)`
    }
    else {
        return `${amount} CLP (${convert_from_CLP_to_USD(amount)} USD)`
    }
}