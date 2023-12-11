
import { createContext } from "react";
import all_destination from "../Assets/all_destination";


export const TripContext = createContext(null);

const TripContextProvider = (props) => {


const contextValue = {all_destination}

return (
    <TripContext.Provider value={contextValue}>
        {props.children}
    </TripContext.Provider>
)

}

export default TripContextProvider
    
