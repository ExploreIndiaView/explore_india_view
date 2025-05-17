import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngBounds } from 'leaflet';

// Assuming rajasthan.json is in the public directory
import rajasthanBoundary from '../../services/rajasthan.json';

// Define a type for the GeoJSON data (simplified for this example)
interface GeoJSONFeature {
  type: 'Feature';
  properties: Record<string, any>;
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][] | number[][][][];
  };
}

interface GeoJSONData {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

const rajasthanData = rajasthanBoundary as GeoJSONData;

interface RajasthanMapProps {}

const RajasthanMap: React.FC<RajasthanMapProps> = () => {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (map) {
      // Fit the map bounds to the Rajasthan boundary
      const bounds = new LatLngBounds([]);
      rajasthanData.features.forEach((feature) => {
        if (feature.geometry.type === 'Polygon') {
          feature.geometry.coordinates.forEach((ring) => {
            ring.forEach((coords) => {
              if (Array.isArray(coords) && coords.length === 2) {
                bounds.extend([coords[1], coords[0]] as [number, number]); // Leaflet uses [lat, lng]
              }
            });
          });
        } else if (feature.geometry.type === 'MultiPolygon') {
          feature.geometry.coordinates.forEach((polygon) => {
            polygon.forEach((ring) => {
              ring.forEach((coords) => {
                if (Array.isArray(coords) && coords.length === 2) {
                  bounds.extend([coords[1], coords[0]]);
                }
              });
            });
          });
        }
      });
      map.fitBounds(bounds, { padding: [20, 20] }); // Adjust padding for better view
    }
  }, [map]);

  return (
    <div style={{ height: '300px', width: '80%' }}> {/* Adjusted height for a smaller map */}
      <MapContainer
        center={[27.0238, 74.2179]} // Initial center
        zoom={15} // Initial zoom level
        style={{ height: '100%', width: '100%' }}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={rajasthanData}
          style={{ color: 'blue', weight: 2, fillOpacity: 0.3 }}
        />
      </MapContainer>
    </div>
  );
};

export default RajasthanMap;