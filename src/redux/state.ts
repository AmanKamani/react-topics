export interface CakeState{
    numOfCakes: number;
}

export interface UserState{
    loading: boolean;
    data: any[];
    error: string | null;
}

interface AppState{
    cake: CakeState;
    users: UserState;
}

export default AppState;