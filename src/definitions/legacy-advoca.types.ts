import { ISmsNotificationRecipient } from './artifact.types'

export interface ILegacyPortalEventBus {
    template_id: number
    sms_notification_recipients: ISmsNotificationRecipient[]
    sms_keyword_replacements: { key: string; value: string }[]
}
