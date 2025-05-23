import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* CATEGORIES IMAGES */
import c1 from "../assets/catecorys/c1.jpg";
import c2 from "../assets/catecorys/c2.jpg";
import c3 from "../assets/catecorys/c3.jpg";
import c4 from "../assets/catecorys/c4.jpg";
import c5 from "../assets/catecorys/c5.jpg";
import c6 from "../assets/catecorys/c6.jpg";

/* CAROUSEL */
import ca1 from "../assets/carousel/ca1.webp";
import ca2 from "../assets/carousel/ca2.webp";
import ca3 from "../assets/carousel/ca3.webp";
import ca4 from "../assets/carousel/ca4.webp";
import ca5 from "../assets/carousel/ca5.webp";
import ca6 from "../assets/carousel/ca6.webp";

/* CATECGORIES LISTS */
const categories = [
  
  {
    name: "Mobiles",
    icon: "bi-phone",
    img: c1,
  },
  {
    name: "Fashion",
    icon: "bi-person-bounding-box",
    img: c2,
  },
  {
    name: "Electronics",
    icon: "bi-tv",
    img: c3,
  },
  {
    name: "Home & Furniture",
    icon: "bi-house",
    img: c4,
  },
  {
    name: "Appliances",
    icon: "bi-lightning",
    img: c5,
  },
  {
    name: "Toys",
    icon: "bi-joystick",
    img: c6,
  },
];

const Home = ({ cart, setCart }) => {
  const navigate = useNavigate();
  // 100 unique products (sampled, realistic names, images, and categories)
  // Shuffle products array for a mixed display
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  /* ALL PRODUCTS AND SHUFFLE*/
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productsRaw = [
    // Mobiles
    {
      id: "mob-1",
      name: "iPhone 15 Pro",
      image: c1,
      category: "Mobiles",
      price: "₹1,29,900",
    },
    {
      id: "mob-2",
      name: "Samsung Galaxy S24 Ultra",
      image: c1,
      category: "Mobiles",
      price: "₹1,19,999",
    },
    {
      id: "mob-3",
      name: "OnePlus 12R",
      image: c1,
      category: "Mobiles",
      price: "₹39,999",
    },
    {
      id: "mob-4",
      name: "Realme 12 Pro+",
      image: c1,
      category: "Mobiles",
      price: "₹29,999",
    },
    {
      id: "mob-5",
      name: "Redmi Note 13 Pro",
      image: c1,
      category: "Mobiles",
      price: "₹21,999",
    },
    {
      id: "mob-6",
      name: "Vivo V30",
      image: c1,
      category: "Mobiles",
      price: "₹32,999",
    },
    {
      id: "mob-7",
      name: "POCO X6 Pro",
      image: c1,
      category: "Mobiles",
      price: "₹24,999",
    },
    {
      id: "mob-8",
      name: "Google Pixel 8",
      image: c1,
      category: "Mobiles",
      price: "₹75,999",
    },
    {
      id: "mob-9",
      name: "Motorola Edge 50",
      image: c1,
      category: "Mobiles",
      price: "₹27,999",
    },
    {
      id: "mob-10",
      name: "OPPO Reno 11",
      image: c1,
      category: "Mobiles",
      price: "₹28,999",
    },

    // Fashion
    {
      id: "fas-1",
      name: "Men Navy Blue Jeans",
      image: c2,
      category: "Fashion",
      price: "₹1,299",
    },
    {
      id: "fas-2",
      name: "Women Red Saree",
      image: c2,
      category: "Fashion",
      price: "₹2,499",
    },
    {
      id: "fas-3",
      name: "Unisex White Sneakers",
      image: c2,
      category: "Fashion",
      price: "₹1,999",
    },
    {
      id: "fas-4",
      name: "Men Black T-shirt",
      image: c2,
      category: "Fashion",
      price: "₹499",
    },
    {
      id: "fas-5",
      name: "Women Blue Kurti",
      image: c2,
      category: "Fashion",
      price: "₹899",
    },
    {
      id: "fas-6",
      name: "Kids Cartoon Hoodie",
      image: c2,
      category: "Fashion",
      price: "₹799",
    },
    {
      id: "fas-7",
      name: "Men Formal Blazer",
      image: c2,
      category: "Fashion",
      price: "₹3,499",
    },
    {
      id: "fas-8",
      name: "Women Maxi Dress",
      image: c2,
      category: "Fashion",
      price: "₹1,599",
    },
    {
      id: "fas-9",
      name: "Men Sports Shorts",
      image: c2,
      category: "Fashion",
      price: "₹699",
    },
    {
      id: "fas-10",
      name: "Women Leggings",
      image: c2,
      category: "Fashion",
      price: "₹499",
    },

    // Electronics
    {
      id: "ele-1",
      name: 'Sony 55" 4K TV',
      image: c3,
      category: "Electronics",
      price: "₹59,999",
    },
    {
      id: "ele-2",
      name: "Canon DSLR Camera",
      image: c3,
      category: "Electronics",
      price: "₹42,999",
    },
    {
      id: "ele-3",
      name: "HP Pavilion Laptop",
      image: c3,
      category: "Electronics",
      price: "₹54,999",
    },
    {
      id: "ele-4",
      name: "Apple iPad 10th Gen",
      image: c3,
      category: "Electronics",
      price: "₹39,900",
    },
    {
      id: "ele-5",
      name: "JBL Bluetooth Speaker",
      image: c3,
      category: "Electronics",
      price: "₹3,499",
    },
    {
      id: "ele-6",
      name: "Samsung Galaxy Tab S9",
      image: c3,
      category: "Electronics",
      price: "₹72,999",
    },
    {
      id: "ele-7",
      name: "Mi Smart Band 7",
      image: c3,
      category: "Electronics",
      price: "₹2,499",
    },
    {
      id: "ele-8",
      name: "Dell Wireless Mouse",
      image: c3,
      category: "Electronics",
      price: "₹799",
    },
    {
      id: "ele-9",
      name: "Logitech Keyboard",
      image: c3,
      category: "Electronics",
      price: "₹1,299",
    },
    {
      id: "ele-10",
      name: "Amazon Echo Dot",
      image: c3,
      category: "Electronics",
      price: "₹3,999",
    },

    // Home & Furniture
    {
      id: "hom-1",
      name: "Wooden Dining Table",
      image: c4,
      category: "Home & Furniture",
      price: "₹14,999",
    },
    {
      id: "hom-2",
      name: "Queen Size Bed",
      image: c4,
      category: "Home & Furniture",
      price: "₹19,999",
    },
    {
      id: "hom-3",
      name: "Sofa Set (3+1+1)",
      image: c4,
      category: "Home & Furniture",
      price: "₹24,999",
    },
    {
      id: "hom-4",
      name: "Office Chair",
      image: c4,
      category: "Home & Furniture",
      price: "₹3,499",
    },
    {
      id: "hom-5",
      name: "Bookshelf",
      image: c4,
      category: "Home & Furniture",
      price: "₹2,999",
    },
    {
      id: "hom-6",
      name: "Wall Clock",
      image: c4,
      category: "Home & Furniture",
      price: "₹799",
    },
    {
      id: "hom-7",
      name: "King Size Mattress",
      image: c4,
      category: "Home & Furniture",
      price: "₹11,999",
    },
    {
      id: "hom-8",
      name: "Curtains Set",
      image: c4,
      category: "Home & Furniture",
      price: "₹1,499",
    },
    {
      id: "hom-9",
      name: "Study Table",
      image: c4,
      category: "Home & Furniture",
      price: "₹4,999",
    },
    {
      id: "hom-10",
      name: "Bean Bag",
      image: c4,
      category: "Home & Furniture",
      price: "₹1,299",
    },

    // Appliances
    {
      id: "app-1",
      name: "LG 7kg Washing Machine",
      image: c5,
      category: "Appliances",
      price: "₹19,499",
    },
    {
      id: "app-2",
      name: "Samsung 253L Refrigerator",
      image: c5,
      category: "Appliances",
      price: "₹22,999",
    },
    {
      id: "app-3",
      name: "Philips Air Fryer",
      image: c5,
      category: "Appliances",
      price: "₹8,499",
    },
    {
      id: "app-4",
      name: "Bajaj Mixer Grinder",
      image: c5,
      category: "Appliances",
      price: "₹2,499",
    },
    {
      id: "app-5",
      name: "Voltas 1.5 Ton AC",
      image: c5,
      category: "Appliances",
      price: "₹32,999",
    },
    {
      id: "app-6",
      name: "Prestige Induction Cooktop",
      image: c5,
      category: "Appliances",
      price: "₹2,199",
    },
    {
      id: "app-7",
      name: "Eureka Forbes Vacuum Cleaner",
      image: c5,
      category: "Appliances",
      price: "₹5,999",
    },
    {
      id: "app-8",
      name: "Morphy Richards OTG",
      image: c5,
      category: "Appliances",
      price: "₹6,499",
    },
    {
      id: "app-9",
      name: "Havells Geyser",
      image: c5,
      category: "Appliances",
      price: "₹7,999",
    },
    {
      id: "app-10",
      name: "IFB Dishwasher",
      image: c5,
      category: "Appliances",
      price: "₹34,999",
    },

    // Toys
    {
      id: "toy-1",
      name: "Remote Control Car",
      image: c6,
      category: "Toys",
      price: "₹1,299",
    },
    {
      id: "toy-2",
      name: "Barbie Doll",
      image: c6,
      category: "Toys",
      price: "₹799",
    },
    {
      id: "toy-3",
      name: "Lego Classic Bricks",
      image: c6,
      category: "Toys",
      price: "₹2,499",
    },
    {
      id: "toy-4",
      name: "Hot Wheels Track Set",
      image: c6,
      category: "Toys",
      price: "₹1,599",
    },
    {
      id: "toy-5",
      name: "Nerf Elite Blaster",
      image: c6,
      category: "Toys",
      price: "₹1,999",
    },
    {
      id: "toy-6",
      name: "Rubik’s Cube",
      image: c6,
      category: "Toys",
      price: "₹299",
    },
    {
      id: "toy-7",
      name: "UNO Card Game",
      image: c6,
      category: "Toys",
      price: "₹199",
    },
    {
      id: "toy-8",
      name: "Play-Doh Set",
      image: c6,
      category: "Toys",
      price: "₹499",
    },
    {
      id: "toy-9",
      name: "Jigsaw Puzzle 1000pc",
      image: c6,
      category: "Toys",
      price: "₹899",
    },
    {
      id: "toy-10",
      name: "Monopoly Board Game",
      image: c6,
      category: "Toys",
      price: "₹1,499",
    },

    // 50 more unique products (mixing categories and types)
    {
      id: "mob-11",
      name: "iQOO Z9 5G",
      image: c1,
      category: "Mobiles",
      price: "₹19,999",
    },
    {
      id: "mob-12",
      name: "Tecno Spark 20",
      image: c1,
      category: "Mobiles",
      price: "₹8,999",
    },
    {
      id: "mob-13",
      name: "Lava Blaze Curve",
      image: c1,
      category: "Mobiles",
      price: "₹16,999",
    },
    {
      id: "mob-14",
      name: "Infinix Note 40",
      image: c1,
      category: "Mobiles",
      price: "₹14,499",
    },
    {
      id: "mob-15",
      name: "Nothing Phone 2a",
      image: c1,
      category: "Mobiles",
      price: "₹23,999",
    },
    {
      id: "fas-11",
      name: "Men’s Leather Wallet",
      image: c2,
      category: "Fashion",
      price: "₹699",
    },
    {
      id: "fas-12",
      name: "Women’s Handbag",
      image: c2,
      category: "Fashion",
      price: "₹1,299",
    },
    {
      id: "fas-13",
      name: "Kids Raincoat",
      image: c2,
      category: "Fashion",
      price: "₹499",
    },
    {
      id: "fas-14",
      name: "Men’s Sports Watch",
      image: c2,
      category: "Fashion",
      price: "₹2,499",
    },
    {
      id: "fas-15",
      name: "Women’s Sunglasses",
      image: c2,
      category: "Fashion",
      price: "₹1,199",
    },
    {
      id: "ele-11",
      name: "Boat Airdopes 141",
      image: c3,
      category: "Electronics",
      price: "₹1,299",
    },
    {
      id: "ele-12",
      name: "Fire-Boltt Smartwatch",
      image: c3,
      category: "Electronics",
      price: "₹2,499",
    },
    {
      id: "ele-13",
      name: "HP USB Flash Drive 64GB",
      image: c3,
      category: "Electronics",
      price: "₹499",
    },
    {
      id: "ele-14",
      name: "TP-Link WiFi Router",
      image: c3,
      category: "Electronics",
      price: "₹1,599",
    },
    {
      id: "ele-15",
      name: "Canon Inkjet Printer",
      image: c3,
      category: "Electronics",
      price: "₹3,999",
    },
    {
      id: "hom-11",
      name: "Plastic Storage Box",
      image: c4,
      category: "Home & Furniture",
      price: "₹399",
    },
    {
      id: "hom-12",
      name: "Wall Painting",
      image: c4,
      category: "Home & Furniture",
      price: "₹1,299",
    },
    {
      id: "hom-13",
      name: "Table Lamp",
      image: c4,
      category: "Home & Furniture",
      price: "₹799",
    },
    {
      id: "hom-14",
      name: "Floor Mat",
      image: c4,
      category: "Home & Furniture",
      price: "₹499",
    },
    {
      id: "hom-15",
      name: "Kitchen Rack",
      image: c4,
      category: "Home & Furniture",
      price: "₹1,199",
    },
    {
      id: "app-11",
      name: "Kent Water Purifier",
      image: c5,
      category: "Appliances",
      price: "₹12,999",
    },
    {
      id: "app-12",
      name: "Bajaj Room Heater",
      image: c5,
      category: "Appliances",
      price: "₹2,299",
    },
    {
      id: "app-13",
      name: "Philips Trimmer",
      image: c5,
      category: "Appliances",
      price: "₹1,499",
    },
    {
      id: "app-14",
      name: "Prestige Electric Kettle",
      image: c5,
      category: "Appliances",
      price: "₹1,299",
    },
    {
      id: "app-15",
      name: "Usha Table Fan",
      image: c5,
      category: "Appliances",
      price: "₹1,799",
    },
    {
      id: "toy-11",
      name: "Soft Teddy Bear",
      image: c6,
      category: "Toys",
      price: "₹599",
    },
    {
      id: "toy-12",
      name: "Remote Control Drone",
      image: c6,
      category: "Toys",
      price: "₹3,499",
    },
    {
      id: "toy-13",
      name: "Kids Bowling Set",
      image: c6,
      category: "Toys",
      price: "₹799",
    },
    {
      id: "toy-14",
      name: "Chess Board",
      image: c6,
      category: "Toys",
      price: "₹499",
    },
    {
      id: "toy-15",
      name: "Doctor Play Set",
      image: c6,
      category: "Toys",
      price: "₹399",
    },
  ];
  const products = shuffle([...productsRaw]);
  /* ALL PRODUCTS AND SHUFFLE END*/

  /* Filter products by selected category if any */
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  // Add to cart handler
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    navigate("/cart");
  };

  return (
    <>
      {/*  CATEGORIES LIST  */}
      <div className="container mt-5">
        <div className="d-flex flex-row flex-nowrap gap-2 ms-lg-5  gap-lg-5 overflow-auto pb-3 shadow-sm">
          {categories.map((cat) => (
            <div key={cat.name} style={{ minWidth: 120 }}>
              <div
                className={`card text-center p-2 category-card h-100${
                  selectedCategory === cat.name ? " border-primary shadow" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <div className="mb-2">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="category-img mb-1"
                  />
                </div>
                <div className="fw-semibold">{cat.name}</div>
              </div>
            </div>
          ))}
          <div style={{ minWidth: 120 }}>
            <div
              className={`card text-center p-2 category-card h-100 bg-light border-secondary${
                selectedCategory === null ? " border-primary shadow" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory(null)}
              title="Show All Categories"
            >
              <div className="mb-2">
                <span className="fs-2 text-secondary bi bi-grid"></span>
              </div>
              <div className="fw-semibold">All</div>
            </div>
          </div>
        </div>
      </div>
      {/* CATEGORIES LIST END */}

      {/*CAROUSEL  */}
      <div className="container mt-5">
        <div
          id="homeCarousel"
          className="carousel slide shadow-sm"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={ca1} className="d-block w-100" alt="Carousel 1" />
            </div>
            <div className="carousel-item">
              <img src={ca2} className="d-block w-100" alt="Carousel 2" />
            </div>
            <div className="carousel-item">
              <img src={ca3} className="d-block w-100" alt="Carousel 3" />
            </div>
            <div className="carousel-item">
              <img src={ca4} className="d-block w-100" alt="Carousel 4" />
            </div>
            <div className="carousel-item">
              <img src={ca5} className="d-block w-100" alt="Carousel 5" />
            </div>
            <div className="carousel-item">
              <img src={ca6} className="d-block w-100" alt="Carousel 6" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* CAROUSEL END */}

      {/* PRODUCTS LIST */}
      <div className="container mt-5 ">
        <h3 className="mb-3">
          {selectedCategory ? `${selectedCategory} Products` : `All Products`} (
          {filteredProducts.length})
        </h3>
        <div className="row">
          {filteredProducts.map((product) => (
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
              key={product.id}
            >
              <div className="card h-100 product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top product-img"
                />
                <div className="card-body p-2 d-flex flex-column">
                  <h6 className="card-title mb-1" style={{ fontSize: "1rem" }}>
                    {product.name}
                  </h6>
                  <div className="text-success fw-bold mb-2">
                    {product.price}
                  </div>
                  <div className="text-muted small mb-2">
                    {product.category}
                  </div>
                  <button
                    className="btn btn-primary btn-sm mt-auto"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PRODUCTS LIST END */}
    </>
  );
};

export default Home;
