import React from 'react';

export default function ProductTable (props) {
    let lastCategory = null;
    const tableRows = [];
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    props.products.forEach((product, idx) => {
        if (product.name.indexOf(filterText) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            lastCategory = product.category;
            tableRows.push(<ProductCategoryRow category={product.category} key={product.category}/>);                
        }

        tableRows.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked} key={idx} />);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>{tableRows}</tbody>
        </table>
    );
}

const ProductCategoryRow = props => (
    <th colSpan="2">
        {props.category}
    </th>
);

const ProductRow = props =>  (
    <tr>
        {props.stocked ? (<td>{props.name}</td>) : (<td style={{color: "red"}}>{props.name}</td>)}        
        <td>{props.price}</td>
    </tr>
);