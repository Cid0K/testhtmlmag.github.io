const products = {
    1: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    2: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    3: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    4: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    5: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    6: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    5: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    57: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    8: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    9: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    10: {
        name: "Делан 19л. ",
        imageUrl: "static/images/1.png",
        prices: {
            arkhangelsk: 230,
            novodvinsk: 250,
            severodvinsk: 270
        }
    },
    
};
    

function getPrice(productId) {
    const product = products[productId];
    if (!product || !product.prices) return null;

     if (product.prices[selectedCity]) {
        return product.prices[selectedCity]
    } else if (product.prices['arkhangelsk']){
       return  product.prices['arkhangelsk']
    }
     return null;
}
