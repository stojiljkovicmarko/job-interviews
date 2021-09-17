import React from "react";

import Modal from "react-modal";

import "./ReportOverviewModal.css";

export default function ReportOverviewModal({ candidateReport, isModalOpen, setIsModalOpen }) {

    return (
        <Modal style={{
            overlay: {
                //for backdrop
            },
            content: {
                position: 'absolute',
                top: '100px',
                left: '100px',
                right: '100px',
                bottom: '100px',
                border: '1px solid gray',
                background: 'whitesmoke',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
            }
        }}
            onRequestClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen} ariaHideApp={false}>
            <button onClick={() => setIsModalOpen(false)}> X </button>
            <h2>{candidateReport.candidateName}</h2>
            <p>{candidateReport.companyName}</p>
            <p>{candidateReport.interviewDate}</p>
            <p>{candidateReport.note}</p>
        </Modal>
    );
}


{/* <div className=" " id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Name is Marko</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="report-modal-body">
                            <div className="d-flex">
                                <div className="col-5 d-flex flex-column">
                                    <div className="mb-1">
                                        <p className="text-muted m-0">Company </p>
                                        <h5 className="pl-1 my-2">Google</h5>
                                    </div>
                                    <div className="mb-1">
                                        <p className="text-muted m-0">Interview date </p>
                                        <h5 className="pl-1 my-2">10.10.2021.</h5>
                                    </div>
                                    <div className="mb-1">
                                        <p className="text-muted m-0">Phase </p>
                                        <h5 className="pl-1 my-2">Some phase</h5>
                                    </div>
                                    <div>
                                        <p className="text-muted m-0">Status </p>
                                        <h5 className="pl-1 my-2">Passed</h5>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <p className="text-muted m-0">Notes: </p>
                                    <div>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}