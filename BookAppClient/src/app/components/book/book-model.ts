export interface Book {
  id: number
  title: string
  description: string
  author: string
  publisher?: string
  publicationDate: Date
  language: string
  totalPages: number
}