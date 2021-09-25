import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Step3({ prevStep }) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="mb-4 currentStep">
                        <span>1</span> Select Candidate
                    </div>
                    <div className="mb-4">
                        <span>2</span> Select Company
                    </div>
                    <div className="mb-4">
                        <span>3</span> Fill Report Detail
                    </div>
                </div>
                <div className="candidate-div col-9 border-left border-dark p-4">

                    <div className="row">
                        <div className="col-4">
                            <label for="datepicker">Pick a date: </label>
                            <DatePicker name="datepicker" />
                        </div>
                        <div className="col-4">
                            <label for="phase">Phase: </label><br />
                            <select className="form-select" aria-label="Default select example" name="phase">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label for="status">Status: </label><br />
                            <select className="form-select" aria-label="Default select example" name="status">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Notes..." />
                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={prevStep}>
                            Previous
                        </button>
                        <button className="btn btn-primary" onClick={prevStep}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}