import React from 'react';

export default function ItemCart({ product, removeItemCart }) {
	return (
		<div>
			<div>
				<div>{product.title}</div>
				<button
					onClick={() => removeItemCart(product.id)}
					style={{ width: 50, position: 'absolute', bottom: 15, right: 15 }}
				>
				</button>
			</div>
		</div>
	);
}
