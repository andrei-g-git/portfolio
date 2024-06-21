
import "./sliding-diagonals.scss"

function SlidingDiagonals(props: any) {
    const {} = props

    return (
        <div className="slidding-diagonals-container">
            {
                [1, 2, 3, 4].map(number => 
                    <div className="slidding-diagonal" 
                        id={`slidding-diagonal-${number}`}
                    >

                    </div>
                )
            }
        </div>
    )
}

export default SlidingDiagonals
