import logo from './logo.svg';
import FooterSocialLink from './FooterSocialLink';

const Footer = ({
    text,
    contactsDescription,
    phoneNumbers,
    copyrightYear,
}) => {
    return ( 
        <div className={"bg-dark text-white pt-3"}>
            <div className={"container-sm d-flex flex-column justify-content-center align-items-center"}>
                <img src={logo} alt="website logo" id="footer-logo"/>
                <div className={"text-center border-bottom"}>
                    <p> {text} </p>
                </div>
                <div>
                    <p className={"mt-5"}>{contactsDescription}</p>
                    <div className={"d-flex justify-content-center"}>
                        { phoneNumbers.map((number) => <p className={"mx-2"}>{number}</p> ) }
                    </div>
                    <div className="d-flex justify-content-center my-4">
                        <FooterSocialLink icon={logo} alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon={logo} alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon={logo} alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon={logo} alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon={logo} alt="lorem ipsum" link="https://www.google.com"/>
                    </div>
                </div>
                
            </div>
            <div className="py-4 d-flex justify-content-center align-items-center border-top">
                <p className="mb-0">Copyright &copy; {copyrightYear} <span><img src={logo} alt="website logo" id="footer-copyright-logo"/></span> All rights Reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;