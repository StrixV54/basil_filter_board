import { completed, failure, pending, refund, sent, success } from "../assets/status";

export const machineStatus = [
    {
        status: 'Successful',
        icon_url: success
    },
    {
        status: 'Pending',
        icon_url: pending
    },
    {
        status: 'Sent',
        icon_url: sent
    },
    {
        status: 'Failure',
        icon_url: failure
    },
    
    {
        status: 'Refund Initiated',
        icon_url: refund
    },
    {
        status: 'Refund Completed',
        icon_url: completed
    }
];