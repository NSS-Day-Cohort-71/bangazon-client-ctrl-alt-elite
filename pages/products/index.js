import { useEffect, useState } from 'react';
import Filter from '../../components/filter';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import { ProductCard } from '../../components/product/card';
import { getProducts } from '../../data/products';

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading products...");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      if (data) {
        const locationData = [...new Set(data.map(product => product.location))];
        const locationObjects = locationData.map(location => ({
          id: location,
          name: location,
        }));

        setAllProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
        setLocations(locationObjects);
      }
    })
    .catch(err => {
      setLoadingMessage(`Unable to retrieve products. Status code ${err.message} on response.`);
    });
  }, []);

  const searchProducts = (searchQuery) => {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  

  if (isLoading) return <p>{loadingMessage}</p>;

  return (
    <>
      <Filter productCount={filteredProducts.length} onSearch={searchProducts} locations={locations} />

      <div className="columns is-multiline">
        {filteredProducts.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

Products.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
}
