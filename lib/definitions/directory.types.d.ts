import { IErrorState, IPatientFullData, IUserConsultants, IUsersForOrders } from '../interfaces/directory.interfaces';
export interface IDirectoryEventBus {
    users: IPatientFullData[];
    selected_users: IPatientFullData[];
    request_for_users: {};
    request_for_selected_users: {};
    users_for_orders: IUsersForOrders[] & {
        error?: IErrorState;
    };
    group_to_send: string;
    on_group_link_click: {};
    selected_consultants: IUserConsultants[];
    selected_task_consultant_id?: string;
    open_overview_popup: boolean;
}
//# sourceMappingURL=directory.types.d.ts.map