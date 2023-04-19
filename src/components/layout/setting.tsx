import React, { FC } from "react"
import type { SettingDrawerProps } from '@ant-design/pro-components'
import { SettingDrawer } from '@ant-design/pro-components'

{/* <SettingDrawerProps></SettingDrawerProps> */}

const Setting: FC<SettingDrawerProps> = <T extends unknown>(props, context) => {
  const {setSetting} = props
  // console.log('props', props)
  // console.log('context', context)

  return (
    <SettingDrawer
      pathname={props.pathname}
      enableDarkTheme
      getContainer={() => document.getElementById('test-pro-layout')}
      settings={props.settings}
      onSettingChange={(changeSetting) => {
        setSetting(changeSetting);
      }}
      disableUrlParams={false}
    />
  )
}

export default Setting