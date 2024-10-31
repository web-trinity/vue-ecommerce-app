import { defineStore } from 'pinia'
import { Product } from '@/types/product'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  actions: {},
})
