import { Tooltip } from 'antd'
import { openWindow } from '@/utils'
import SvgIcon from '@/components/SvgIcon'

export default function GithubLink() {
  function openGithub() {
    openWindow('https://github.com/51bitquant/')
  }

  return (
    <Tooltip title='github' placement='bottom' mouseEnterDelay={0.5}>
      <span className='icon-btn' onClick={openGithub}>
        <SvgIcon name='github' size={20} />
      </span>
    </Tooltip>
  )
}
