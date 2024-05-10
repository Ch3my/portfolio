const BuildAssetUrl = (url) => {
  // Ruta base de los activos
  const DEPLOY_FOLDER = '/portfolio';

  // Generar la URL completa del activo
  let assetUrl = `${url}`;
  
  if (JSON.parse(process.env.IS_DEPLOY)) {
    assetUrl = `${DEPLOY_FOLDER}${url}`;
  }

  return assetUrl;
};

export default BuildAssetUrl;