import { useEffect, useState } from "react";


const Block = () => {
    //call api to fetch data and display it in the block
    const [data, setData] = useState(null);
    const api="https://office-backend-c8w3.onrender.com/";
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
      {
        data===null?
        <img src="https://i.pinimg.com/originals/8a/c1/29/8ac12962c05648c55ca85771f4a69b2d.gif " alt="Loading" />
        :<img src="https://i.pinimg.com/736x/ac/7b/f4/ac7bf40fe41e935aec5993f3a280c8eb.jpg" alt="Content" />
      }
    </div>
  );
};

export default Block;