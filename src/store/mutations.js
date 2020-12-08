export default {
    addone(state,payload){
        payload.count++
    },
    addtocart(state,payload){
        payload.checked = true
        state.cartlist.push(payload)
    },
    checkchange(state,payload){
        payload.checked = !payload.checked
    },
    selectAllChange(state,payload){
        payload.item.checked = payload.check
    }
}
