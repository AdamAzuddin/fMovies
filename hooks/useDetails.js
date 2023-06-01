import {create} from 'zustand'
//TODO: 6
const useDetails = create((set) => ({
    jsonData: null,
    setJsonData: (data) => set(() => ({ jsonData: data })),
  }));
  
  export default useDetails;