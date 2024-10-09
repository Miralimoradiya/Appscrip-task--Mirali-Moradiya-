import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const sections = [
  { label: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { label: "OCCASION", options: ["Men", "Women", "Baby & Kids"] },
  { label: "WORK", options: ["Men", "Women", "Baby & Kids"] },
  { label: "FABRIC", options: ["Men", "Women", "Baby & Kids"] },
  { label: "SEGMENT", options: ["Men", "Women", "Baby & Kids"] },
  { label: "SUITABLE FOR", options: ["Men", "Women", "Baby & Kids"] },
  { label: "RAW MATERIALS", options: ["Men", "Women", "Baby & Kids"] },
  { label: "PATTERN", options: ["Men", "Women", "Baby & Kids"] },
];

export default function Index() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleVisibility = (index) => {
    setVisibleSection(visibleSection === index ? null : index);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <>
      <div className="indexpage">
        {/* heading  */}
        <div className="heading">
          <h2>DISCOVER OUR PRODUCTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          </p>
        </div>
        {/* filter hide/show */}
        <div className="filter-hideshow">
          <div className="item-count">
            <p>3425 ITEMS</p>
            <div className="arrow" onClick={toggleFilterVisibility}>
              <span>
                <IoIosArrowBack />
              </span>{" "}
              <span>{isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}</span>
            </div>
          </div>
          <div className="select-container">
            <select className="item-select">
              <option value="RECOMMENDED">RECOMMENDED</option>
              <option value="RECOMMENDED">RECOMMENDED</option>
              <option value="RECOMMENDED">RECOMMENDED</option>
            </select>
          </div>
        </div>
        {/* main content  */}
        <section>
          <div className="maincontent">
            {isFilterVisible && ( 
              <div className="left">
                <div className="customizable">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">CUSTOMIZBLE</label>
                </div>
                {sections.map((section, index) => (
                  <div className="ideal" key={index}>
                    <div className="top" onClick={() => toggleVisibility(index)}>
                      <h3>{section.label}</h3>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </div>
                    <p>All</p>
                    {visibleSection === index && (
                      <div className="hideshow">
                        <p>unselect all</p>
                        {section.options.map((option, idx) => (
                          <p key={idx}>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">{option}</label>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="right">
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <div className="likeproduct">
                      <p>
                        <a href="">sign in</a> or create an account to see
                        pricing
                      </p>
                      <p
                        onClick={() => toggleLike(product.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <FaHeart
                          style={{
                            color: likedProducts[product.id] ? "red" : "black",
                            transition: "color 0.3s ease",
                          }}
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
