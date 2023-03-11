import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../../config'
import { ILink } from '../../../models/ILink'

interface IState {
  links: ILink[]
  loading: boolean
  error: string | null
}

const initialState: IState = {
  links: [],
  loading: false,
  error: null,
}

interface IResponse {
  status: boolean
  link: ILink
}

export const createShortLink = createAsyncThunk<
  IResponse,
  string,
  { rejectValue: string }
>('links/createShortLink', async (url, { rejectWithValue }) => {
  const response = await fetch(API_BASE_URL + url, { method: 'POST' })

  if (!response.ok) {
    return rejectWithValue('Server Error!')
  }

  const data = await response.json()

  if (!data.ok) {
    return rejectWithValue('Not ok!')
  }

  return {
    status: data.ok as boolean,
    link: {
      originalLink: data.result.original_link as string,
      shortenLink: data.result.full_short_link as string,
    },
  }
})

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks(state, action: PayloadAction<ILink[]>){
      state.links = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createShortLink.pending, (state) => {
      state.error = null
      state.loading = true

      return state
    })

    builder.addCase(createShortLink.fulfilled, (state, action) => {
      state.loading = false
      state.links.push(action.payload.link)

      return state
    })
  },
})

export default linksSlice.reducer
export const {setLinks} = linksSlice.actions
