export default {
    addTocart(context,payload){
        return new Promise((resolve,reject) =>{
            let good = context.state.cartlist.find( item => {
                return item.iid == payload.iid
            })
            if(good){
                context.commit('addone',good)
                resolve('商品数量加1')
            }else{
                payload.count = 1
                context.commit('addtocart',payload)
                resolve('添加商品成功')
            }
        })
    }
}