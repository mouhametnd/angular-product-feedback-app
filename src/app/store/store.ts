import { StoreModule } from "@ngrx/store";
import { IAppStore } from "../types";
import { dataSliceReducer } from "./slices/data-slice/data-slice-reducer";
import { selectedFbReducer } from "./slices/selected-feedback-slice/selected-feedback-slice.reducer";

export const appStore = StoreModule.forRoot<IAppStore>({
  data: dataSliceReducer,
  selectedFb: selectedFbReducer
})