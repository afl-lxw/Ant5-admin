import {
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
  ProForm
} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import { Button, Input, Dropdown, Popover, theme } from 'antd';
import React, { useState, FC } from 'react';
import defaultProps from './_defaultProps';
import Setting from './setting';



const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

interface LayoutProps {
  children?: React.ReactNode;
}


const Layout: FC<LayoutProps> = <T,>(props) => {
  const { children } = props;
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: false,
    siderMenuType: 'sub',
  });
  const [pathname, setPathname] = useState('/discover');
  const [num, setNum] = useState(40);
  React.useEffect(() => {
    
  })
  const onPageChange = (location)=>{
    console.log(location, 'location')
  }

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          location={{
            pathname,
          }}
          onPageChange={onPageChange}
          menu={{
            collapsedShowGroupTitle: true,
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: 'AFL',
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: '退出登录',
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              );
            },
          }}
          actionsRender={(props) => {
            if (props.isMobile) return [];
            return [
              props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                <SearchInput />
              ) : undefined,
              <GithubFilled key="GithubFilled" />,
            ];
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                <div>AF Admin Pro</div>
                <div>by AF</div>
              </div>
            );
          }}
          onMenuHeaderClick={(e) => console.log('onMenuHeaderClick',e)}
          menuItemRender={(item, dom) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onClick={() => {
                console.log('item===',item)
                setPathname(item.path || '/main');
              }}
            >
              {dom}
            </div>
          )}
          subMenuItemRender={(_, dom) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onClick={() => {
                console.log('_===', _)
                setPathname(_.path || '/main');

              }}
            >
              {dom}
            </div>
          )}
          {...settings}
        ><PageContainer
          token={{
            paddingInlinePageContainerContent: 40,
          }}
          extra={[
          ]}
          subTitle=""
          footer={[]}
        >
          {children}
          </PageContainer>

          <Setting
            pathname={pathname}
            settings={settings}
            {...{ setSetting }}
          />

        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};


export default Layout