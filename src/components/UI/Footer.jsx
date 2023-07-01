import { SocialIcon } from 'react-social-icons';
import '../../styles/footer.css'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h3 className='contact'>Contact</h3>
                        <p>1 Market St</p>
                        <p>Sydney, NSW</p>
                        <p>2000</p>
                        <p>02 9855 5555</p>
                        <p>info@oneagency.com.au</p>
                    </div>
                    <div className="footer-col">
                        <p>We acknowledge and respect the Aboriginal and Torres Strait Islander people as the custodians of these lands and waters.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;