export default {
  'existing-trails': {
    type: 'geojson',
    data: 'https://map8.incog.org/arcgis8wa/rest/services/Trails_existing/FeatureServer/0/query?f=geojson&where=1=1&outFields=TYPE,OBJECTID',
  },
  'proposed-trails': {
    type: 'geojson',
    data: 'https://map8.incog.org/arcgis8wa/rest/services/Trails_GOPlan/FeatureServer/0/query?f=geojson&where=1=1&outFields=Fac_Catego',
  },
  'closed-trails': {
    type: 'geojson',
    data: 'https://services2.arcgis.com/Yl3gDnSPJVdpCPgG/ArcGIS/rest/services/Trail_Closing_and_Detours/FeatureServer/0/query?f=geojson&where=1=1',
  },
  'detours': {
    type: 'geojson',
    data: 'https://services2.arcgis.com/Yl3gDnSPJVdpCPgG/ArcGIS/rest/services/Trail_Closing_and_Detours/FeatureServer/1/query?f=geojson&where=1=1'
  },
};
