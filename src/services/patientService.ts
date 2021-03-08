import patients from '../../data/patients';
import { Patient, NotSSNPatientInfo, NewPatient} from '../types';
import { v4 as uuidv4 } from 'uuid';

const getId= (id: string): string => id;

const getPatients = (): Patient[] => {
    return patients;
};

const getNotSSNPatientInfo = (): NotSSNPatientInfo[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: NewPatient): Patient => {
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id = getId(uuidv4());
    
    const newPatient = {
        id,
        ...patient
    };

    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    getNotSSNPatientInfo,
    addPatient
};