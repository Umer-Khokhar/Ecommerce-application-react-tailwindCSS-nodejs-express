
import { ProductCard, useApiContext } from "./"

const HomeCategory = ({ categoryName }) => {
  const { electronicProducts } = useApiContext()
  return (
    <div className="px-12">
        <h3 className="text-2xl font-bold">Shop Our Top {categoryName} Category</h3>

        {electronicProducts.map((product) => (
          <ProductCard />
        ))}
    </div>
  )
}

export default HomeCategory