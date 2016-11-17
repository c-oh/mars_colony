export class NewEncounter{
    constructor(
        public date: string,
        public colonist_id: number,
        public atype: string,
        public action: string,

    ) {}
}

export interface Encounter{
    colonist_id: string,
    date:string,
    atype:string,
    action: string,
    id: number,
}

export class NewColonist{
    constructor(
        public name: string,
        public age: number,
        public job_id: string,
    ) {}
}

export interface Colonist{
    name:string;
    id: number;
    age: number;
    job: Job;
}

export class Job{
    constructor(
        public name: string,
        public id: number,
        public description: string,
    ) {}
}

export interface Alien{
        type: string,
        submitted_by: number,
        id: number,
        description:string,
}
