import logo from './logo.svg';
import FooterSocialLink from './FooterSocialLink';

const Footer = ({
    text,
    contactsDescription,
    phoneNumbers,
    copyrightYear,
}) => {
    return ( 
        <div className="bg-dark text-white pt-3">
            <div className="container-sm d-flex flex-column justify-content-center align-items-center">
                <img src={logo} width="200" alt="website logo" id="footer-logo"/>
                <div className="text-center border-bottom">
                    <p> {text} </p>
                </div>
                <div>
                    <p className="mt-5">{contactsDescription}</p>
                    <div className="d-flex justify-content-center">
                        { phoneNumbers.map((number) => <p className="mx-2">{number}</p> ) }
                    </div>
                    <div className="d-flex justify-content-center my-4">
                        <FooterSocialLink icon="https://imgs.search.brave.com/8lQ0ZvUentA7SDr8R0Pa8qBbDLcw0lgDzDY8t8XgmDY/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9vbmVt/YXJrZXQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzAz/L2luc3RhLWljb24t/MTAyNHgxMDI0LnBu/Zw" alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon="https://imgs.search.brave.com/70390jQSfVsjPzoOaHb96nE2lssrdYkr0HOVLKagutE/rs:fit:1024:1024:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9w/YW9tZWRpYS9zbWFs/bC1uLWZsYXQvMTAy/NC9zb2NpYWwtZmFj/ZWJvb2staWNvbi5w/bmc" alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon="https://imgs.search.brave.com/c4LbyxUuyoF_cVVqpqFTpZohvesc5oFoHh-eVUCRY34/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4u/amltLW5pZWxzZW4u/Y29tL21hY29zLzUx/Mi9naXRodWItZGVz/a3RvcC0yMDIxLTA1/LTIwLnBuZw" alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon="https://imgs.search.brave.com/RHmlZSxNjsJawk0E8HCQ4K8ZIi1JNOH3IwboxRBf2SM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbGlua2VkSW4v/bGlua2VkSW5fUE5H/OC5wbmc" alt="lorem ipsum" link="https://www.google.com"/>
                        <FooterSocialLink icon="https://imgs.search.brave.com/Y8oTCtfxAzysYUwUNIqjBgeR-8R8t5KpZ3sQE-Xl9Zg/rs:fit:1024:1024:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9p/eW5xdWUvaW9zNy1z/dHlsZS8xMDI0L1R3/aXR0ZXItaWNvbi5w/bmc" alt="lorem ipsum" link="https://www.google.com"/>
                    </div>
                </div>
                
            </div>
            <div className="py-4 d-flex justify-content-center align-items-center border-top">
                <p className="mb-0">Copyright &copy; {copyrightYear}  All rights Reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;