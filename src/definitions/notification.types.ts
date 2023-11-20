export interface INotificationEventBus {
    sms_data: ISmsData[]
    rejected_query_uuid: string
    sent: boolean
    isSmsValid: boolean
}

export interface ISmsData {
    content: string
}
