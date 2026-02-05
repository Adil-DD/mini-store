import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload
      const exist = state.items.find((i) => i.id === item.id)
      if (exist) {
        exist.quantity += item.quantity
      } else {
        state.items.push(item)
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    increase(state, action: PayloadAction<number>) {
      const it = state.items.find((i) => i.id === action.payload)
      if (it) it.quantity += 1
    },
    decrease(state, action: PayloadAction<number>) {
      const it = state.items.find((i) => i.id === action.payload)
      if (it) {
        it.quantity -= 1
        if (it.quantity <= 0) state.items = state.items.filter((i) => i.id !== action.payload)
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, increase, decrease, clearCart } = cartSlice.actions
export default cartSlice.reducer
