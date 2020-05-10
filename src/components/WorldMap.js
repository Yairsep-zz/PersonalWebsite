import React from "react";
import { VectorMap } from "react-jvectormap";

const mapData = {
    US: 10,
    IL: 10,
    UK: 10,
    IT: 10,
    SP: 10,
    FR: 10,
    CO: 10,
    PE: 10,
    AR: 10,

};
const handleClick = (e, countryCode) => {
    console.log(countryCode);
};
const Map = () => {
    return (
        <div>
            <VectorMap
                map={"world_mill"}
                backgroundColor="transparent" //change it to ocean blue: #0077be
                zoomOnScroll={false}
                containerStyle={{
                    width: "100%",
                    height: "520px"
                }}
                onRegionClick={handleClick} //gets the country code
                containerClassName="map"
                regionStyle={{
                    initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer"
                    },
                    selected: {
                        fill: "#2938bc" //color for the clicked country
                    },
                    selectedHover: {}
                }}
                regionsSelectable={true}
                series={{
                    regions: [
                        {
                            values: mapData, //this is your data
                            scale: ["#146804", "#ff0000"], //your color game's here
                            normalizeFunction: "polynomial"
                        }
                    ]
                }}
            />
        </div>
    );
};

export default Map;