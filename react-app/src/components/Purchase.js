import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from "../store/purchases";
import SubPurchase from "./SubPurchases";
import './Purchase.css'


const Purchase = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    let purchases = useSelector(state => state.purchases)
    
    const orderPurchases = () => {
        const new_purchases = {}

        for (let key in purchases) {
            let purchase = purchases[key]
            if (new_purchases[purchase.purchaseId]) {
                new_purchases[purchase.purchaseId][key] = purchase
            } else {
                new_purchases[purchase.purchaseId] = {}
                new_purchases[purchase.purchaseId][key] = purchase
            }
        }

        const purchasesArr = []
        for (let key_i in new_purchases) {
            let subPurchasesObj = new_purchases[key_i]
                const subPurchasesArr = []
                for (let key_j in subPurchasesObj) {
                    let subPurchase = subPurchasesObj[key_j]
                    subPurchasesArr.push(subPurchase)
                }
                purchasesArr.push(subPurchasesArr)
        }
        purchases = purchasesArr
    }
    
    orderPurchases(purchases)

    console.log('Purchases: ',purchases)

    useEffect(() => {
        if (user.id) {
            dispatch(getPurchasesThunk(user.id))
        }
    }, [dispatch])

    return (
        <div className='purchases' >
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Order#</th>
                            <th>Meme Name</th>
                            <th>Price/unit</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {purchases.map((subPurchase, i) => (
                        <tbody key={`skey-${i}`}>
                            <tr className='order-number'>
                                <td>{subPurchase[0].purchaseId}</td>
                                <td></td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                            
                            < SubPurchase key={`skey-${i}`} subPurchase={subPurchase} />
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Purchase;