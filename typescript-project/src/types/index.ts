// filepath: /typescript-project/typescript-project/src/types/index.ts
export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Vote {
    userId: string;
    electionId: string;
    choice: string;
}

export type Badge = 'registered' | 'reminder' | 'inviter';

export interface Election {
    id: string;
    title: string;
    date: Date;
    description: string;
}

export interface Challenge {
    userId: string;
    badges: Badge[];
    startDate: Date;
    endDate: Date;
}