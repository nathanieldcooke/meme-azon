import React, { useEffect } from "react";

const SubPurchase = ( { subPurchase } ) => {
    return (
        subPurchase.map((purchase, j) => (
            <tr className='item-row' key={`key-${purchase.id}`}>
                <td>{}</td>
                <td>{purchase?.meme?.name}</td>
                <td>{`$${purchase.price}`}</td>
                <td>{purchase.quantity}</td>
                <td>{`$${purchase.total}`}</td>
            </tr>
        ))
    )
}

export default SubPurchase;