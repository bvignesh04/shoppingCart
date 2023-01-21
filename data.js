
let shopItemsData =[
    {
        id:'1',
        name:'Casual shirts',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:45,
        img:'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'2',
        name:'Formal shirts',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:60,
        img:'https://images.unsplash.com/photo-1671116576212-44456cf44c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmb3JtYWwlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'3',
        name:'T-shirts',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:45,
        img:'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'4',
        name:'Mens suits',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.unsplash.com/photo-1619533394727-57d522857f89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TWVucyUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'5',
        name:'Casual shirts',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:80,
        img:'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:'6',
        name:'Collor T-shirt',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:100,
        img:'https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBvbG8lMjAlMjB0JTIwc2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'7',
        name:'Combo 6 tees',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvcm1hbCUyMGF0dGlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    
    {
        id:'8',
        name:'Leather Jackets',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.unsplash.com/photo-1560770087-e727c341b298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'9',
        name:'Combo outfits',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:240,
        img:'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGJyYW5kJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'10',
        name:'White Sneakers',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:110,
        img:'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'11',
        name:'Collor T-shirt',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:100,
        img:'https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:'12',
        name:'Casual fits',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.unsplash.com/photo-1600364768634-797baa6a8af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcm1hbCUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'13',
        name:'Premium Wrist watch',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.unsplash.com/photo-1624105809959-8c4826758dc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcm1hbCUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'14',
        name:'Classy Bag',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:'15',
        name:'Shoes',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.pexels.com/photos/1693115/pexels-photo-1693115.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:'16',
        name:'Jeans',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:60,
        img:'https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGplYW5zJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    
    {
        id:'17',
        name:'Chain Wrist watch',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:'18',
        name:'Classy Wallets',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQwfHx3YWxsZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'19',
        name:'Cap',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id:'20',
        name:'Sunglass',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price:120,
        img:'https://images.pexels.com/photos/2659705/pexels-photo-2659705.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
];