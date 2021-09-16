export default class Report {
    constructor (id, candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note){
        this.id = id;
        this.candidateId = candidateId;
        this.candidateName = candidateName;
        this.companyId =companyId;
        this.companyName = companyName;
        this.interviewDate = interviewDate; 
        this.phase = phase;
        this.status = status;
        this.note = note ;
    }
}