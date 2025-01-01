export { default as Spinner } from "./Spinner"
export { default as Navbar } from "./Navbar"
export { default as HeroSection } from "./HeroSection"
export { default as HomeCategory } from './HomeCategory'

export { default as FetchFromData } from './utils/FetchFromData'

import { handleGetAllRequest, handleGetCategory } from "./utils/Requests"
export { handleGetAllRequest, handleGetCategory }


import { ApiDataContext, ApiDataProvider, useApiContext } from "./contextApi/ApiDataProvider";
export { ApiDataContext, ApiDataProvider, useApiContext}