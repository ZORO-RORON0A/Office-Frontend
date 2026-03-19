import { useEffect, useState } from "react";


const Block = () => {
    //call api to fetch data and display it in the block
    const [data, setData] = useState(null);
    const api="https://abhi-office.infinityfreeapp.com/index.php";
    const call=async()=>{
        try {
            const response = await fetch(api);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        // This effect runs when the component is mounted
        console.log('Block component mounted');
        call();

        // Cleanup function runs when the component is unmounted
        return () => {
            console.log('Block component unmounted');
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="block">
      <h2>{data ? data.title : 'Loading...'}</h2>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
};

export default Block;