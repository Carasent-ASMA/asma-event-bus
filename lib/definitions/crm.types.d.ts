export interface ICrmEventBus {
    time_tracking_dialog: {
        id?: number;
        variant: 'create' | 'edit' | 'readonly';
        is_employee_time_tracking?: boolean;
    };
    nav_office_update: {
        refresh: boolean;
    };
}
//# sourceMappingURL=crm.types.d.ts.map