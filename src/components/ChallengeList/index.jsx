import React, { useId } from 'react'
import ChallengeCard from "./ChallengeCard"

const ChallengeList = ({ challenges, category }) => {
    return (
        <div className='section-category__container'>
        {challenges.map((challenge) => (
            <ChallengeCard challenge={challenge} category={category} key={`${challenge.name}-${challenge.id}`} />
        ))}
        </div>
    )
}

export default ChallengeList;