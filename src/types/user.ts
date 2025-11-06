export interface User{
    id: number;
    name: string;
    emplid: string;
    position: string;
    created_at: string;
    created_by: string;
}

export default interface UserDTO {
    name: string;
    emplid: string;
    position: string;
    created_at: string;
    created_by: string;
}