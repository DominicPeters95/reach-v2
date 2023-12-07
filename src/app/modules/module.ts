export interface Question{
    id: string,
    type: string,
    content: string,
    description: string|null,
    media: any
} 


export interface Answer{
    id: string,
    isCorrect: string|null,
    elements: any,
    feedback: string|null
}

export interface PresentationItem{
    id: string,
    type: string,
    content: string,
    description: string,
    media: any[],
    captions: any[]
}