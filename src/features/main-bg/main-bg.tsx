import "./main-bg.scss";

function MainBg() {

    return (
       <div className="main-bg-container">
            {
                [1, 2, 3, 4].map(number => 
                    <div className="bg-sheet" 
                        id={`bg-sheet-${number}`}
                    >

                    </div>
                )
            }
       </div> 
    )
}

export default MainBg
