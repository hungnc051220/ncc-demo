import Image from "next/image";
import twitterIcon from "@/images/tt.svg";
import lineIcon from "@/images/line.svg";
import facebookIcon from "@/images/fb.svg";
import instagramIcon from "@/images/ist.svg";
import youtubeIcon from "@/images/ytb.svg";
import googlePlay from "@/images/googleplay.png";
import appStore from "@/images/appstore.png";
import certification from "@/images/certification.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B0D13] text-white">
      <div className="mx-auto p-8">
        <ul className="flex items-center justify-center gap-10 mb-10 text-sm">
          <li>
            <a href="#">Chính sách</a>
          </li>
          <li>
            <a href="#">Lịch chiếu</a>
          </li>
          <li>
            <a href="#">Tin tức</a>
          </li>
          <li>
            <a href="#">Giá vé</a>
          </li>
          <li>
            <a href="#">Hỏi đáp</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>

        <div className="mb-6 flex items-center justify-center gap-10">
          <div className="flex items-center gap-6">
            <Link href="#"><Image src={twitterIcon} alt="twitter" width={20} height={20} /></Link>
            <Link href="#"><Image src={lineIcon} alt="line" width={20} height={20} /></Link>
            <Link href="#"><Image src={facebookIcon} alt="facebook" width={20} height={20} /></Link>
            <Link href="#"><Image src={instagramIcon} alt="instagram" width={20} height={20} /></Link>
            <Link href="#"><Image src={youtubeIcon} alt="youtube" width={20} height={20} /></Link>
          </div>
          <div className="flex gap-5 items-center">
          <Link href="#"><Image src={googlePlay} alt="googlePlay" width={140} height={38} /></Link>
          <Link href="#"><Image src={appStore} alt="appStore" width={130} height={38} /></Link>
          <Link href="#"><Image src={certification} alt="certification" width={130} height={38} /></Link>
          </div>
        </div>

        <div className="text-center space-y-2 text-xs mb-6">
          <p>Cơ quan chủ quản: BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH</p>
          <p>Bản quyền thuộc Trung tâm Chiếu phim Quốc gia.</p>
          <p>
            Giấy phép số: 224/GP- TTĐT ngày 31/8/2010 - Chịu trách nhiệm: Vũ Đức
            Tùng – Quyền Giám đốc.
          </p>
          <p>
            Địa chỉ: 87 Láng Hạ, Quận Ba Đình, Tp. Hà Nội - Điện thoại:
            024.35141791
          </p>
        </div>

        <div className="text-center text-sm">
          Copyright 2023. NCC All Rights Reservered.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
