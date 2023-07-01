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
            <p className='heroPara'>We create </p>
            <div className="words">
                { wordArray.map((word) => {
                    return <span>{ word }</span>
                })}
            </div>
            <p className='heroPara'> for people with purpose.</p>
        </div>
    )
}

export default ScrollText;