import { configureStore } from "@reduxjs/toolkit";
import winnersSlice from "./Register";

const store = configureStore({
    reducer: {
        register: winnersSlice.reducer
    }
})

export default store;