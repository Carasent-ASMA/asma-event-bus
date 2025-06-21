import type { ISmsNotificationRecipient } from './artifact.types.js'

export interface ILegacyPortalEventBus {
    template_id: number
    sms_notification_recipients: ISmsNotificationRecipient[]
    sms_keyword_replacements: { key: string; value: string }[]
}
