export interface IDay {
  date: Date
  mealIds: number[]
  active: boolean
}

export interface IMeal {
  id: number
  name: string
  dishIds: number[]
}

export interface IDish {
  id: number
  foodId: number
  weight: number
}

export interface IFood {
  id: number
  name: string
  calories: number
  protein: number
  fat: number
  carbs: number
}

export interface IPerson {
  id: number
  name: string
  weight: number
  height: number
  age: number
}
