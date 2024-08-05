import type { FC } from 'react'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography
const BlankPage: FC = () => {
  return (
    <div className='flex-center' style={{ width: '100%', height: '500px', fontSize: '32px' }}>
      <div>
        <Title level={1}>This is a demo</Title>
        <Paragraph>
          This is a demo showcasing how to use <strong>React</strong>,{' '}
          <strong>Ant Design, Redux, ahooks and etc.</strong> to develop an admin system.
        </Paragraph>
      </div>
    </div>
  )
}

export default BlankPage
