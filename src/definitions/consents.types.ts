export interface IConsentsEventBus {
    related_entities: string[]
    related_entity: string
    on_all_mandatory_consents_accepted: boolean
    privacy_policy_tab_change: { targetTab: string; status: 'request' | 'allowed' }
}
