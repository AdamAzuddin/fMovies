import {create} from 'zustand'
import { DetailsState } from '@typings'

const useDetails = create<DetailsState>((set) => ({
    jsonData: null,
    setJsonData: (data) => set(() => ({ jsonData: data })),
  }));
  
  export default useDetails;