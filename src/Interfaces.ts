export interface dataObject {
  [key: string]: string
}

export interface locationType {
  hash: string
  key: string
  pathname: string
  search: string
  state: dataObject[]
}
