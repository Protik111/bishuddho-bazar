const data = [
    {
        id : 1,
        name : "Eggs Benedict",
        description : "How we dream about our future",
        price : 8.99,
        category : "apple",
        size: "1lb",
        image : "/images/products/apple.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 2,
        name : "Bagel And Cream Cheese",
        description : "How we dream about our future",
        price : 6.99,
        category : "baby",
        size: "1lb",
        image : "/images/products/cauliflower.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 3,
        name : "Breakfast Sandwich",
        description : "How we dream about our future",
        price : 9.99,
        size: "1ct",
        category : "fish",
        image : "/images/products/chilli.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 4,
        name : "Baked Chicken",
        description : "How we dream about our future",
        price : 10.99,
        category : "food",
        size: "1lb",
        image : "/images/products/clementine.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 5,
        name : "Toast Croissant Fried Egg",
        description : "How we dream about our future",
        price : 19.99,
        category : "grocery",
        size: "oz",
        image : "/images/products/cranberry.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."

    },
    {
        id : 6,
        name : "Full Breakfast Fried Egg Toast Brunch",
        description : "How we dream about our future",
        price : 3.99,
        category : "honey",
        size : "each",
        image : "/images/products/green_beans.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 7,
        name : "Healthy Meal Plan",
        description : "How we dream about our future",
        price : 23.99,
        category : "lunch",
        size: "each",
        image : "/images/products/Honey.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 8,
        name : "Fried Chicken Bento",
        description : "How we dream about our future",
        price : 9.99,
        category : "meat",
        size : "1oz",
        image : "/images/products/lettuce.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 9,
        name : "Tarragon-Rubbed-Salmon",
        description : "How we dream about our future",
        price : 6.99,
        category : "honey",
        size : "1oz",
        image : "/images/products/mango.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 10,
        name : "Indian Lunch",
        description : "How we dream about our future",
        price : 8.99,
        category : "apple",
        size : "1ct",
        image : "/images/products/orange.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 11,
        name : "Beef Steak",
        description : "How we dream about our future",
        price : 15.99,
        category : "food",
        size: "1lb",
        image : "/images/products/peanut.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 12,
        name : "Honey-Soy-Glazzed Salmon With Peppers",
        description : "How we dream about our future",
        price : 7.99,
        category : "baby",
        size : "1ct",
        image : "/images/products/pineapple.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 13,
        name : "Salmon with Grapefruit and Lentil Salad",
        description : "How we dream about our future",
        price : 9.99,
        category : "food",
        size : "1lb",
        image : "/images/products/pumpkin.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 14,
        name : "Lamoni Salmon Piccata",
        description : "How we dream about our future",
        price : 10.99,
        category : "meat",
        size : "1ct",
        image : "/images/products/tea-leafy.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."


    },
    {
        id : 15,
        name : "Pork Tendelorin With Quinoa Pilaf",
        description : "How we dream about our future",
        price : 12.99,
        category : "fish",
        size : "1ct",
        image : "/images/products/vegetables-leafs.png",
        fullDescription : "Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel."
    }
]

export default data;