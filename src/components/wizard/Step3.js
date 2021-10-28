import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

export default function Step3({ handleOnChange, submitReport, prevStep }) {

    const [startDate, setStartDate] = useState(new Date());

    const [areAllFieldsSelected, setAreAllFieldsSelected] = useState(false);
    const [allFieldsSelected, setAllFieldsSelected] = useState({
        date: null,
        phase: null,
        status: null,
        notes: null
    });

    const updateField = (property, value) => {
        setAllFieldsSelected((prevState) => ({
            ...prevState,
            [property] : value
        }))
    }

    const checkFields = () => {
        for(const property in allFieldsSelected) {
            if(!allFieldsSelected[property]) {
                setAreAllFieldsSelected(false);
                return;
            }
            setAreAllFieldsSelected(true);
        }
    }

    useEffect(() => {
        checkFields();
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="mb-4">
                        <span>1</span> Select Candidate
                    </div>
                    <div className="mb-4">
                        <span>2</span> Select Company
                    </div>
                    <div className="mb-4 currentStep">
                        <span>3</span> Fill Report Detail
                    </div>
                </div>
                <div className="col-9 border-left border-dark">
                    <div className="d-flex">
                        <div className="col-4">
                            <label htmlFor="datepicker">Pick a date: </label>
                            <DatePicker className="w-100 form-control" name="datepicker" 
                            selected={startDate}
                            dateFormat="dd/MM/yyyy"
                            maxDate={new Date()}
                            onChange={(date) => {
                                setStartDate(date); 
                                handleOnChange("date", startDate); 
                                updateField("date", date);
                                console.log(allFieldsSelected); }} />
                        </div>
                        <div className="col-4">
                            <label htmlFor="phase">Phase: </label><br />
                            <select className="form-control w-100" name="phase" 
                            onChange={(e) => {
                                handleOnChange("phase", e.target.value)
                                updateField("phase", e.target.value);
                                console.log(allFieldsSelected);}}>

                                <option value="">Select</option>
                                <option value="CV">CV</option>
                                <option value="HR">HR</option>
                                <option value="Tech">Tech</option>
                                <option value="Final">Final</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="status">Status: </label><br />
                            <select className="form-control w-100" name="status" required
                            onChange={(e) => {
                                handleOnChange("status", e.target.value)
                                updateField("status", e.target.value);
                                console.log(allFieldsSelected);}}>

                                <option value="">Select</option>
                                <option value="Passed">Passed</option>
                                <option value="Declined">Declined</option>
                            </select>
                        </div>
                    </div>
                    <div className="p-3">
                        <textarea className="w-100 form-control" rows="6" name="notes" placeholder="Some notes" required
                        onChange={(e) => {
                            handleOnChange("notes", e.target.value)
                            updateField("notes", e.target.value.trim());
                            console.log(allFieldsSelected);}}>
                        </textarea>
                    </div>

                    <div className={areAllFieldsSelected ? "d-none" : "d-block"}>
                        <p className="pl-3 text-muted">*all fields are required</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={prevStep}>
                            Previous
                        </button>
                        <button className={areAllFieldsSelected ? "btn btn-primary" : "btn btn-secondary"} 
                        disabled={!areAllFieldsSelected} 
                        onClick={submitReport}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}