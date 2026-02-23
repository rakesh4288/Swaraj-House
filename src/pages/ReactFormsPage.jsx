import RowSelectionByCheckbox from "../components/RowSelectionByCheckbox";
import mpBoard12thExam from "../globalServices/MP_Board_12th_Exam";
const ReactFormsPage = () => {
    
    return (
        <div id="react-forms-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> React Forms Page </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <RowSelectionByCheckbox mpBoard12thExam={mpBoard12thExam} />
            </section>
        </div>
    )
}

export default ReactFormsPage;