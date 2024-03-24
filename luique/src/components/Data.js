import { useState, useEffect } from 'react';
import Test from './Test';
import index from '../../pages/index.jsx';

const Data = () => {
    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);

                setName(jsonData?.user?.about?.name ||"");
                console.log("name",name)
                setTitle(jsonData?.user?.about?.title ||"");
                console.log(title)
                setDesc(jsonData?.user?.about?.description ||"");
                console.log(desc)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            
            <index name ={name}
                title={title}
                desc={desc}/>
                
        </div>
    );
};

export default Data;
// {/* <h1>Data:</h1>
//             {name} */}
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//             <Test name = {name}/>