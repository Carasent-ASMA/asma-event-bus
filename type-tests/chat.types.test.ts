import { type ChatDocumentSource, chatEventBuss, type IChatEventBus, type ISelectedChatDocument } from '../src/index.js'

/* Type-level assertions only: checked by `pnpm test:types`, never emitted or executed. */

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
type Expect<T extends true> = T
type IsOptionalKey<T, K extends keyof T> = {} extends Pick<T, K> ? true : false

type NewChatDocumentPayload = IChatEventBus['on_select_new_chat_document']
type RegisteredPayload = Parameters<Parameters<typeof chatEventBuss.register<'on_select_new_chat_document'>>[1]>[0]

// T1: picker_owner is exactly string | undefined
export type T1 = Expect<Equal<NewChatDocumentPayload['picker_owner'], string | undefined>>

// T2: picker_owner is optional
export type T2 = Expect<IsOptionalKey<NewChatDocumentPayload, 'picker_owner'>>

// T3: ChatDocumentSource is unchanged
export type T3 = Expect<Equal<ChatDocumentSource, 'dialog' | 'body' | 'task_chat'>>

// T4: producers can send picker_owner
export function t4DispatchWithPickerOwner(documents: ISelectedChatDocument[]): void {
    chatEventBuss.dispatch('on_select_new_chat_document', {
        documents,
        source: 'task_chat',
        picker_owner: 'task-chat-composer',
    })
}

// T5: old producers that omit picker_owner still compile
export function t5DispatchWithoutPickerOwner(documents: ISelectedChatDocument[]): void {
    chatEventBuss.dispatch('on_select_new_chat_document', { documents, source: 'body' })
}

// T6: picker_owner rejects non-string values
export function t6DispatchRejectsNonStringPickerOwner(documents: ISelectedChatDocument[]): void {
    // @ts-expect-error picker_owner must be a string
    chatEventBuss.dispatch('on_select_new_chat_document', { documents, source: 'task_chat', picker_owner: 1 })
}

// T7: listeners read picker_owner as string | undefined
export type T7 = Expect<Equal<RegisteredPayload['picker_owner'], string | undefined>>

// T8: the payload source stays ChatDocumentSource
export type T8 = Expect<Equal<NewChatDocumentPayload['source'], ChatDocumentSource>>

// T9: listeners read source as ChatDocumentSource
export type T9 = Expect<Equal<RegisteredPayload['source'], ChatDocumentSource>>
