export default {
    addTocart(context,payload){
        let good = context.state.cartlist.find( item => {
            return item.iid == payload.iid
        })
        if(good){
            context.commit('addone',good)
        }else{
            payload.count = 1
            context.commit('addtocart',payload)
        }
    }
}