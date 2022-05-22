import Papa from "papaparse";
import conversiondata from "lib/conversion.csv";

function trimObj(obj) {
  if (!Array.isArray(obj) && typeof obj != 'object') return obj;
  return Object.keys(obj).reduce(function(acc, key) {
    acc[key.trim()] = typeof obj[key] == 'string'? obj[key].trim() : trimObj(obj[key]);
    return acc;
  }, Array.isArray(obj)? []:{});
}

const conversion = () => {
  const config = {
    header: true,
    dynamicTyping: true,
  };
  var results = Papa.parse(conversiondata, config);
  var results = trimObj(results);

  const objectArr = results.data.reduce((obj, cur) => ({ ...obj, [cur.meal]: cur }), {});
  
  return objectArr;
};

export default conversion;
