import { Alert, Button, Card, Checkbox, Divider, Flex, Form, Image, Input, Radio, Upload } from 'antd';
import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaUpload } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import bannerLomba from '../assets/banner-lomba.png';
import type { RadioChangeEvent } from 'antd';

const Pamdi2 = () => {
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
            width={"auto"}
            src={bannerLomba}
          />
            <h1 className="mb-8">Formulir Pendaftaran Lomba Cipta Lagu Dangdut PAMDI 6 Tingkat Nasional – Tema Percintaan</h1>      
          </div>
          <hr />
          <div>
            <p className="font-bold">Periode Acara : Desember 2024 – April 2025 </p>  
            <p>Sekretariat DPP PAMDI : Graha Krama Yudha, Jl. Buncit Raya No.43 Lantai 3 Unit B, RT.2/RW.2, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760 </p>
            <p>Informasi WhatsApp Admin : 081 ___________</p>
            <p className="font-bold">Di Sponsori Oleh :</p>
            <p className="font-bold">Di Dukung Oleh : Kemenparekraf RI - Indosiar - RAI - ARDI</p>
          </div>
          <div className='informasi-umum-wrapper'>
            <h2 className="bg-sky-600 text-white px-4">Informasi Umum</h2>
            <div className='a-point-wrapper'>
              <h4>A. Biaya Pendaftaran LCLD</h4>
              <ul>
                <li>Lagu ke-1 : Rp. 200.000,- (mendapatkan 1 pcs T-shirt LCLD – tidak termasuk ongkos kirim).</li>
                <li>Lagu ke-2 : Rp. 200.000,0 (dengan Tema yang sama)</li>
                <li>Lagu ke-2 : Rp. 100.000,- (beda Tema)</li>
                <li>Lagu ke-3 : Rp. 100.000,- (beda Tema)</li>
                <li>Lagu ke-4 : Rp. 100.000,- (beda Tema)</li>
              </ul>
              <h4>Penting</h4>
              <ul>
                <li>Biaya pendaftaran di transfer ke rekening : Bank BNI 46 No. Rek 02 – 5217 – 0316  atas nama PAMMI</li>
                <li>Bukti transfer di foto dan diberikan keterang Nama – Judul Lagu – Tema (contoh : Nanang Suwito – Abu  Abu Cinta – Tema Percintaan) lalu foto bukti transfer tersebut dikirimkan ke nomor WhatsApp Bendahara LCLD 081 __________</li>
                <li>Pembayaran dianggap sah apabila sudah terkonfirmasi masuk ke rekening, setelah benar terkonfirmasi    akan dikirimkan kwitansi elektronik ke nomor WhatsApp peserta.</li>
              </ul>
            </div>
            <div className='b-point-wrapper'>
              <h4>B. Tema Lagu LCLD</h4>
              <ol >
                <li>Percintaan</li>
                <li>Sosial / Budaya / Politik.</li>
                <li>Keagamaan.</li>
                <li>Kebangsaan.</li>
              </ol>
              <h4>Catatan : Formulir pendaftaran harus sesuai dengan Google Form Tema Lagu yang dipilih.</h4>
            </div>
            <div className='c-point-wrapper'>
              <h4>C. Kriteria Penilaian LCLD</h4>
              <ol >
                <li>Komersil</li>
                <li>Kesesuaian tema dan lirik</li>
                <li>Notasi</li>
                <li>Notasi</li>
              </ol>
            </div>
            <div className='d-point-wrapper'>
              <h4>D. Hadiah</h4>
              <h4>MEMPEREBUTKAN HADIAH UANG TUNAI TOTAL SEBESAR RP. 360.000.000,-</h4>
            </div>
            <div className='e-point-wrapper'>
              <h4>E. Syarat dan ketentuan peserta LCLD</h4>
              <ol >
                <li>Wajib mendaftar dan mengisi formulir pada Google Form sesuai dengan tema lagu yang dipilih.</li>
                <li>Wajib membayar biaya pendaftaran sesuai dengan Poin A.</li>
                <li>Wajib mengirimkan foto diri dan KTP.</li>
                <li>Wajib mengirimkan rekaman lagu dalam bentuk audio format MP3 128kbps/High Quality Audio (selain format MP3 akan didiskualifikasi).</li>
                <li>Materi lagu di iringi dengan minimal 1 (satu) atau lebih alat musik.</li>
                <li>Lirik lagu menggunakan Bahasa Indonesia, apabila ada kandungan bahasa lainnya tidak boleh lebih          dari 25% (dua pulu lima persen).</li>
                <li>Materi lagu adalah hasil karya cipta sendiri dan original.</li>
                <li>Materi lagu yang didaftarkan belum pernah dipublikasikan baik dengan jaringan kabel dan atau tanpa kabel.</li>
                <li>Toleransi nada plagiasi atau saduran maksimal 4 (empat) Bar.</li>
                <li>
                  Wajib follow / mengikuti akun sosial media PAMDI :
                  <ol type="i">
                    <li>Instagram : @dpppammi</li>
                    <li>Facebook : DPP PAMDI</li>
                    <li>Youtube : PAMDI Official</li>
                    <li>Tik-Tok : @pamdi_dangdut</li>
                  </ol>
                </li>
                <li>Peserta akan mendapatkan Kartu Tanda Anggota PAMDI (bagi yang belum memiliki).</li>
                <li>Pendaftaran paling lambat tanggal _____________ 2025</li>
                <li>Pengumuman pemenang tanggal ______________ 2025</li>
                <li>Pemenang akan mendapatkan hadiah berupa uang tunai, sertifikat dan piala.</li>
                <li>Pajak hadiah ditanggung pemenang.</li>
                <li>Seluruh peserta mendapatkan tanda ucapan terima kasih atas partisipasinya dalam bentuk Sertifikat Elektronik yang dikirimkann ke nomor WhatsApp                   peserta.
                (18) Lagu – lagu yang dinyatakan sebagai pemenang akan di produksi / direkam dan dipublikasikan melalui platform media digital.</li>
                <li>Keputusan dewan juri tidak dapat diganggu gugat.</li>
                <li>PAMDI memiliki hak sepenuhnya untuk mengelola hak mekanikal atas lagu – lagu yang dinyatakan sebagai pemenang.</li>
                <li>Lagu – lagu peserta yang tidak menjadi pemenang tetap menjadi hak peserta.</li>
                <li>Peserta yang melanggar syarat dan ketentuan akan didiskualifikasi.</li>
                <li>Peserta diperkenankan untuk menjadi Juri Relawan dalam Penjurian Mandiri (Self Assessment System).</li>
                <li>Apabila dikemudian hari lagu pemenang lomba diketahui dan ternyata hasil plagiasi dan atau pernah dipublikasikan, maka dinyatakan gugur dan pemenang WAJIB mengembalikan hadiah yang telah diterima.</li>
              </ol>
            </div>
            <div className='f-point-wrapper'>
              <h4>F. Dengan ini Saya menyatakan bahwa lagu yang Saya daftarkakan pada LCLD PAMDI 6 Tingkat Nasional 2024 ini, adalah karya cipta Saya sendiri dan belum pernah dipublikasikan di media manapun.</h4>
              <Radio.Group>
                <Radio value="1">Ya</Radio>
                <Radio value="0">Tidak</Radio>
              </Radio.Group>
            </div>
            <div className='g-point-wrapper'>
              <h4>G. Tahapan Penjurian LCLD</h4>
              <div>
                <h5>(1) Penjurian Mandiri</h5>
                <ul>
                  <li>Dilakukan oleh Peserta yang bersedia menjadi Juri Sukarelawan (Self Assessment System) dan bersedia melakukan penilaian lagu peserta yang terdaftar sesuai tema dengan waktu yang ditentukan oleh panitia.</li>
                </ul>
              </div>
              <div>
                <h5>(2) Penjurian Utama</h5>
                <p>Dilakukan oleh Dewan Juri, sbb;</p>
                <ul>
                  <li>Penyanyi Senior</li>
                  <li>Penyanyi Junior</li>
                  <li>Pencipta Senior</li>
                  <li>Arranger / Penata Musik</li>
                  <li>Asosiasi Musik Director Indonesia</li>
                  <li>Perwakilan PAMDI</li>
                  <li>Indosiar</li>
                </ul>
              </div>
              <div>
                <h5>(3) Penjurian Kehormatan</h5>
                <ul>
                  <li>Rhoma Irama </li>
                  <li>SONETA</li>
                </ul>
              </div>
            </div>
            <div className='h-point-wrapper'>
              <h4>H. Apakah Anda bersedia menjadi Juri Sukarelawan dalam Penjurian Mandiri (Self Assessment System)</h4>
              <Radio.Group>
                <Radio value="1">Ya</Radio>
                <Radio value="0">Tidak</Radio>
              </Radio.Group>
            </div>
          </div>
          <h2 className="bg-sky-600 text-white px-4">Formulir Lomba</h2>
          <Form
            layout='vertical'
            name="register"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              label="Nama"
              name="name"
              rules={[{ required: true, message: 'Masukan Nama!' }]}
            >
              <Input placeholder="Nama" />
            </Form.Item>
            <Form.Item
              label="Alamat"
              name="religion"
              rules={[{ required: true, message: 'Masukan Alamat!' }]}
            >
              <Input.TextArea placeholder="Alamat" />
            </Form.Item>
            <Form.Item
              label="Nomor Whatsapp"
              name="religion"
              rules={[{ required: true, message: 'Masukan Nomor Whatsapp!' }]}
            >
              <Input placeholder="Nomor Whatsapp" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="religion"
              rules={[{ required: true, message: 'Masukan Email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Ukuran T-Shirt / Kaos"
              name="profesi"
              rules={[{ required: true, message: 'Masukan Ukuran T-Shirt / Kaos!' }]}
            >
              <Radio.Group>
                <Radio value="1">S</Radio><br />
                <Radio value="2">M</Radio><br />
                <Radio value="3">L</Radio><br />
                <Radio value="4">XL</Radio><br />
                <Radio value="5">XXL</Radio><br />
                <Radio value="6">Yang lain</Radio><br />
              </Radio.Group>
              {
                inputOther && <Input placeholder="Yang lain" />
              }
            </Form.Item>
            <Form.Item
              label="Upload Foto Diri"
              name="religion"
              rules={[{ required: true, message: 'Masukan Upload Foto Diri!' }]}
            >
              <Upload>
                <Button icon={<FaUpload />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Upload Lagu Format MP3"
              name="religion"
              rules={[{ required: true, message: 'Masukan Upload Lagu Format MP3!' }]}
            >
              <Upload>
                <Button icon={<FaUpload />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Lirik lagu"
              name="religion"
              rules={[{ required: true, message: 'Masukan Lirik lagu!' }]}
            >
              <Input.TextArea placeholder="Lirik lagu" />
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

export default Pamdi2;