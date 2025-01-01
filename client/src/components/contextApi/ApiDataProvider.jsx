/* eslint-disable react-refresh/only-export-components */
import {useState, useEffect, createContext, useContext } from "react"
import { handleGetCategory } from "../"

export const ApiDataContext = createContext();
export const ApiDataProvider = ({ children  }) => {
    const [electronicProducts, setElectronicProducts ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await handleGetCategory('electronics');
                setElectronicProducts(data);
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };

        fetchData();
    }, [])

  return (
    <ApiDataContext.Provider value={{ electronicProducts}}>
        {children }
    </ApiDataContext.Provider>
  )
}

export const useApiContext = () =>  useContext(ApiDataContext)