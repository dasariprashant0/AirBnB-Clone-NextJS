import * as React from "react";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

export default function Map({ searchResults }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmFuc2hpMDEiLCJhIjoiY2xlOXRpbzY4MDVldTNvbm1iYnVodm41aCJ9.FUrVu3wiJzTPoOlweH7SHg";

    const coordinates = searchResults.map((results) => ({
      longitude: results.long,
      latitude: results.lat,
    }));
    const center = getCenter(coordinates);

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/banshi01/cle9tnuog000s01qvmb4rjeb9",
      center: [center.longitude, center.latitude],
      zoom: 11,
    });

    searchResults.map((result) => {
      const customMarker = document.createElement("div");
      customMarker.innerHTML = "📌";
      customMarker.style.fontSize = "24px";

      const { long, lat } = result;
      const marker = new mapboxgl.Marker({ element: customMarker })
        .setLngLat([long, lat])
        .addTo(map);

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${result.title}</h3><p>${result.description}</p>`
      );
      marker.setPopup(popup);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-[100%] h-[100%]" />;
}
