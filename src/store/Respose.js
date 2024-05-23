import { create } from 'zustand'

export const useResponseStore = create((set) => ({
  response_id: null,
  content: '',
  username: '',
  setResponseId: (id) => set({ response_id: id }),
  setContent: (content) => set({ content }),
  setUsername: (username) => set({ username }),
  clearResponse: () => set({ response_id: null, content: '', username: '' })
}))