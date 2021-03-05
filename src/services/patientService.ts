import patients from '../../data/patients';
import { Patient, NotSSNPatientInfo } from '../types';

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


export default {
    getPatients,
    getNotSSNPatientInfo
};