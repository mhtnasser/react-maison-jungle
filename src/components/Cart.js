import { useState, useEffect } from 'react'
import '../styles/cart.css'

function Cart({cart, updateCart}) {
    const [ isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    useEffect(() => {
        document.title = `LJM ${total}$ d'achat`
    }, [total])
    

    return isOpen ? (
        (<div className="lmj-cart">
            <button 
                className='lmj-cart-toggle-button' 
                onClick={() => setIsOpen(false)}
            >
                Fermer le Panier
            </button>
            <h2>Panier</h2>
            <ul>
                {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                    </div>
                ))}
            </ul>
            <h3>Total : { total } €</h3>
            <button onClick={() => updateCart([])} >Vider</button>
            
            
        </div>)
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)} 
            >
                Ouvrir le Panier
            </button>
        </div>
        
    )
}

export default Cart