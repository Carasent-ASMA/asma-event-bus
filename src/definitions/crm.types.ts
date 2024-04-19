export interface ICrmEventBus {
    time_tracking_dialog: {
        id?: number
        variant: 'create' | 'edit' | 'readonly'
    }
}
