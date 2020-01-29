import React from 'react';


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: 'ALL'
        };
    }
    
    componentDidUpdate = (prevProps) => {
        if(prevProps.products.length !== this.props.products.length) {
        
             this.setState({
            products: this.props.products
        })  
        }
    }
    handleChangeCategory = (event) => {
        this.setState({
            category: event.target.value
        });
        
    }
    render() {
        const products = this.state.products.map((product, index) => <div key={index}>{product.productName}</div>)
        return (
            <div>
                <select 
                    value={this.state.category}
                    onChange={this.handleChangeCategory} >
                    <option>ALL</option>
                    <option>SMARTPHONE</option>
                    <option>PC</option>
                    <option>LAPTOP</option>
                </select>
                <div>
                    {products}
                </div>
            </div>
        );
    }
}

export default ProductList;