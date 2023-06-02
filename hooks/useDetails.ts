import {create} from 'zustand'

interface DetailsState {
  jsonData: string | null,
  setJsonData: (data:string)=> void
}
const useDetails = create<DetailsState>((set) => ({
    jsonData: null,
    setJsonData: (data) => set(() => ({ jsonData: data })),
  }));
  
  export default useDetails;