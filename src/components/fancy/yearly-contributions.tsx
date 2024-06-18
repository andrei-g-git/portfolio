import { ContributionWeek } from "@/types"
import "./yearly-contributions.scss"
function YearlyContribution({weeks, year}: {weeks: ContributionWeek[], year: number}) {
    console.log("this is a yearly contributions)")
    //console.log("weeks:  ", weeks)
    console.log("YEAR~~~~~  ", year)

    return (
        <div className="contributions-container">
            <div>
                {
                    year
                }
            </div>
            <div className="contributions">
                {
                    weeks.map(week => 
                        <div className="contribution-week">
                            {
                                week.contributionDays.map(day => 
                                    <div className="contribution-day" style={day.contributionCount? {backgroundColor: day.color} : {backgroundColor: "lightgray"}}> 

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
