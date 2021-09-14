export default class Report {
    constructor (reportId, candidateId, candidateName, companyID, companyName, interviuveDate, phase, status, note){
        this.reportId = reportId;
        this.candidateId = candidateId;
        this.candidateName = candidateName;
        this.companyID =companyID
        this.companyName = companyName;
        this.interviuveDate = interviuveDate; 
        this.phase = phase;
        this.status = status;
        this.note = note ;
    }
}