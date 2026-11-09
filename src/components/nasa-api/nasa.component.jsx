
import { useEffect, useState } from "react";
export function NasaComponent() {

    const [mars,setMars] = useState({photos:[]});

    useEffect(() => {
        fetch("https://rovers.nebulum.one/api/v1/rovers/curiosity/photos?earth_date=2026-02-15")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMars(data);
        })
        .catch(error => { 
            console.error("Error fetching data from NASA API:", error);
        })
    },[]);


    return (
        <div className="container">
            <h1>NASA API Component</h1> 
            <p>This component will fetch and display data from the NASA API.</p>
            <hr />
            <h2>Mar's Rover Photos </h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars && mars.photos.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>  
                                <td>
                                    <a href={item.img_src} target="_blank"><img src={item.img_src} alt={`Mars Rover ${item.id}`} width="200" height="200" /></a>
                                </td>
                                <td>{item.camera.name}</td>
                                <td>{item.rover.name}</td>                            
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    );
}