export interface MapProps {
  userLocation: Coordinates;
  onClick: (lat, lng) => void;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}
