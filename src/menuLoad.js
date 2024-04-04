function clearContent(){
    const content = document.querySelector('#content'); 
    content.innerText = "";
}

export function loadMenuTabToPage(){
    clearContent();
    const content = document.querySelector('#content'); 
    const heading = document.createElement('h1');
    const menu = document.createElement('p');

    menu.classList.add('menu');

    heading.innerText = "Menu";
    menu.innerHTML = `<div style="margin-top: 40px;"></div>
    <strong>Classic Pizzas:</strong>
    
    <p>Margherita Pizza: Fresh tomato sauce, mozzarella cheese, basil leaves. - $10.99</p>
    <p><em style="font-size: 0.8em;">Classic simplicity at its finest.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <p>Pepperoni Pizza: Tomato sauce, pepperoni slices, mozzarella cheese. - $12.99</p>
    <p><em style="font-size: 0.8em;">A timeless favorite with a spicy kick.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <p>Vegetarian Supreme: Tomato sauce, mushrooms, bell peppers, onions, black olives, mozzarella cheese. - $11.99</p>
    <p><em style="font-size: 0.8em;">Loaded with garden-fresh goodness.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <strong>Signature Pizzas:</strong>
    
    <p>BBQ Chicken Pizza: BBQ sauce, grilled chicken, red onions, cilantro, mozzarella cheese. - $13.99</p>
    <p><em style="font-size: 0.8em;">A tangy twist on a classic favorite.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <p>Mediterranean Delight: Pesto sauce, sun-dried tomatoes, artichoke hearts, spinach, feta cheese, kalamata olives. - $14.99</p>
    <p><em style="font-size: 0.8em;">Transport your taste buds to the shores of the Mediterranean.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <p>Spicy Hawaiian: Tomato sauce, ham, pineapple, jalapeños, mozzarella cheese. - $12.99</p>
    <p><em style="font-size: 0.8em;">Sweet, spicy, and oh-so-satisfying.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <strong>Gourmet Pizzas:</strong>
    
    <p>Truffle Mushroom Pizza: Truffle oil-infused cream sauce, mixed mushrooms, caramelized onions, fontina cheese, arugula. - $15.99</p>
    <p><em style="font-size: 0.8em;">Indulge in the luxurious flavors of truffle.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <p>Prosciutto & Fig Pizza: Fig jam, prosciutto, goat cheese, caramelized onions, arugula. - $16.99</p>
    <p><em style="font-size: 0.8em;">A sophisticated blend of sweet and savory.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <p>Seafood Sensation: Garlic cream sauce, shrimp, scallops, crabmeat, roasted garlic, mozzarella cheese. - $18.99
    <p><em style="font-size: 0.8em;">An ocean-inspired delight for seafood lovers.</em></p>
    <div style="margin-bottom: 30px;"></div>
    
    <strong>Desserts:</strong>
    
    <p>Tiramisu - $5.99</p>
    <p>New York Cheesecake - $4.99</p>
    <p>Chocolate Lava Cake - $6.99</p>
    <p>Cannoli - $3.99</p>
    
    <div style="margin-bottom: 40px;"></div>
    
    <strong>Beverages:</strong>
    
    <p>Soft Drinks - $1.99</p>
    <p>Bottled Water - $1.50</p>
    <p>Iced Tea - $2.50</p>
    <p>Lemonade - $2.50</p>`;
    

    content.appendChild(heading);
    content.appendChild(menu);




}