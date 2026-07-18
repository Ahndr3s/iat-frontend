import { contents } from "../../assets/data/content";

export const getContentsByType = (contentType, collection = contents, limit) => {
  const types = ["1", "2", "3", '4','5'];
  let filteredContents


  if (!types.includes(String(contentType))) {
    throw new Error(`${contentType} is not a valid Content Type`);
  }
  
  // Filtra el contenido por el tipo especificado
  // if(contentType === '3'){
    filteredContents = contents.filter((content) => String(content.type) === contentType);
  // } else {
    // filteredContents = collection.filter((content) => String(content.type) === contentType);
  // }
  
  // Si se proporciona un límite, devuelve los últimos 'limit' registros
  if (limit !== undefined && limit === null) {
    return filteredContents.slice(-limit);
  }
  
  // Si no se proporciona límite, devuelve todo el contenido filtrado
  return filteredContents;
};
