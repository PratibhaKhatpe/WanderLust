const sampleListings = [
    {
        title: "Secluded Beach House in Costa Rica",
        description: "Escape to a secluded beach house on the Pacific coast. Surf, relax, and enjoy nature.",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
            filename: "listingimage"
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        category:"Beach",

        geometry:{
        type:"Point",

        coordinates:[
            -83.7534,
            9.7489
        ]
    }
    },
    {
        title: "Luxury Villa with Ocean View",
        description: "A beautiful villa overlooking the ocean with modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            filename: "listingimage"
        },
        price: 5000,
        location: "Bali",
        country: "Indonesia",
        category:"Beach",

        geometry:{
        type:"Point",

        coordinates:[
            115.0920,
            -8.3405
        ]
    }
    },
    {
        title: "Mountain Cabin Retreat",
        description: "A peaceful wooden cabin surrounded by mountains and forests.",
        image: {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
            filename: "listingimage"
        },
        price: 3200,
        location: "Manali",
        country: "India",
        category:"Mountain",

        geometry:{
        type:"Point",

        coordinates:[
            77.1892,
            32.2432
        ]
    }
    },
    {
        title: "Modern City Apartment",
        description: "A stylish apartment located in the center of the city.",
        image: {
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            filename: "listingimage"
        },
        price: 2500,
        location: "Mumbai",
        country: "India",
        category:"City",

        geometry:{
        type:"Point",

        coordinates:[
            72.8777,
            19.0760
        ]
    }
    },
    {
        title: "Lake Side Cottage",
        description: "Relax in a cozy cottage with a beautiful lake view.",
        image: {
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            filename: "listingimage"
        },
        price: 4000,
        location: "Udaipur",
        country: "India",
        category:"Lake",

        geometry:{
        type:"Point",

        coordinates:[
            73.7125,
            24.5854
        ]
    }
    },
    {
        title: "Forest Escape Home",
        description: "A peaceful home surrounded by greenery and wildlife.",
        image: {
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
            filename: "listingimage"
        },
        price: 2800,
        location: "Coorg",
        country: "India",
        category:"Camping",

        geometry:{
        type:"Point",

        coordinates:[
            75.8069,
            12.3375
        ]
    }
    },
    {
        title: "Luxury Desert Camp",
        description: "Experience a premium stay under the desert stars.",
        image: {
            url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
            filename: "listingimage"
        },
        price: 4500,
        location: "Jaisalmer",
        country: "India",
        category:"Desert",

        geometry:{
        type:"Point",

        coordinates:[
            70.9083,
            26.9157
        ]
    }
    },
    {
        title: "Beachfront Wooden Cottage",
        description: "A charming cottage located just near the beach.",
        image: {
            url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
            filename: "listingimage"
        },
        price: 3800,
        location: "Goa",
        country: "India",
        category:"Beach",

        geometry:{
        type:"Point",

        coordinates:[
            74.1240,
            15.2993
        ]
    }
    },
    {
        title: "Snow Mountain Lodge",
        description: "A warm lodge surrounded by beautiful snowy mountains.",
        image: {
            url: "https://images.unsplash.com/photo-1544986581-efac024faf62",
            filename: "listingimage"
        },
        price: 6000,
        location: "Ladakh",
        country: "India",
        category:"Mountain",

        geometry:{
        type:"Point",

        coordinates:[
            77.5771,
            34.1526
        ]
    }
    },
    {
        title: "Private Island Resort",
        description: "A luxurious resort on a private island.",
        image: {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            filename: "listingimage"
        },
        price: 9000,
        location: "Maldives",
        country: "Maldives",
        category:"Beach",

        geometry:{
        type:"Point",

        coordinates:[
            73.5093,
            4.1755
        ]
    }
    },
    {
        title: "Countryside Farm House",
        description: "A peaceful farmhouse perfect for family vacations.",
        image: {
            url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
            filename: "listingimage"
        },
        price: 3500,
        location: "Pune",
        country: "India",
        category:"Countryside",

        geometry:{
        type:"Point",

        coordinates:[
            73.8567,
            18.5204
        ]
    }
    },
    {
        title: "Riverside Wooden Home",
        description: "Stay beside a calm river surrounded by nature.",
        image: {
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
            filename: "listingimage"
        },
        price: 3000,
        location: "Rishikesh",
        country: "India",
        category:"Lake",

        geometry:{
        type:"Point",

        coordinates:[
            78.2676,
            30.0869
        ]
    }
    },
    {
        title: "Heritage Palace Stay",
        description: "Experience royal architecture and traditional hospitality.",
        image: {
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
            filename: "listingimage"
        },
        price: 8000,
        location: "Jaipur",
        country: "India",
        category:"Desert",

        geometry:{
        type:"Point",

        coordinates:[
            75.7873,
            26.9124
        ]
    }
    },
    {
        title: "Tree House Adventure",
        description: "A unique eco-friendly tree house surrounded by nature.",
        image: {
            url: "https://images.unsplash.com/photo-1520984032042-162d526883e0",
            filename: "listingimage"
        },
        price: 4200,
        location: "Wayanad",
        country: "India",
        category:"Camping",

        geometry:{
        type:"Point",

        coordinates:[
            76.1320,
            11.6854
        ]
    }
    },
    {
        title: "Luxury Penthouse Apartment",
        description: "A premium penthouse with amazing city views.",
        image: {
            url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
            filename: "listingimage"
        },
        price: 10000,
        location: "Dubai",
        country: "UAE",
        category:"City",

        geometry:{
        type:"Point",

        coordinates:[
            55.2708,
            25.2048
        ]
    }
    },
    {
        title: "Hill Station Homestay",
        description: "Enjoy a relaxing stay with beautiful mountain views.",
        image: {
            url: "https://images.unsplash.com/photo-1520986606214-8b456906c813",
            filename: "listingimage"
        },
        price: 2700,
        location: "Shimla",
        country: "India",
        category:"Mountain",

        geometry:{
        type:"Point",

        coordinates:[
            77.1734,
            31.1048
        ]
    }
    },
    {
        title: "Modern Beach Apartment",
        description: "A comfortable apartment close to the sea.",
        image: {
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
            filename: "listingimage"
        },
        price: 5200,
        location: "Pondicherry",
        country: "India",
        Category:"Beach",

        geometry:{
        type:"Point",

        coordinates:[
            79.8083,
            31.1048
        ]
    }
    },
    {
        title: "Eco Resort in Nature",
        description: "A sustainable resort surrounded by forests.",
        image: {
            url: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
            filename: "listingimage"
        },
        price: 6500,
        location: "Kerala",
        country: "India",
        category:"Camping",

        geometry:{
        type:"Point",

        coordinates:[
            76.9366,
            8.5241
        ]
    }
    },
    {
        title: "Desert Luxury Villa",
        description: "A beautiful villa offering a peaceful desert experience.",
        image: {
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            filename: "listingimage"
        },
        price: 7500,
        location: "Dubai",
        country: "UAE",
        category:"Desert",

        geometry:{
        type:"Point",

        coordinates:[
            55.2708,
            25.2048
        ]
    }
    },
    {
        title: "Ocean View Holiday Home",
        description: "A perfect holiday home with ocean views.",
        image: {
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            filename: "listingimage"
        },
        price: 5500,
        location: "Sydney",
        country: "Australia",
        category:"Beach",

        geometry:{
        type:"Point",

        coordinates:[
            151.2093,
            -33.8688
        ]
    }
    }
];

module.exports = { data: sampleListings };
