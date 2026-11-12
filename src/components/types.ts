export type ListProps = {
        id: number
        check: boolean
        title: string
        dueDate?: string
        tagIds: number[]
     }
export type Tags = {
        id: number
        title: string
        color: string
     }