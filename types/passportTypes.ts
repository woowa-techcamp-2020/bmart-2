import {IUser} from './modelTypes'

export type Done = (flag:boolean | null, user: IUser | number | boolean) => void;