import { FetchFromData } from "../"

const FetchURL = 'https://fakestoreapi.com/products'


export const handleGetAllRequest = async () => {
    try {
        const getData = await FetchFromData(FetchURL)
        return getData
    } catch (err) {
        console.log(err.message)
    }
}

export const handleGetCategory = async (category) => {
    try {
        const getData = await FetchFromData(`${FetchURL}/category/${category}`)
        return getData
    } catch (err) {
        console.log(err.message)
    }
}