import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Card } from "antd";
import { api } from "../../api/API.JS";
import cls from './ProductsPage.module.scss'

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const { data } = await api.get("/products?limit=20")

      setProducts(data?.products)
    } catch (e) {
      console.log(e);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      getProducts()
    })()
  }, [])

  if (loading) return <p>Загрузка...</p>

  return (
    <div className={cls.grid}>
      {products.map((p) => (
        <Card key={p.id} style={{ width: '207px' }}>
          <Link to={`/products/${p.id}`}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.price}</p>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default ProductsPage