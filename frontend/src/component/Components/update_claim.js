import React from 'react';
import '../Styles/style.css'
import useUpdateForm from '../Validation/useUpdateForm';
import validate2 from '../Validation/updateValidation'

const UpdateClaim = (submitForm) => {
    
    const {onSubmit, onInputChange, errorMsg, user} = useUpdateForm(submitForm, validate2 );
    const { empid, name, claimno, claimtype, claimprogram, startdate, enddate } = user;


    return (
            <div className="container">
            <h2>Update Claim Information</h2>
                <form >
                    <div className="form-group row">
                        <label for="" className="col-sm-2 col-form-label">Employee Id:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly
                                className="form-control-plaintext"
                                name="empid"
                                value={empid}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-sm-2 col-form-label">Employee Name:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly
                                className="form-control-plaintext"
                                name="name"
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-sm-2 col-form-label">Claim Number:</label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-control"
                                id="claimNo"
                                format="xxx-xxx-xxx"
                                name="claimno"
                                placeholder="___-___-___" 
                                data-slots="_"
                                value={claimno}
                                onChange={onInputChange}
                            />
                            <span className="text-danger">{errorMsg.claimNumber}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="control-label col-sm-2" for="">Claim Type:</label>
                        <div className="col-sm-10">
                            <select name="claimtype" value={claimtype} onChange={onInputChange}>
                                <option value="Submitted">Submitted</option>
                                <option value="Received">Received</option>
                                <option value="Pending">Pending</option>
                                <option value="MoreInfoRequired">More Info Required</option>
                                <option value="Denied">Denied</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-sm-2 col-form-label">Claim Program:</label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-control"
                                id="claimProgram"
                                name="claimprogram"
                                placeholder="Enter the Claim Program"
                                value={claimprogram}
                                onChange={onInputChange}
                            />
                            <span className="text-danger">{errorMsg.claimProgram}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-sm-2 col-form-label">Claim Start Date:</label>
                        <div className="col-sm-10">
                            <input type="date"
                                className="form-control"
                                id="startDate"
                                name="startdate"
                                placeholder="Enter the Start Date"
                                value={startdate}
                                onChange={onInputChange}
                            />
                            <span className="text-danger">{errorMsg.claimStartdate}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-sm-2 col-form-label">Claim End Date:</label>
                        <div className="col-sm-10">
                            <input type="date"
                                className="form-control"
                                id="endDate"
                                name="enddate"
                                placeholder="Enter the End date"
                                value={enddate}
                                onChange={onInputChange}
                            />
                            <span className="text-danger">{errorMsg.claimEnddate}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            {/* <button className="btn btn-outline-primary mr-4">Cancel</button> */}
                            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Update</button>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default UpdateClaim;
