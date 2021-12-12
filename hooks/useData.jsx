// A custom hook to get data from data.json
import Data from '../public/data.json';

function useData(page) {
  return Data[page];
}

export default useData;
