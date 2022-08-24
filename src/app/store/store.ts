import { StoreModule } from "@ngrx/store";
import { IAppStore } from "../types";
import { dataSliceReducer } from "./slices/data-slice/data-slice-reducer";

export const appStore = StoreModule.forRoot<IAppStore>({
  data: dataSliceReducer
})