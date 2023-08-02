import React from "react";
import "./home.css";
import BNR1 from "../../assets/banner1.jpg";
import Product from "./Product";
import PRDT1 from "../../assets/product1.jpg";
import PRDT2 from "../../assets/product2.jpg";
import PRDT3 from "../../assets/product3.jpg";
import PRDT4 from "../../assets/product4.jpeg";
import PRDT5 from "../../assets/product5.jpg";
import PRDT6 from "../../assets/product6.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        {/* Home banner image */}
        <img src={BNR1} alt="Kitchen Favorites" className="home__image" />

        {/* First row of products */}
        <div className="home__row">
          {/* Product 1 */}
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates
            Radically Successful Businesses Paperback"
            price={11.96}
            image={PRDT1}
            rating={5}
          />
          {/* Product 2 */}
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={PRDT2}
            rating={4}
          />
        </div>

        {/* Second row of products */}
        <div className="home__row">
          {/* Product 3 */}
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image={PRDT3}
            rating={3}
          />
          {/* Product 4 */}
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image={PRDT4}
            rating={5}
          />
          {/* Product 5 */}
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image={PRDT5}
            rating={4}
          />
        </div>

        {/* Third row of products */}
        <div className="home__row">
          {/* Product 6 */}
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image={PRDT6}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
