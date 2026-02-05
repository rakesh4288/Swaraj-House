import ToDoByArrayofObject from "../components/ToDoByArrayofObject";

const ToDoPracticePage = () => {
    return (
        <div id="to-do-practice-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> To Do Practice </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
               <ToDoByArrayofObject />
            </section>
        </div>
    )
}

export default ToDoPracticePage;