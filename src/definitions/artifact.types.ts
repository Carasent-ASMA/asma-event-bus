import type { ArtifactPresenterTypes } from 'asma-types/lib'

export interface IOnSelectDocument {
    id: string
    name: string
    url?: string
    file?: File
    extension?: string
}
export interface IArtifactOnSelect {
    id: string
    type: 'qnr' | 'doc' | 'parcel'
}

export interface IArtifactEventBus {
    on_select_documents: IOnSelectDocument[]
    moderator_artifact_basic_data: IModeratorArtifactBasicData[]
    on_open_plans: {}
    on_open_research: {}
    qnr_custom_context?: string
    sms_notification_recipients: ISmsNotificationRecipient[]
    /**
     * @use in all-qnrs widget
     */
    on_send_artifacts_to_cart: IArtifactOnSelect[]
    /**
     * @use in orders, all-qnrs widgets
     */
    select_artifacts: IArtifactOnSelect[]

    navigate_to_qnr_template_editor: {
        qnr_id?: string
        is_anonymous?: boolean
    }
    template_id: number
    sms_keyword_replacements: { key: string; value: string }[]
    /**
     * @param template_ids - ids of templates to create questionnaire
     * @param proxy_ids - ids of proxies to create questionnaire
     * @example { template_ids: ['1', '2'], proxy_ids: ['1', '2'] }
     * @summary Create questionnaire from templates and proxies as example could be used in event creation
     */
    create_questionnaire: { template_ids: string[], proxy_ids: string[] }

}

export interface IModeratorArtifactBasicData {
    type: ArtifactPresenterTypes
    id: string
    patient_id: string
}

export interface ISmsNotificationRecipient {
    service?: string
    user_id: string
    subject_id: string
    sendSms?: boolean
    template_id?: string
}
