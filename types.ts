export type Item = {
  id: string
  name: string
  image?: string
}

export type List = {
  id: string
  title: string
  items: Item[]
}