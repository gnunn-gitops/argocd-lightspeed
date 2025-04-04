export enum Provider {
    AZURE = "Azure"
}

export enum Model {
    GPT4 = "gpt-4"
}
export type QueryRequest = {
    conversation_id: string,
    model: Model,
    provider: Provider,
    query: string,
    system_prompt: string
}

export type QueryResponse = {
    conversationId: string,
    response: string
}
