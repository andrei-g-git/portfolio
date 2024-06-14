import { ContributionWeek } from "@/types"
import "./yearly-contributions.scss"
function YearlyContribution({weeks}: {weeks: ContributionWeek[]}) {
    console.log("this is a yearly contributions)")
    console.log("weeks:  ", weeks)

    return (
        <div className="contributions-container">
            blah
            <div className="contributions">
                {
                    weeks.map(week => 
                        <div className="contribution-week">
                            {
                                week.contributionDays.map(day => 
                                    <div className="contribution-day" style={day.contributionCount? {color: day.color} : {color: "lightgray"}}>

                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>        
    )
}

export default YearlyContribution
