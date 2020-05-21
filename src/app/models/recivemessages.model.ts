
export interface RecivedMessages {
    groupId : string
    message : {
        sender : string
        type : string
        text : string
    }
}