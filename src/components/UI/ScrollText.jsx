import '../../styles/scroll.css';


const ScrollText = () => {

    const wordArray = [
        '   ',
        'websites',
        'experiences',
        'apps',
        'methodologies',
        'systems',
        'websites'
    ]

    return (
        <div className="sentence">
            <p>We create </p>
            <div className="words">
                { wordArray.map((word) => {
                    return <span>{ word }</span>
                })}
            </div>
            <p> for people with purpose.</p>
        </div>
    )
}

export default ScrollText;