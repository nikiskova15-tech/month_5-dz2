import { Button, Card, Flex } from "antd"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api/API.JS";


const ProductPage = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])
  const [error, setError] = useState(false)

  const getSingleProduct = async () => {
    try {
      const { data } = await api.get("/products/" + id)

      setProduct(data)
    } catch (e) {
      console.log(e);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      getSingleProduct()
    })()
  }, [])

  if (error) {
    return <NotFoundPage />
  }

  if (loading) return <h1>Загрузка...</h1>

  return (
    <div>
      <Button onClick={() => navigate(-1)}
        style={{
          display: 'block',
          margin: '10px auto',
          padding: '24px'
        }}>Go Back</Button>
      <Card style={{
        width: '700px',
        margin: '0 auto'
      }}>
        <Flex justify="center" align="center" vertical>
          <img src={`${product?.images}`} alt={`${product?.title}`}
            style={{
              width: '100%'
            }} />
          <h2>Name: {product?.title}</h2>
          <p style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#e63946',
            margin: '0'
          }}>{product?.price}$</p>
          <p style={{
            width: '85',
            margin: '0 auto'
          }}>{product?.description}</p>
        </Flex>
      </Card>
    </div >
  )
};

export default ProductPage