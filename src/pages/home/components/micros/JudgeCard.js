import React from 'react'
import './JudgeCard.css'


function JudgeCard({ color, textColor }) {
    return (
        <div className="JudgeCard" >
            <div className="Image" style={{ background: color, color: textColor }}>
                <div>
                    To be Announced
                </div>
            </div>
            <div className="Info">
                <div className=" text-sm " >
                    Coming Soon.....
                </div>
            </div>

        </div>
    )
}

export default JudgeCard