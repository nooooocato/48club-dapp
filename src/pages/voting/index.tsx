import React from 'react'
import CardSection from './CardSection'
import FilterSection from './FilterSection'
import HeaderSection from './HeaderSection'

export default function Voting() {
    return (
        <div className="px-4">
            <HeaderSection />
            <FilterSection />
            <CardSection />
        </div>
    )
}
