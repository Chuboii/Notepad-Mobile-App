import { createContext, useState } from "react";
import { data } from "../utils/dummydata";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    // const [data, setData] = useState(data)
    const [extractedData, setExtractedData] = useState(null)
    const [titleValue, setTitleValue] = useState('')
    const [contentValue, setContentValue] = useState('')



    const value = {data, extractedData, setExtractedData, titleValue, setTitleValue, contentValue, setContentValue}


    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}