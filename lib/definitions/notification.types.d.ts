export interface INotificationEventBus {
    sms_data: ISmsData[];
    rejected_query_uuid: string;
    sent: boolean;
    isSmsValid: boolean;
    validate_sms_text_on_submit: true;
}
export interface ISmsData {
    content: string;
}
//# sourceMappingURL=notification.types.d.ts.map