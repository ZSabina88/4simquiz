import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const postList = createAsyncThunk("winnerList/fetchList",
    async function ({name, surname, email}, { rejectWithValue }) {
        try {
            const {response} = await fetch("http://localhost:8000/contact",
                {
                    method: "POST",
                    mode: "cors",
                    credentials: "same-origin",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        name, surname, email
                    }
                });

            if (!response.ok) {
                throw new Error("Server error");
            }
            // const newList = await response.json();
            // return { newList };
            return response;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    });


const getInitialList = () => {
    const localList = window.localStorage.getItem("winnerList");
    if (localList) {
        return JSON.parse(localList);
    }
    window.localStorage.setItem("winnerList", JSON.stringify([]));
    return [];
};

const initialState = {
    list: getInitialList(),
};

const winnersSlice = createSlice({
    name: "credentials",
    initialState,
    reducers: {
        addWinner(state, action) {
            console.log("action", action)

            state.list.push(action.payload);

            const winnerList = window.localStorage.getItem("winnerList");
            if (winnerList) {
                const listArr = JSON.parse(winnerList);
                listArr.push({ ...action.payload });
                window.localStorage.setItem("winnerList", JSON.stringify(listArr))
            }
        },
    }
});

export const { addWinner } = winnersSlice.actions;

export default winnersSlice;