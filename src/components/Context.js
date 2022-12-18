import React, { Component } from 'react'
export const DataContext = React.createContext();
export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1536232f-a1da-45fa-97c9-1a0cf113cb61/space-hippie-01-shoes-Q6Dpb0.png",
                "description": "convallis aenean et tortor at risus viverra",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo. Nulla aliquet enim tortor at auctor. Nunc non blandit massa enim nec dui. ",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/159e3d66-8c63-433f-91e2-8ca3734979ef/jordan-series-2-dear-dean-shoes-3dvWKb.png",
                "description": "convallis aenean et tortor at risus viverra",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo. Nulla aliquet enim tortor at auctor. Nunc non blandit massa enim nec dui. ",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/d0ec4fc7-f5f3-431c-8b34-019ee3dc25db/space-hippie-03-this-is-trash-release-date.jpg",
                "description": "convallis aenean et tortor at risus viverra",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo. Nulla aliquet enim tortor at auctor. Nunc non blandit massa enim nec dui. ",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/67db57b7-fa34-42d6-94d6-e22ebe691085/space-hippie-04-womens-shoes-x1HFp5.png",
                "description": "convallis aenean et tortor at risus viverra",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo. Nulla aliquet enim tortor at auctor. Nunc non blandit massa enim nec dui. ",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/186c1048-8364-4bb6-9c67-b24a4edddb49/jordan-series-5-womens-shoes-Cs1zm4.png",
                "description": "convallis aenean et tortor at risus viverra",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo. Nulla aliquet enim tortor at auctor. Nunc non blandit massa enim nec dui. ",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/653b304e-9e1e-4d7d-83b9-b605dbe358ec/jordan-series-6-mens-shoes-Tfpxmm.png",
                "description": "convallis aenean et tortor at risus viverra",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo. Nulla aliquet enim tortor at auctor. Nunc non blandit massa enim nec dui. ",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
    };

    addCart = (id) =>{
        const {products,cart} = this.state;
        const check = cart.every( item =>{
            return item._id!==id;
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id;
            })
            this.setState({cart: [...cart, ...data]})
        }
        else{
            alert('this product has been added to cart.')
        }
        
        
    }

    reduction = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id===id){
                item.count === 1 ? item.count=1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id===id){
                item.count +=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm('do you want to delete this product?')){
        const {cart} = this.state
        cart.forEach((item,index) =>{
            if(item._id===id){
                cart.splice(index,1)
            }
        })
        this.setState({cart: cart})
        this.getTotal();
    }}

    getTotal = () =>{
        const {cart} = this.state
        const res = cart.reduce((prew, item) =>{
            return prew + (item.price * item.count)
        },0)
        this.setState({total: res})
    }

    //Save in storage
    // componentDidUpdate(){
    //     localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    //     localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    // }

    // componentDidMount(){
    //     const dataCart =JSON.parse(localStorage.getItem('dataCart'))
    //     if(dataCart !== null){
    //         this.setState({cart: dataCart})
    //     }

    //     const dataTotal =JSON.parse(localStorage.getItem('dataTotal'))
    //     if(dataTotal !== null){
    //         this.setState({total: dataTotal})
    //     }
    // }

    render() {
        const { products, cart, total } = this.state;
        const { addCart,reduction,increase, removeProduct, getTotal } =this;
        return (
            <DataContext.Provider
                value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

