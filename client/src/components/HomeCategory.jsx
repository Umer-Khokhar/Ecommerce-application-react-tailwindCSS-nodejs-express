
import { useApiContext } from "./"

const HomeCategory = ({ categoryName }) => {
  const { electronicProducts } = useApiContext()
  return (
    <div className="px-12">
        <h3 className="text-2xl font-bold">Shop Our Top {categoryName} Category</h3>

        {electronicProducts.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
    </div>
  )
}

export default HomeCategory