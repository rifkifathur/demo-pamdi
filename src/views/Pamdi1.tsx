import { Alert, Button, Card, Checkbox, Divider, Flex, Form, Image, Input, Radio, Upload } from 'antd';
import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaUpload } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import pamdi from '../assets/pamdi.jpg';
import type { RadioChangeEvent } from 'antd';

const Pamdi1 = () => {
  const [loading, setLoading] = useState(false);
  const [inputOther, setInputOther] = useState(false);
  const [profesiValue, setProfesiValue] = useState("0");
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      if (values.username !== "" && values.email !== "" && values.password !== "") {
        navigate("/");
        sessionStorage.setItem("auth", values.email);
      } else {
        setLoading(false);
      }
    }, 1500);
  };
  const onChangeProfesi = (e: RadioChangeEvent) => {        
    setProfesiValue(e.target.value);    
    setInputOther(true);
    if (e.target.value !== '6') {     
      setInputOther(false); 
    }
  };
  return (
    <>
      <Flex justify="center" align="center" vertical className="bg-slate-100">
        <Card className="sm:w-[480px] w-full">
          <div className="text-center">
          <Image
            preview={false}
            width={200}
            src={pamdi}
          />
            <h1 className="mb-8">Formulir Anggota PAMDI</h1>            
          </div>
          <Form
            layout='vertical'
            name="register"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              label="Nama Lengkap"
              name="full_name"
              rules={[{ required: true, message: 'Masukan Nama Lengkap!' }]}
            >
              <Input placeholder="Nama Lengkap" />
            </Form.Item>
            <Form.Item
              label="Nama Ibu Kandung"
              name="mother_name"
              rules={[{ required: true, message: 'Masukan Nama Ibu Kandung!' }]}
            >
              <Input placeholder="Nama Ibu Kandung" />
            </Form.Item>
            <Form.Item
              label="Jenis Kelamin"
              name="gender"
              rules={[{ required: true, message: 'Masukan Jenis Kelamin!' }]}
            >
              <Radio.Group>
                <Radio value="M"> Laki - Laki </Radio>
                <Radio value="F"> Perempuan </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Agama"
              name="religion"
              rules={[{ required: true, message: 'Masukan Agama!' }]}
            >
              <Input placeholder="Agama" />
            </Form.Item>
            <Form.Item
              label="Profesi"
              name="profesi"
              rules={[{ required: true, message: 'Masukan Profesi!' }]}
            >
              <Radio.Group onChange={onChangeProfesi} value={profesiValue}>
                <Radio value="1">Penyanyi</Radio><br />
                <Radio value="2">Pemusik</Radio><br />
                <Radio value="3">Pencipta</Radio><br />
                <Radio value="4">Penata Musik</Radio><br />
                <Radio value="5">Simpatisan</Radio><br />
                <Radio value="6">Yang lain</Radio><br />
              </Radio.Group>
              {
                inputOther && <Input placeholder="Yang lain" />
              }
            </Form.Item>
            <Form.Item
              label="Nomor Induk Kependudukan"
              name="nik"
              rules={[{ required: true, message: 'Masukan Nomor Induk Kependudukan!' }]}
            >
              <Input placeholder="Nomor Induk Kependudukan" />
            </Form.Item>
            <Form.Item
              label="Nomor Handphone/Whatsapp"
              name="phone"
              rules={[{ required: true, message: 'Masukan Nomor Handphone/Whatsapp!' }]}
            >
              <Input placeholder="Nomor Handphone/Whatsapp" />
            </Form.Item>
            <Form.Item
              label="Media Sosial"
              name="religion"
              rules={[{ required: true, message: 'Masukan Media Sosial!' }]}
            >
              <Input placeholder="Media Sosial" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="religion"
              rules={[{ required: true, message: 'Masukan Email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Alamat"
              name="religion"
              rules={[{ required: true, message: 'Masukan Alamat!' }]}
            >
              <Input.TextArea placeholder="Alamat" />
            </Form.Item>
            <Form.Item
              label="Kabupaten/Kota"
              name="religion"
              rules={[{ required: true, message: 'Masukan Kabupaten/Kota!' }]}
            >
              <Input placeholder="Kabupaten/Kota" />
            </Form.Item>
            <Form.Item
              label="Provinsi"
              name="religion"
              rules={[{ required: true, message: 'Masukan Provinsi!' }]}
            >
              <Input placeholder="Provinsi" />
            </Form.Item>
            <Form.Item
              label="Foto KTP"
              name="religion"
              rules={[{ required: true, message: 'Masukan Foto KTP!' }]}
            >
              <Upload>
                <Button icon={<FaUpload />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Checkbox>
                Dengan ini saya menyatakan bahwa data-data yang saya berikan adalah benar adanya dan saya bersedia mengikuti segala aturan atau ketentuan yang berlaku dalam proses penerbitan Kartu Tanda Anggota (KTA) PAMDI.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full" loading={loading}>
                Daftar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default Pamdi1;