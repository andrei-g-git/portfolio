import { ContributionWeek } from "@/types";
import { useEffect, useState } from "react"

function Contributions({Chart}: {Chart: React.FunctionComponent<{weeks: ContributionWeek[]}>}) {
    let placeholderContributions: any[] = [];
    const [contributions, setContributions] = useState<any>([]);
    
    console.log("live from contributions")

    useEffect(() => {
        [2021, 2022, 2023, 2024].forEach(year => {
            getContributionsByYear(
                "token  REPLACE WITH TOKEN FROM Z-SCRATCHPAD.TXT in the root project folder",
                "andrei-g-git",
                year
            )
                .then(yearlyContributions => {
                     
                    const abc = 1234; //apparently I have to do this so that this block runs, I don't know what the hell is going on....
                    placeholderContributions.push(yearlyContributions.data.user.contributionsCollection.contributionCalendar);
                    //console.log("contributions:   ", placeholderContributions)  
                })            
        })

        setContributions(placeholderContributions)
    },
        []
    )

    return (
        <div className="contributions-wrapper">
            {
                contributions.map((contrib: any) => {
                        //console.log("yearly:   ", contrib)
                        const abc = 123;
                        return <Chart weeks={contrib.weeks}/>
                    }
                )

            }
        </div>        
    )
}


const getContributionsByYear = async (token: string, username: string, year: number) => {
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
              name
              contributionsCollection(from: "${year}-01-01T00:00:00", to: "${year}-12-31T00:00:00") {
                contributionYears
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                    months {
                        name
                        year
                    }
                }
              }
            }
          }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data
}


const test = (contrib: any) => {
    console.log("coontrib:   ", contrib)
}

export default Contributions
