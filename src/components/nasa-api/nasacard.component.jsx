
import { useEffect, useState } from "react";
import './nasacard.component.css';
export function NasaCardComponent() {

    const [mars, setMars] = useState({ photos: [] });

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
    }, []);


    return (
        <div className="container">
            <h1>NASA API Component</h1>
            <p>This component will fetch and display data from the NASA API.</p>
            <hr />
            <h2>Mar's Rover Photos </h2>

            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(item => (
                        <div key={item.id} className="card m-2 P-2">
                            <img src={item.img_src} className="card-img-top" height="200" />
                            <div className="card-body">
                                <dl>
                                    <dt>Camera Name</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover Name</dt>
                                    <dd>{item.rover.name}</dd>
                                    <dt>Earth Date</dt>
                                    <dd>{item.earth_date}</dd>
                                </dl>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    );
}