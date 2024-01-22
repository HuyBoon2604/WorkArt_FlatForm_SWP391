import React, { useState } from 'react'
import productData from '../products.json'
import {Link} from 'react'
import SelectCategory from '../components/SelectCategory'

const title=(
    <h2>Search Your One From <span>Thousand</span> of Product Type</h2>
)
const desc="We have the largest collection of products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [FilterProduct, setFilterProduct] = useState(productData);

    //search function 
        const handleSearch = e=>{
            const searchTerm = e.target.value;
            setSearchInput(searchTerm);

            //fitlering product based on search term
            const filtered=productData.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase));
            setFilterProduct(filtered);
        }
    

  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                {/* btn search chưa ra được*/}
                <form>
                    <SelectCategory select={"all"}/>
                    <input type="text" name='search' id='search' placeholder='Search your Products' value={searchInput} onChange={handleSearch}/>
                    <button type='submit'>
                    <i className='icofont-search'></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul>
                   {
                    searchInput&& FilterProduct.map((product,i)=>
                    <li key={i}>
                            <Link to={'/shop/${product.id}'}>{product.name}</Link>
                    </li>
                    )
                   } 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner