import Papa from "papaparse";
import conversiondata from "./conversion.csv";

const conversion = () => {
  const config = {
    header: true,
    dynamicTyping: true,
  };
  const results = Papa.parse(conversiondata, config);
  const objectArr = results.data.reduce((obj, cur) => ({ ...obj, [cur.meal]: cur }), {});
  
  return objectArr;
};

export default conversion;
