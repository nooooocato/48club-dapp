import React from 'react'
import { Col, Row } from 'antd'
import CaseListCard from './CaseListCard'
import './index.less'

const REVIEW_ITEMS = [{
  id: 1,
  title: 'governance_page_case_section_title_1',
  content: 'governance_page_case_section_content_1',
  image_url: 'https://bnb48club-prod.oss-accelerate.aliyuncs.com/illustration-governance-graphic-1.png',
}, {
  id: 2,
  title: 'governance_page_case_section_title_2',
  content: 'governance_page_case_section_content_2',
  image_url: 'https://bnb48club-prod.oss-accelerate.aliyuncs.com/illustration-governance-graphic-2.png',
}, {
  id: 2,
  title: 'governance_page_case_section_title_3',
  content: 'governance_page_case_section_content_3',
  image_url: 'https://bnb48club-prod.oss-accelerate.aliyuncs.com/illustration-governance-graphic-3.png',
}]

export default function CaseSection() {
  return (
    <div className='case-section'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-content'>
            <Row gutter={24} align='top'>
              {
                REVIEW_ITEMS.map(item => (
                  <Col xs={24} md={8} key={`case-list-card-${item.id}`}>
                    <CaseListCard
                      item={{
                        ...item,
                        title: item.title,
                        content: item.content,
                      }}
                    />
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}
