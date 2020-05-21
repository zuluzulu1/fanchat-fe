import { GroupMessage } from './groupmessages.model';

export interface GroupMessagesResult {
    data:GroupMessage [],
    success : boolean
}

/*
{
    "data": [
        {
            "name": "marla zinger",
            "userId": "62311ec0-8940-11ea-974e-3f976483c01c",
            "text": "hellothere",
            "createdAt": "2020-05-03T15:23:14.000Z"
        },
    ],
    "success": true
}
*/