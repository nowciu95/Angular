export interface Task {
    _id?: {$oid: string};
    name: String;
    created: string;
    done?: string;
    isDone: boolean;
}
