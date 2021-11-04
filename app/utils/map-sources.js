export default {
  'existing-trails': {
    type: 'geojson',
    data: 'https://map8.incog.org/arcgis8wa/rest/services/Trails_existing/FeatureServer/0/query?f=geojson&where=1=1&outFields=TYPE,OBJECTID',
  },
  'proposed-trails': {
    type: 'geojson',
    data: 'https://map8.incog.org/arcgis8wa/rest/services/Trails_GOPlan/FeatureServer/0/query?f=geojson&where=1=1&outFields=Fac_Catego',
  },
};
