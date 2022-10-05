const FooterSocialLink = ({
    icon,
    link,
    altAttribute
}) => {
    return (
        <div>
            <a href={link} target="__blank">
                <img src={icon} alt={altAttribute} id="footer-social-link-icon" />
            </a>
        </div>
    )
}

export default FooterSocialLink;