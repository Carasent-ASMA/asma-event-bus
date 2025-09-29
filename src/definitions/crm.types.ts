export interface ICrmEventBus {
    time_tracking_dialog: {
        id?: number
        variant: 'create' | 'edit' | 'readonly'
    }
    nav_office_update: {
        refresh: boolean
    }
}
