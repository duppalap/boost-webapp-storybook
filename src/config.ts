export const apiConfig = {
  amp: process.env.REACT_APP_AMP_API,
  ocpi: process.env.REACT_APP_OCPI_API
};

export const auth0Config = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const mapConfig = process.env.REACT_APP_MAPBOX_KEY;

export const autoHideDuration = process.env.REACT_APP_TOAST_AUTO_HIDE_DURATION
  ? Number(process.env.REACT_APP_TOAST_AUTO_HIDE_DURATION)
  : 5000;

export const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;
