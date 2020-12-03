export default {
    addone(state,payload){
        payload.count++
    },
    addtocart(state,payload){
        state.cartlist.push(payload)
    }
}
