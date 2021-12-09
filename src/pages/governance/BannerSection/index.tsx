import React from 'react'
import { Col, Row } from 'antd'
import './index.less'

export default function BannerSection() {
  return (
    <div className='banner-section'>
      <div className='container'>
        <Row>
          <Col xs={24} md={24}>
            <div className='section-content'>
              <div className='section-title'>
                BNB48 Club®
                <br />
                {'app_header_menu_governance_title'}
              </div>
              <div className='section-subtitle'>
                {'governance_page_banner_section_title_1'}
                <br />
                <p>
                  {'governance_page_banner_section_title_2'}
                  <br />
                  <br />
                  {'governance_page_banner_section_title_3'}
                  <br />
                  <br />
                  {'governance_page_banner_section_title_3_item_1'}
                  <br />
                  {'governance_page_banner_section_title_3_item_2'}
                  <br />
                  {'governance_page_banner_section_title_3_item_3'}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
