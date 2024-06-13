import { useEffect, useState } from "react"

function Contributions() {
    let placeholderContributions: any[] = [];
    const [contributions, setContributions] = useState<any>([]);
    
    console.log("live from contributions")

    useEffect(() => {
        [2021, 2022, 2023, 2024].forEach(year => {
            getContributionsByYear(
                "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",
                "andrei-g-git",
                year
            )
                .then(yearlyContributions => {
                    //console.log("contributions:   ", yearlyContributions)   
                    placeholderContributions.push(yearlyContributions.data.user.contributionsCollection.contributionCalendar);
                })            
        })

        setContributions(placeholderContributions)
    },
        []
    )

    return (
        <div>
            {
                contributions.map((contrib: any) => {

                    test(contrib)
                    return <p>{contrib.totalContributions}</p>
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
