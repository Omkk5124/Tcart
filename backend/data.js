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
           
            name: 'graps plant',
            category: 'vine',
            price: 120,
            countInStock: 0,
            image: '/images/img1.jpg',
            rating: 4.5,
            numReviews: 10,
            description: "high quality graps plants",
        },
        {
            
            name: 'papaya plant',
            category: 'woody',
            price: 120,
            countInStock: 10,
            image: '/images/img1.jpg',
           
            rating: 2.3,
            numReviews: 20,
            description: "high quality plants",
        },
        {
            
            name: 'mango plant',
            category: 'woody',
            price: 120,
            countInStock: 10,
            image: '/images/img1.jpg',
         
            rating: 4.2,
            numReviews: 12,
            description: "high quality plants",
        },
        {
            
            name: 'graps plant',
            category: 'vine',
            price: 130,
            countInStock: 10,
            image: '/images/img1.jpg',
          
            rating: 4.8,
            numReviews: 30,
            description: "high quality graps plants",
        },
        {
            
            name: 'mixika plant',
            category: 'woody',
            price: 100,
            countInStock: 10,
            image: '/images/img1.jpg',
          
            rating: 4.0,
            numReviews: 6,
            description: "high quality mixi plants",
        },
        {
            
            name: 'mixika plant',
            category: 'woody',
            price: 200,
            countInStock: 10,
            image: '/images/img1.jpg',
          
            rating: 5,
            numReviews: 35,
            description: "high quality mixi plants",
        }
    ]
};
export default data;