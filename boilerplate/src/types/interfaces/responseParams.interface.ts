export interface ResponseParams<T> {
  count: string
  next: string
  previous: string
  results: T[]
}

