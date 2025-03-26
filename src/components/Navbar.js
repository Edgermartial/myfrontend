import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);
  }, []);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>🛒 E-Commerce</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
        <Link to="/cart" style={styles.cartLink}>
          Cart 🛍️ <span style={styles.cartCount}>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  cartLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "5px 15px",
    borderRadius: "5px",
    backgroundColor: "#ff9800",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  cartCount: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "3px 8px",
    fontSize: "14px",
  },
};

export default Navbar;
