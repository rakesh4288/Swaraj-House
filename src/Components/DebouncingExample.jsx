import { useEffect, useState } from 'react';
import AppImages from '../Assets';
const DebouncingExample = () => {
    const [apiData, setApiData] = useState([]);
    const [pincode, setPincode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const url = 'https://api.postalpincode.in/pincode/411057';
    // https://demo.dataverse.org/api/search?q=mobile
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    const fetchingPincode = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const res = await response.json();
            if (res[0].Status === 'Success') {
                setApiData(res[0].PostOffice);
                setIsLoading(false);
            } else {
                setApiData([]);
                setIsLoading(false);
            }
        }
        catch (error) {
            setIsLoading(true);
            console.log('API Error: Getting error while calling API', error);
        }
    }

    useEffect(() => {
        const delayDebouncing = setTimeout(() => {
            fetchingPincode();
        }, 2000);

        return () => {
            // This is for clean up activity
            clearTimeout(delayDebouncing);
        }
    }, [pincode]);

    const handleInput = (e) => {
        let currentInput = e.target.value;
        setPincode(currentInput);
    }
    return (
        <div className="row">
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='alert alert-info'>
                    <label className='label'>Enter Indian Pincode: </label>
                    <input type='search' className='form-control' onChange={handleInput} />
                </div>

                <div>
                    <img src={AppImages.PostOffice_Img} alt='PostOfficeImg' className='img-fluid' />
                </div>
            </div>

            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                <h5>Trying Debouncing with API </h5>
                {isLoading && (
                    <div className="d-flex justify-content-center" style={{ textAlign: 'center' }}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {apiData && apiData.length > 1 ? (
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Pincode</th>
                                <th>District</th>
                                <th>Region</th>
                                <th>State</th>
                            </tr>
                        </thead>

                        <tbody>
                            {apiData.map((item, index) => {
                                return (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Pincode}</td>
                                        <td>{item.District}</td>
                                        <td>{item.Region}</td>
                                        <td>{item.State}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) :
                    (
                        <div className='alert alert-danger text-center'>
                            Please enter the Pincode in number format !!
                        </div>
                    )}
            </div>
        </div>
    )
}

export default DebouncingExample;