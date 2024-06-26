export interface ISelectedTicket {
    id: string;
    title: string;
}
export interface ISelectedChatDocument {
    file: File;
    data: {
        title: string;
        extension: string;
        forSign?: boolean;
    };
}
export interface IOpenDocumentChatPopUp {
    state: boolean;
}
export interface IChatEventBus {
    on_select_document: ISelectedTicket;
    on_select_chat_document: ISelectedChatDocument | ISelectedChatDocument[];
    on_select_new_chat_document: {
        documents: ISelectedChatDocument | ISelectedChatDocument[];
        source: 'dialog' | 'body';
    };
    on_document_chat_popup: IOpenDocumentChatPopUp;
    on_open_chat: {};
    test: string;
}
//# sourceMappingURL=chat.types.d.ts.map