import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100, -45, 0],
        scale: 600
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="black"
        stroke="#50a6d4"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-73.5673, 45.5017]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#50a6d4",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#50a6d4">
          {"We are in Montréal!"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
