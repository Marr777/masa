import * as L from '../../vendor/Leaflet/leaflet.js';

const COORDINATES = [55.0285253, 82.9269913];
const ZOOM_SIZE = 16;
const ICON_URL = 'img/map-pin.svg';
const mobileBreakpoint = window.matchMedia('(max-width:767px)');
const tabletBreakpoint = window.matchMedia('(max-width:1199px)');
const getPinSize = () => {
  let pinSize;
  if (mobileBreakpoint.matches) {
    pinSize = [24, 24];
  } else if (tabletBreakpoint.matches) {
    pinSize = [40, 40];
  } else {
    pinSize = [70, 70];
  }
  return pinSize;
};

export const setMap = () => {
  const map = L.map('map', {
    center: COORDINATES,
    zoom: ZOOM_SIZE,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker(COORDINATES).addTo(map);

  const changeMarker = () => {
    marker.setIcon(L.icon({
      iconUrl: ICON_URL,
      iconSize: getPinSize(),
    }));
  };

  changeMarker();
  window.addEventListener('resize', changeMarker);
};

