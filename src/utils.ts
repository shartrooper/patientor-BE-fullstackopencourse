import { NewPatient, Gender } from './types';


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String; //to make absolutely sure It's a string
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};


const parseName = (name: unknown): string => {
    if(!name || !isString(name)){
    throw new Error("Incorrect or missing patient's name");
    }
    
    return name;

};

const parseDateOfBirth = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date");
    }
    return date;
};

const parseSSN = (ssn: unknown): string => {
    if(!ssn || !isString(ssn)){
    throw new Error('Incorrect or missing ssn');
    }
    
    return ssn;
};

const parseOccupation = (occ: unknown): string => {
    if(!occ || !isString(occ)){
    throw new Error('Incorrect or missing Occupation');
    }
    return occ;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if(!gender || !isGender(gender)){
    throw new Error('Incorrect or missing Occupation');
    }
    return gender;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
    const newEntry: NewPatient = {
        name: parseName(name),
        dateOfBirth: parseDateOfBirth(dateOfBirth),
        ssn: parseSSN(ssn),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation)
    };

    return newEntry;
};

export default toNewPatientEntry;