import { createContext, useState, useContext, useEffect } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [ captain, setCaptain ] = useState(null);
    // const [captain, setCaptain] = useState({
    //     fullname: { firstname: "", lastname: "" },
    //   });
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };


    // change
    // useEffect(() => {
    //     const fetchCaptainProfile = async () => {
    //         const token = localStorage.getItem('token');
    //         if (!token) {
    //             setIsLoading(false);
    //             return;
    //         }

    //         try {
    //             const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             setCaptain(response.data.captain);
    //         } catch (err) {
    //             console.error("Authentication failed", err);
    //             setError(err);
    //             localStorage.removeItem('token');
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchCaptainProfile();
    // }, []);
    // change end


    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;