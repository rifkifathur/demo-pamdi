import { Avatar, Button, Collapse, ConfigProvider, Divider, Flex, Rate, Space, theme, Dropdown } from 'antd';
import type { MenuProps, TableColumnsType, TableProps, CollapseProps  } from 'antd';
import { BsArrowLeft, BsCaretDownFill, BsExclamation, BsExclamationCircle, BsStar, BsTag, BsThreeDotsVertical, BsTrash } from 'react-icons/bs';

type ShowType = {
  setShow: (isCollapsed: boolean) => void;
};

const Show = ({
  setShow
}: ShowType) => {
  const {
    token: { colorBgContainer, colorBgElevated, borderRadiusLG, boxShadowSecondary },
  } = theme.useToken();
  const itemsCollapse: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Flex>
          <Avatar className="mx-3" size={40}>USER</Avatar>
          <Flex className="w-full mr-8" justify="space-between">
            <Flex vertical>
              <span className="font-bold">Emma Smith</span>
              <Flex align="center">
                <span>to me</span>                
              </Flex>
            </Flex>
            <Flex align="center">
              <span className="mx-2" >05 May 2024, 6:43 am</span>
              <Rate className="mx-2" count={1} />
              <span className="cursor-pointer"><BsThreeDotsVertical /></span>
            </Flex>
          </Flex>
        </Flex>
      ),
      children: (
        <>
          <Flex className="py-5 ml-14 mr-8 bg-slate-400" justify="center">
              <div>
                  <p>Hi Bob,</p>
                  <p>
                      With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of
                      any article is the title.Without a compelleing title, your reader won't even get to the first
                      sentence.After the title, however, the first few sentences of your article are certainly
                      the most important part.
                  </p>
                  <p>
                      Jornalists call this critical, introductory section the "Lede," and when bridge properly executed,
                      it's the that carries your reader from an headine try at attention-grabbing to the body of your
                      blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
                  </p>
                  <p>
                      Best regards,
                  </p>
                  <p className="mb-0">
                      Jason Muller
                  </p>
              </div>
          </Flex>
        </>
      ),
      showArrow: false,
      extra: (
        <>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => (
              <div 
                style={{
                  backgroundColor: colorBgElevated,
                  borderRadius: borderRadiusLG,
                  boxShadow: boxShadowSecondary,
                  padding: 20,
                }}
              >
                <table className="table">
                  <tbody>
                      <tr>
                          <td className="py-3 w-[95px] text-muted">From</td>
                          <td>Emma Bold</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Date</td>
                          <td>20 Dec 2024, 6:05 pm</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Subject</td>
                          <td>Trip Reminder. Thank you for flying with us!</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Reply-to</td>
                          <td>emma@intenso.com</td>
                      </tr>
                  </tbody>
              </table>
              </div>
            )}
          >                                  
            <span 
              className="cursor-pointer absolute left-32 bottom-2" 
              onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
              }}
            >
              <BsCaretDownFill />
            </span>                                  
          </Dropdown>
        </>
      )
    },
    {
      key: '2',
      label: (
        <Flex>
          <Avatar className="mx-3" size={40}>USER</Avatar>
          <Flex className="w-full mr-8" justify="space-between">
            <Flex vertical>
              <span className="font-bold">Emma Smith</span>
              <Flex align="center">
                <span>to me</span>
              </Flex>
            </Flex>
            <Flex align="center">
              <span className="mx-2" >05 May 2024, 6:43 am</span>
              <Rate className="mx-2" count={1} />
              <span className="cursor-pointer"><BsThreeDotsVertical /></span>
            </Flex>
          </Flex>
        </Flex>
      ),
      children: (
        <>
          <Flex className="py-5 ml-14 mr-8 bg-slate-400" justify="center">
              <div>
                  <p>Hi Bob,</p>
                  <p>
                      With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of
                      any article is the title.Without a compelleing title, your reader won't even get to the first
                      sentence.After the title, however, the first few sentences of your article are certainly
                      the most important part.
                  </p>
                  <p>
                      Jornalists call this critical, introductory section the "Lede," and when bridge properly executed,
                      it's the that carries your reader from an headine try at attention-grabbing to the body of your
                      blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
                  </p>
                  <p>
                      Best regards,
                  </p>
                  <p className="mb-0">
                      Jason Muller
                  </p>
              </div>
          </Flex>
        </>
      ),
      showArrow: false,
      extra: (
        <>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => (
              <div 
                style={{
                  backgroundColor: colorBgElevated,
                  borderRadius: borderRadiusLG,
                  boxShadow: boxShadowSecondary,
                  padding: 20,
                }}
              >
                <table className="table">
                  <tbody>
                      <tr>
                          <td className="py-3 w-[95px] text-muted">From</td>
                          <td>Emma Bold</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Date</td>
                          <td>20 Dec 2024, 6:05 pm</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Subject</td>
                          <td>Trip Reminder. Thank you for flying with us!</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Reply-to</td>
                          <td>emma@intenso.com</td>
                      </tr>
                  </tbody>
              </table>
              </div>
            )}
          >                                  
            <span 
              className="cursor-pointer absolute left-32 bottom-2" 
              onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
              }}
            >
              <BsCaretDownFill />
            </span>                                  
          </Dropdown>
        </>
      )
    },
  ];
    const handleShow = () => {
      setShow(false);
    };
    return (
        <div>
          <Space size={0}> 
            <Button className="ml-1 mr-3" type="text" icon={<BsArrowLeft />} onClick={handleShow}/>
            <Button type="text" icon={<BsStar />} />
            <Button type="text" icon={<BsTag />} />
            <Button type="text" icon={<BsExclamationCircle />} />
            <Button type="text" icon={<BsTrash />} />
          </Space>
          <Divider className="my-2"/>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  headerBg: colorBgContainer,
                },
              },
            }}
          >
            <Collapse items={itemsCollapse} bordered={false} defaultActiveKey={['2']} />
          </ConfigProvider>                                         
        </div>
    );
};

export default Show;
