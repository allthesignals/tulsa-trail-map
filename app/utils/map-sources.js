export default {
  'existing-trails': {
    type: 'geojson',
    // NAME,STATUS,TYPE,MILES,SCOPE,TP_NAME,MP99_SYS,MP99_NUM,Date_Open,GlobalID,Jurisdiction,Jurisdiction_Code,Facility
    data: 'https://map8.incog.org/arcgis8wa/rest/services/Trails_existing/FeatureServer/0/query?f=geojson&where=1=1&outFields=NAME,TYPE,OBJECTID',
  },
  'proposed-trails': {
    type: 'geojson',
    data: 'https://map8.incog.org/arcgis8wa/rest/services/Trails_GOPlan/FeatureServer/0/query?f=geojson&where=1=1&outFields=OBJECTID,Fac_Catego,TDG_Projec,Rec_Facili,Signed_Rou',
  },
  'closed-trails': {
    type: 'geojson',
    data: 'https://services2.arcgis.com/Yl3gDnSPJVdpCPgG/ArcGIS/rest/services/Trail_Closing_and_Detours/FeatureServer/0/query?f=geojson&where=1=1&outField=OBJECTID,Name,ReOpen',
  },
  'undocumented-closed-trails': {
    type: 'geojson',
    data: '/data/undocumented-closed.geojson',
  },
  'undocumented-detours': {
    type: 'geojson',
    data: '/data/undocumented-detours.geojson',
  },
  detours: {
    type: 'geojson',
    data: 'https://services2.arcgis.com/Yl3gDnSPJVdpCPgG/ArcGIS/rest/services/Trail_Closing_and_Detours/FeatureServer/1/query?f=geojson&where=1=1&outFields=OBJECTID',
  },
};
