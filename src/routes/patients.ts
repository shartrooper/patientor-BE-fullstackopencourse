import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router= express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNotSSNPatientInfo());
});

router.post('/',(req,res)=>{
    try {
        const newPatientEntry=toNewPatientEntry(req.body);
        
        const addNewPatient=patientService.addPatient(newPatientEntry);
        
        console.log("succesfully added");
        res.json(addNewPatient);
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.status(400).send(error.message);
    }
});
export default router;