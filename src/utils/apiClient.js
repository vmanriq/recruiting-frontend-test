import axios from "axios";

const bemmboClient = axios.create({
    baseURL: 'https://recruiting.api.bemmbo.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
})

export default function getInvoicesPending(){
    return bemmboClient.get('invoices/pending')
}