import {create} from 'zustand'

const useDetails = create((set) => ({
    jsonData: null,
    setJsonData: (data) => set(() => ({ jsonData: data })),
  }));
  
  export default useDetails;