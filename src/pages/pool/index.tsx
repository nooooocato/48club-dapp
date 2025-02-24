import React, { useState } from 'react'
import HeaderSection from './HeaderSection'
import { FilterSection } from './FilterSection'
import { PoolCardSection } from './CardSection'
import { CreatePoolModal, StakeOrClaimModal } from './Modal'
import { useCreatePoolShow, useStakeShow } from '../../store'

export default function Pool() {
  const { isShow, hide } = useCreatePoolShow()
  const [stakeShow, setStakeShow] = useStakeShow()

  return (
    <div className="px-4 max-w-6xl mx-auto">
      <HeaderSection />
      <FilterSection />
      <PoolCardSection />

      <CreatePoolModal visible={isShow} onCancel={() => hide()} />
      <StakeOrClaimModal visible={stakeShow} onCancel={() => setStakeShow(false)} />
    </div>
  )
}
