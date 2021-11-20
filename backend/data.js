import bcrpyt from 'bcryptjs'


const data = {
    users:[
{
    name:"Admin",
    email:'admin@ex.com',
    password:   '1234',
    isAdmin:true
},
{
    name:"John",
    email:'john@ex.com',
    password:   '1234',
    isAdmin:false
}
    ],
    products: [
        {
            _id: '1',
            name: 'graps plant',
            category: 'vine',
            price: 120,
            countInStock: 0,
            image: '/images/img1.jpg',

            brand: 'ankur',
            rating: 4.5,
            numReviews: 10,
            description: "high quality graps plants",
        },
        {
            _id: '2',
            name: 'papaya plant',
            category: 'woody',
            price: 120,
            countInStock: 10,
            image: '/images/img1.jpg',
            brand: 'jk',
            rating: 2.3,
            numReviews: 20,
            description: "high quality plants",
        },
        {
            _id: '3',
            name: 'mango plant',
            category: 'woody',
            price: 120,
            countInStock: 10,
            image: '/images/img1.jpg',
            brand: 'purika',
            rating: 4.2,
            numReviews: 12,
            description: "high quality plants",
        },
        {
            _id: '4',
            name: 'graps plant',
            category: 'vine',
            price: 130,
            countInStock: 10,
            image: '/images/img1.jpg',
            brand: 'viners',
            rating: 4.8,
            numReviews: 30,
            description: "high quality graps plants",
        },
        {
            _id: '5',
            name: 'mixika plant',
            category: 'woody',
            price: 100,
            countInStock: 10,
            image: '/images/img1.jpg',
            brand: 'ankur',
            rating: 4.0,
            numReviews: 6,
            description: "high quality mixi plants",
        },
        {
            _id: '6',
            name: 'mixika plant',
            category: 'woody',
            price: 200,
            countInStock: 10,
            image: '/images/img1.jpg',
            brand: 'ajeshta',
            rating: 5,
            numReviews: 35,
            description: "high quality mixi plants",
        }
    ]
};
export default data;