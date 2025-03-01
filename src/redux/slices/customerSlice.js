import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    customerName: '',
    customerPhone: '',
    guests: 0,
    tablesNo: ''

}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCutomer: (state, action) => {
            const {name, phone, guests} = action.payload
            state.customerName = name,
            state.customerPhone = phone,
            state.guests = guests
        },
        removeCustomer: (state, action) => {
            state.customerName = '',
            state.customerPhone = '',
            state.guests = 0,
            state.tablesNo = ''
        },
        updateTable: (state, action) => { 
            state.tablesNo = action.payload.tablesNo
        }
    }
})

export const {setCutomer, removeCustomer, updateTable} = customerSlice.actions
export default customerSlice.reducer
