import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

export function ContactMap () {
    return(
        <div>
            <div className="container-map">
                <GoogleMaps
                apiKey={"AIzaSyAoCCo45f4HOy4xnAxnnjN7pQEcgK02VKM"}
                style={{ height: "300px", width: "45%"}}
                zoom={15}
                center={{
                    lat: 43.647514,
                    lng: -8.001659
                }}
                maker={{
                    lat: 43.647514,
                    lng: -8.001659
                }}
                />
            </div>

        </div>
    )
}
export default ContactMap;