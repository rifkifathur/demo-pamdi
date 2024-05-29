import { Button, Card, Input, Space, Upload } from 'antd';
import React from 'react'
import { BsPaperclip, BsX } from 'react-icons/bs';

type ComposeType = {
    setAddCompose: (addCompose: boolean) => void;
};
const Compose = ({
    setAddCompose,
}: ComposeType) => {    

    const handleCloseCompose = () => {
        setAddCompose(false);
    };
    return (
        <Card
          className="w-full md:w-[650px] h-[100vh] md:h-auto fixed top-0 md:top-auto bottom-0 right-0 md:right-16 drop-shadow-lg z-[103]" 
          title="New Message" 
          extra={<Button type="text" icon={<BsX className="font-bold text-2xl" onClick={handleCloseCompose}/>}/>}                   
          bordered={false}
        >
          <div className={`border-solid border-0 border-b-2 border-gray-200 py-3`}>
            <Input 
              className="w-full -mx-3 -my-2"
              addonBefore="To:" 
              variant="borderless"
            />
          </div>
          <div className={`border-solid border-0 border-b-2 border-gray-200 py-3`}>                    
            <Input 
              className="w-full -mx-3 -my-2"
              placeholder="Subject"                    
              variant="borderless"
            />
          </div>
          <Input.TextArea 
            className="w-full -mx-3"
            placeholder="Type Messages" 
            rows={16}
            variant="borderless"
            style={{
              resize: 'none'
            }}
          />
          <Space size={8}>
            <Button type="primary" >Send</Button>
            <Upload >
              <Button type="text" icon={<BsPaperclip className="font-bold text-xl" />} />
            </Upload>
          </Space>
        </Card>
    );
};

export default Compose;
