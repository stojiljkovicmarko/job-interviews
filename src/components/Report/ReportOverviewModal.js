import React from "react";

import Modal from "react-modal";

import { formatDate } from "../../utils/helperFunctions";

import "./ReportOverviewModal.css";

export default function ReportOverviewModal({ candidateReport, isModalOpen, setIsModalOpen }) {


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <Modal style={{
            overlay: {
                //for backdrop
            },
            content: {
                position: 'absolute',
                blockSize: "fit-content",
                float: "left",
                top: '50%',
                left: '50%',
                transform: "translate(-50%, -50%)",
                border: '1px solid gray',
                background: 'whitesmoke',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
            }
        }}
            onRequestClose={toggleModal}
            isOpen={isModalOpen} ariaHideApp={false}>


            <div className="flex flex-column">
                <div className="d-flex justify-content-between">
                    <h2 className="d-inline">{candidateReport.candidateName}</h2>
                    <button className="btn btn-outline-danger" onClick={toggleModal}> <i class="fas fa-times"></i> </button>
                </div>
                <hr className="my-2" />
                <div className="d-flex flex-row">
                    <div className="col-5">
                        <div className="mb-3">
                            <p className="text-muted mb-1">Company </p>
                            <h5 className="">{candidateReport.companyName}</h5>
                        </div>
                        <div className="mb-3">
                            <p className="text-muted mb-1">Interview date </p>
                            <h5 className="">{formatDate(candidateReport.interviewDate)}</h5>
                        </div>
                        <div className="mb-3">
                            <p className="text-muted mb-1">Phase </p>
                            <h5 className="">{candidateReport.phase}</h5>
                        </div>
                        <div className="mb-3">
                            <p className="text-muted mb-1">Status </p>
                            <h5 className="">{candidateReport.status}</h5>
                        </div>
                    </div>
                    <div className="col-7">
                        <p className="text-muted mb-1">Status </p>
                        <p >{candidateReport.note}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}