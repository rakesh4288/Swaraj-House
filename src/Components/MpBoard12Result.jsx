import { useEffect, useState } from "react";
import mpBoard12thExam from "../globalServices/MP_Board_12th_Exam";

const MpBoard12Result = () => {
    // https://www.youtube.com/shorts/RX4Eb68gWqA
    // https://www.youtube.com/shorts/ZuwKBdsWJDc
    const [studentDetails, setStudentDetails] = useState([]);

    const fetch_1st_division = () => {
        const result = mpBoard12thExam.filter((item) => {
            if (item.marks >= 60) {
                return item
            }
        });
        setStudentDetails(result);
    }

    const fetch_2nd_division = () => {
        const result = mpBoard12thExam.filter((item) => {
            if (item.marks >= 45 && item.marks < 59) {
                return item
            }
        });
        setStudentDetails(result);
    }

    const fetch_3rd_division = () => {
        const result = mpBoard12thExam.filter((item) => {
            if (item.marks >= 33 && item.marks < 45) {
                return item
            }
        });
        setStudentDetails(result);
    }

    const failedStudent = () => {
        const result = mpBoard12thExam.filter((item) => {
            if (item.marks < 33) {
                return item
            }
        });
        setStudentDetails(result);
    }


    const handleDivision = (e) => {
        const selectedDivision = e.target.value;
        console.log('selectedDivision =', selectedDivision);
        switch (selectedDivision) {
            case "First_Class":
                return fetch_1st_division()
            case "Second_Class":
                return fetch_2nd_division()
            case "Third_Class":
                return fetch_3rd_division();
            default:
                return failedStudent();
        }
    }



    useEffect(() => {
        const fetchAllStudent = () => {
            setStudentDetails(mpBoard12thExam);
        }
        fetchAllStudent();
    }, [mpBoard12thExam]);

    return (
        <div id="mp-board-12-result">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h3>MP Board 12th Result 2026 Dummy Data</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    {studentDetails && studentDetails.length > 0 ? (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Student Name</td>
                                    <td>Marks</td>
                                    <td>Division</td>
                                    <td>Result</td>
                                    <td>City</td>
                                    <td>Remarks</td>
                                </tr>
                            </thead>

                            <tbody>
                                {studentDetails.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.studentName}</td>
                                            <td>{item.marks}</td>
                                            <td>{item.result}</td>
                                            <td>{item.division}</td>
                                            <td>{item.city}</td>
                                            <td>{item.remarks}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    ) : <div className="text-danger"> Student Data Not Found !! </div>}
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-success btn-sm mb-2" onClick={fetch_1st_division}>First Division</button> &nbsp;
                            <button className="btn btn-info btn-sm mb-2" onClick={fetch_2nd_division}>Second Division</button>  &nbsp;
                            <button className="btn btn-warning btn-sm mb-2" onClick={fetch_3rd_division}>Third Division</button>  &nbsp;
                            <button className="btn btn-danger btn-sm mb-2" onClick={failedStudent}>Failed</button>

                            <select className="form-select" onChange={handleDivision}>
                                <option value="">Select Option</option>
                                <option value="First_Class">First Class Student</option>
                                <option value="Second_Class">Second Class Student</option>
                                <option value="Third_Class">Third Class Student</option>
                                <option value="Failed">Failed Student</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MpBoard12Result;