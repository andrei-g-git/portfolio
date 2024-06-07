function BigButton({text, link}: {text: string, link: string}) {
    return (
        <a href={link}>
            <button>
                {text}
            </button>                
        </a>
        
    )
}

export default BigButton
