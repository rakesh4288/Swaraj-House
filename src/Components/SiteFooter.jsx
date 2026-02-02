const SiteFooter = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    return(
        <div id='site-footer' className='siteFooter'>
            <p className='footerText'>
                All Copyright Reserved &nbsp;
                <b>
                    <span className="logoOrange">स्व</span><span className="logoWhite">रा</span><span className="logoGreen">ज</span>
                </b> @ {currentYear} 
            </p>
        </div>
    )
}

export default SiteFooter;