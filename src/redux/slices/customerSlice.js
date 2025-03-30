import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderId: '',
    customerName: '',
    customerPhone: '',
    guests: 0,
    table: null

}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCutomer: (state, action) => {
            const {name, phone, guests} = action.payload
            state.orderId = `${Date.now()}`
            state.customerName = name,
            state.customerPhone = phone,
            state.guests = guests
        },
        removeCustomer: (state, action) => {
            state.customerName = '',
            state.customerPhone = '',
            state.guests = 0,
            state.table = null
        },
        updateTable: (state, action) => { 
            state.table = action.payload.table
        }
    }
})

export const {setCutomer, removeCustomer, updateTable} = customerSlice.actions
export default customerSlice.reducer
