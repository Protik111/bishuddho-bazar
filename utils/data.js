const data = [
    {
        id : 1,
        name : "Apple",
        price : 8.99,
        category : "Fruits",
        size: "1lb",
        image : "/images/products/apple.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 2,
        name : "Cauliflower",
        price : 6.99,
        category : "Pickle Food",
        size: "1lb",
        image : "/images/products/cauliflower.png",
        description : "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
        rating: 4.5,
        counts: 10,
        reviews: 5
    },
    {
        id : 3,
        name : "Fresh Chilli",
        price : 9.99,
        size: "1ct",
        category : "Pickle Food",
        image : "/images/products/chilli.png",
        description : "Our fish collection comprises a few categories such as dry fish, fresh live fish, frozen fish. It is no surprise that we supply a vast variety of fish in",
        rating: 4.5,
        counts: 10,
        reviews: 5
    },
    {
        id : 4,
        name : "Clementine",
        price : 10.99,
        category : "Fruits",
        size: "1lb",
        image : "/images/products/clementine.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 5,
        name : "Pomegranate",
        price : 19.99,
        category : "Fruits",
        size: "oz",
        image : "/images/products/cranberry.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5

    },
    {
        id : 6,
        name : "Green Beans",
        price : 3.99,
        category : "Pickle Food",
        size : "each",
        image : "/images/products/green_beans.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 7,
        name : "Pure Honey",
        price : 23.99,
        category : "Baby Food",
        size: "each",
        image : "/images/products/Honey.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 8,
        name : "Lettuce",
        price : 9.99,
        category : "Pickle Food",
        size : "1oz",
        image : "/images/products/lettuce.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 9,
        name : "Mango",
        price : 6.99,
        category : "Fruits",
        size : "1oz",
        image : "/images/products/mango.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 10,
        name : "Fresh Orange",
        price : 8.99,
        category : "Fruits",
        size : "1ct",
        image : "/images/products/orange.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 11,
        name : "Peanut",
        price : 15.99,
        category : "Snacks",
        size: "1lb",
        image : "/images/products/peanut.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 12,
        name : "Pineapple",
        price : 7.99,
        category : "fruits",
        size : "1ct",
        image : "/images/products/pineapple.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 13,
        name : "Pumpkin",
        price : 9.99,
        category : "Grocery",
        size : "1lb",
        image : "/images/products/pumpkin.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 14,
        name : "Tea Leafy",
        price : 10.99,
        category : "Pickle Food",
        size : "1ct",
        image : "/images/products/tea-leafy.png",
        description : "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
        rating: 4.5,
        counts: 10,
        reviews: 5


    },
    {
        id : 15,
        name : "Vegetables",
        price : 12.99,
        category : "Pickle Food",
        size : "1ct",
        image : "/images/products/vegetables-leafs.png",
        description : "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
        rating: 4.5,
        counts: 10,
        reviews: 5
    }
]

export default data;