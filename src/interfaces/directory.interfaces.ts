export interface IPatientBasicData {
    /**
     * @id is user directory_uuid or users directory_id
     */
    id: string
    activity_id: string
    name: string
    role: string
}
export interface IUsersForOrders extends IPatientBasicData {
    directory_uuid: string
    group_id?: string
    offer_id?: string
}

export interface IUserConsultants extends Pick<IUsersForOrders, 'id' | 'name' | 'role'> {
    actno: string
    offer_ids: string[]
}

export interface IPatientFullData extends IPatientBasicData {
    actno: string
    activity_ids: string[]
}

export interface IErrorState {
    show_error: boolean
}
