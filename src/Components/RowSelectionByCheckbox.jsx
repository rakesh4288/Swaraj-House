import { useEffect, useState } from "react";

const RowSelectionByCheckbox = ({ mpBoard12thExam }) => {
    const [studentData, setStudentData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    useEffect(() => {
        setStudentData(mpBoard12thExam);
    }, [mpBoard12thExam]);

    // console.log('studentData =', studentData);

    const checkboxHandler = (e) => {
        const {value, checked} = e.target;
        const checkedRow = JSON.parse(value);
        console.log('checkedRow =', checkedRow);
        if(checked) {
            // setSelectedRow([
            //     ...selectedRow,
            //     checkedRow
            // ]);

            setSelectedRow((prevState) => [
                ...prevState,
                checkedRow
            ]);
        } else {
            const tempArray = selectedRow.filter((item) => item.id !== checkedRow.id);
            console.log('tempArray = ', tempArray);
            setSelectedRow(tempArray);
        }
    }

    console.log('selectedRow =', selectedRow);
    return (
        <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                <h5>Row Seletion by Checkbox</h5>
                {studentData && studentData.length > 0 ? (
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <td>&nbsp;</td>
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
                            {studentData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" id={`row-checkbox-${item.id}`} className="form-check-input" value={JSON.stringify(item)} onChange={checkboxHandler}/>
                                                <label className="form-check-label" htmlFor={`row-checkbox-${item.id}`}>&nbsp;</label>
                                            </div>
                                        </td>
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
                <pre>{JSON.stringify(selectedRow, null, 2)}</pre>
            </div>
        </div>
    )
}

export default RowSelectionByCheckbox;