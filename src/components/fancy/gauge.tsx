import { GaugeProps } from "@/types";
import "./gauge.scss";

function Gauge({index, proficiency}: GaugeProps) {

    return (
        <div className="gauge-container"
            id={`gauge-container-${index}`}
        >
            <div className="gauge-max-range" 
                data-testid="gauge-max-range"
            />
            <div className={`gauge-value scale-horizontal-percent-${proficiency}`}
                data-testid="gauge-value"
            />

            <div className={`gauge-nudge-container translate-horizontal-percent-${proficiency}`}
                data-testid = "gauge-nudge"
                id={`gauge-nudge-${index}`}
            >
                <div className="actual-nudge" />
            </div>

        </div>
    );
}

export default Gauge;