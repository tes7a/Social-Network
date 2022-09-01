import { UserType } from "../api/api"

type NewObjType = {
    id?: number,
    name?: string,
    status?: string,
    photos?: {
        small: string,
        large: string,
    },
    followed?: boolean,
}

export const updateObjectInArray = (items: UserType[], itemId: number, newObjProps: NewObjType) => {
    return items.map( i => i.id === itemId ? { ...i, ...newObjProps } : i )
} 