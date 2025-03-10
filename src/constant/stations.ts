interface LineStations {
  sukhumvit: Line[];
  silom: Line[];
  gold: Line[];
  pink: Line[];
  yellow: Line[];
  blue: Line[];
  purple: Line[];
  airlink: Line[];
  red: Line[];
}

interface Line {
  stnName: string;
  stnCode: string;
  colorCode: string;
}

const stations: LineStations = {
  "yellow": [
    {
      "stnName": "ลาดพร้าว",
      "stnCode": "YL01",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ภาวนา",
      "stnCode": "YL02",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "โชคชัย 4",
      "stnCode": "YL03",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ลาดพร้าว 71",
      "stnCode": "YL04",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ลาดพร้าว 83",
      "stnCode": "YL05",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "มหาดไทย",
      "stnCode": "YL06",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ลาดพร้าว 101",
      "stnCode": "YL07",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "บางกะปิ",
      "stnCode": "YL08",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "แยกลำสาลี",
      "stnCode": "YL09",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีกรีฑา",
      "stnCode": "YL10",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "หัวหมาก",
      "stnCode": "YL11",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "กลันตัน",
      "stnCode": "YL12",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีนุช",
      "stnCode": "YL13",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีนครินทร์ 38",
      "stnCode": "YL14",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "สวนหลวง ร.9",
      "stnCode": "YL15",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีอุดม",
      "stnCode": "YL16",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีเอี่ยม",
      "stnCode": "YL17",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีลาซาล",
      "stnCode": "YL18",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีแบริ่ง",
      "stnCode": "YL19",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีด่าน",
      "stnCode": "YL20",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ศรีเทพา",
      "stnCode": "YL21",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "ทิพวัล",
      "stnCode": "YL22",
      "colorCode": "#F5D411"
    },
    {
      "stnName": "สำโรง",
      "stnCode": "YL23",
      "colorCode": "#F5D411"
    }
  ],
  "silom": [
    {
      "stnName": "สนามกีฬาแห่งชาติ",
      "stnCode": "S1",
      "colorCode": "#42807D"
    },
    {
      "stnName": "สยาม",
      "stnCode": "S2",
      "colorCode": "#42807D"
    },
    {
      "stnName": "ราชดำริ",
      "stnCode": "S3",
      "colorCode": "#42807D"
    },
    {
      "stnName": "ศาลาแดง",
      "stnCode": "S4",
      "colorCode": "#42807D"
    },
    {
      "stnName": "ช่องนนทรี",
      "stnCode": "S5",
      "colorCode": "#42807D"
    },
    {
      "stnName": "เซนต์หลุยส์",
      "stnCode": "S6",
      "colorCode": "#42807D"
    },
    {
      "stnName": "สุรศักดิ์",
      "stnCode": "S7",
      "colorCode": "#42807D"
    },
    {
      "stnName": "สะพานตากสิน",
      "stnCode": "S8",
      "colorCode": "#42807D"
    },
    {
      "stnName": "กรุงธนบุรี",
      "stnCode": "S9",
      "colorCode": "#42807D"
    },
    {
      "stnName": "วงเวียนโหญ่",
      "stnCode": "S10",
      "colorCode": "#42807D"
    },
    {
      "stnName": "โพธิ์นิมิตร",
      "stnCode": "S11",
      "colorCode": "#42807D"
    },
    {
      "stnName": "ตลาดพลู",
      "stnCode": "S12",
      "colorCode": "#42807D"
    },
    {
      "stnName": "วุฒากาศ",
      "stnCode": "S13",
      "colorCode": "#42807D"
    },
    {
      "stnName": "บางหว้า",
      "stnCode": "S14",
      "colorCode": "#42807D"
    }
  ],
  "sukhumvit": [
    {
      "stnName": "คูคต",
      "stnCode": "N24",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "แยก คปอ.",
      "stnCode": "N23",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "พิพิธภัณฑ์กองทัพอากาศ",
      "stnCode": "N22",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "โรงพยาบาลภูมิพลอดุลยเดช",
      "stnCode": "N21",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สะพานใหม่",
      "stnCode": "N20",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สายหยุด",
      "stnCode": "N19",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "พหลโยธิน59",
      "stnCode": "N18",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "วัดพระศรีมหาธาตุ",
      "stnCode": "N17",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "กรมทหารราบที่11",
      "stnCode": "N16",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "บางบัว",
      "stnCode": "N15",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "กรมป่าไม้",
      "stnCode": "N14",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "มหาวิทยาลัยเกษตรศาสตร์",
      "stnCode": "N13",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "เสนานิคม",
      "stnCode": "N12",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "รัชโยธิน",
      "stnCode": "N11",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "พหลโยธิน24",
      "stnCode": "N10",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ห้าแยกลาดพร้าว",
      "stnCode": "N09",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "หมอชิต",
      "stnCode": "N08",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สะพานควาย",
      "stnCode": "N07",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "อารีย์",
      "stnCode": "N05",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สนามเป้า",
      "stnCode": "N04",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "อนุสาวรีย์ชัยสมรภูมิ",
      "stnCode": "N03",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "พญาไท",
      "stnCode": "N02",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ราชเทวี",
      "stnCode": "N01",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สยาม",
      "stnCode": "CEN",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ชิดลม",
      "stnCode": "E01",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "เพลินจิต",
      "stnCode": "E02",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "นานา",
      "stnCode": "E03",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "อโศก",
      "stnCode": "E04",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "พร้อมพงษ์",
      "stnCode": "E05",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ทองหล่อ",
      "stnCode": "E06",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "เอกมัย",
      "stnCode": "E07",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "พระโขนง",
      "stnCode": "E08",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "อ่อนนุช",
      "stnCode": "E09",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "บางจาก",
      "stnCode": "E10",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ปุณณวิถี",
      "stnCode": "E11",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "อุดมสุข",
      "stnCode": "E12",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "บางนา",
      "stnCode": "E13",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "แบริ่ง",
      "stnCode": "E14",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สำโรง",
      "stnCode": "E15",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ปู่เจ้า",
      "stnCode": "E16",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ช้างเอราวัณ",
      "stnCode": "E17",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "โรงเรียนนายเรือ",
      "stnCode": "E18",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ปากน้ำ",
      "stnCode": "E19",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "ศรีนครินทร์",
      "stnCode": "E20",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "แพรกษา",
      "stnCode": "E21",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "สายลวด",
      "stnCode": "E22",
      "colorCode": "#8CB63C"
    },
    {
      "stnName": "เคหะฯ",
      "stnCode": "E23",
      "colorCode": "#8CB63C"
    }
  ],
  "blue": [
    {
      "stnName": "ท่าพระ",
      "stnCode": "BL01",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "จรัญฯ 13",
      "stnCode": "BL02",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ไฟฉาย",
      "stnCode": "BL03",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางขุนนนท์",
      "stnCode": "BL04",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางยี่ขัน",
      "stnCode": "BL05",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สิรินธร",
      "stnCode": "BL06",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางพลัด",
      "stnCode": "BL07",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางอ้อ",
      "stnCode": "BL08",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางโพ",
      "stnCode": "BL09",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "เตาปูน",
      "stnCode": "BL10",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางซื่อ",
      "stnCode": "BL11",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "กำแพงเพชร",
      "stnCode": "BL12",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สวนจตุจักร",
      "stnCode": "BL13",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "พหลโยธิน",
      "stnCode": "BL14",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ลาดพร้าว",
      "stnCode": "BL15",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "รัชดาภิเษก",
      "stnCode": "BL16",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สุทธิสาร",
      "stnCode": "BL17",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ห้วยขวาง",
      "stnCode": "BL18",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ศูนย์วัฒนธรรมแห่งประเทศไทย",
      "stnCode": "BL19",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "พระราม 9",
      "stnCode": "BL20",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "เพชรบุรี",
      "stnCode": "BL21",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สุขุมวิท",
      "stnCode": "BL22",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ศูนย์การประชุมแห่งชาติสิริกิติ์",
      "stnCode": "BL23",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "คลองเตย",
      "stnCode": "BL24",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ลุมพินี",
      "stnCode": "BL25",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สีลม",
      "stnCode": "BL26",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สามย่าน",
      "stnCode": "BL27",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "หัวลำโพง",
      "stnCode": "BL28",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "วัดมังกร",
      "stnCode": "BL29",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สามยอด",
      "stnCode": "BL30",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "สนามไชย",
      "stnCode": "BL31",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "อิสรภาพ",
      "stnCode": "BL32",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางไผ่",
      "stnCode": "BL33",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางหว้า",
      "stnCode": "BL34",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "เพชรเกษม 48",
      "stnCode": "BL35",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "ภาษีเจริญ",
      "stnCode": "BL36",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "บางแค",
      "stnCode": "BL37",
      "colorCode": "#2C347D"
    },
    {
      "stnName": "หลักสอง",
      "stnCode": "BL38",
      "colorCode": "#2C347D"
    }
  ],
  "red": [
    {
      "stnName": "รังสิต",
      "stnCode": "R01",
      "colorCode": "#991A17"
    },
    {
      "stnName": "หลักหก",
      "stnCode": "R02",
      "colorCode": "#991A17"
    },
    {
      "stnName": "ดอนเมือง",
      "stnCode": "R03",
      "colorCode": "#991A17"
    },
    {
      "stnName": "การเคหะ",
      "stnCode": "R04",
      "colorCode": "#991A17"
    },
    {
      "stnName": "หลักสี่",
      "stnCode": "R05",
      "colorCode": "#991A17"
    },
    {
      "stnName": "ทุ่งสองห้อง",
      "stnCode": "R06",
      "colorCode": "#991A17"
    },
    {
      "stnName": "บางเขน",
      "stnCode": "R07",
      "colorCode": "#991A17"
    },
    {
      "stnName": "วัดเสมียนนารี",
      "stnCode": "R08",
      "colorCode": "#991A17"
    },
    {
      "stnName": "จัตุจักร",
      "stnCode": "R09",
      "colorCode": "#991A17"
    },
    {
      "stnName": "สถานีกลางบางซื่อ",
      "stnCode": "R10",
      "colorCode": "#991A17"
    },
    {
      "stnName": "บางซ่อน",
      "stnCode": "R11",
      "colorCode": "#991A17"
    },
    {
      "stnName": "บางบำหรุ",
      "stnCode": "R12",
      "colorCode": "#991A17"
    },
    {
      "stnName": "ตลิ่งชัน",
      "stnCode": "R13",
      "colorCode": "#991A17"
    }
  ],
  "airlink": [
    {
      "stnName": "พญาไท",
      "stnCode": "AP01",
      "colorCode": "#641D35"
    },
    {
      "stnName": "ราชปรารภ",
      "stnCode": "AP02",
      "colorCode": "#641D35"
    },
    {
      "stnName": "มักกะสัน",
      "stnCode": "AP03",
      "colorCode": "#641D35"
    },
    {
      "stnName": "รามคำแหง",
      "stnCode": "AP04",
      "colorCode": "#641D35"
    },
    {
      "stnName": "หัวหมาก",
      "stnCode": "AP05",
      "colorCode": "#641D35"
    },
    {
      "stnName": "บ้านทับช้าง",
      "stnCode": "AP06",
      "colorCode": "#641D35"
    },
    {
      "stnName": "ลาดกระบัง",
      "stnCode": "AP07",
      "colorCode": "#641D35"
    },
    {
      "stnName": "สุวรรณภูมิ",
      "stnCode": "AP08",
      "colorCode": "#641D35"
    }
  ],
  "purple": [
    {
      "stnName": "คลองบางไผ่",
      "stnCode": "PP01",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "ตลาดบางใหญ่",
      "stnCode": "PP02",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "สามแยกบางใหญ่",
      "stnCode": "PP03",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "บางพลู",
      "stnCode": "PP04",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "บางรักใหญ่",
      "stnCode": "PP05",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "บางรักน้อยท่าอิฐ",
      "stnCode": "PP06",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "ไทรม้า",
      "stnCode": "PP07",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "สะพานพระนั่งเกล้า",
      "stnCode": "PP08",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "แยกนนทบุรี",
      "stnCode": "PP09",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "บางกระสอ",
      "stnCode": "PP10",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "ศูนย์ราชการนนทบุรี",
      "stnCode": "PP11",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "กระทรวงสาธารณสุข",
      "stnCode": "PP12",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "แยกติวานนท์",
      "stnCode": "PP13",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "วงศ์สว่าง",
      "stnCode": "PP14",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "บางซ่อน",
      "stnCode": "PP15",
      "colorCode": "#7C3683"
    },
    {
      "stnName": "เตาปูน",
      "stnCode": "PP16",
      "colorCode": "#7C3683"
    }
  ],
  "pink": [
    {
      "stnName": "สถานีศูนย์ราชการนนทบุรี",
      "stnCode": "PK01",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีแคราย",
      "stnCode": "PK02",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีสนามบินน้ำ",
      "stnCode": "PK03",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีสามัคคี",
      "stnCode": "PK04",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีกรมชลประทาน",
      "stnCode": "PK05",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีแยกปากเกร็ด",
      "stnCode": "PK06",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีเลี่ยงเมืองปากเกร็ด",
      "stnCode": "PK07",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีแจ้งวัฒนะ–ปากเกร็ด 28",
      "stnCode": "PK08",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีศรีรัช",
      "stnCode": "PK09",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีเมืองทองธานี",
      "stnCode": "PK10",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีแจ้งวัฒนะ 14",
      "stnCode": "PK11",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีศูนย์ราชการเฉลิมพระเกียรติ",
      "stnCode": "PK12",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีโทรคมนาคมแห่งชาติ",
      "stnCode": "PK13",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีหลักสี่",
      "stnCode": "PK14",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีราชภัฏพระนคร",
      "stnCode": "PK15",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีวัดพระศรีมหาธาตุ",
      "stnCode": "PK16",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีรามอินทรา",
      "stnCode": "PK17",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีลาดปลาเค้า",
      "stnCode": "PK18",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีรามอินทรา กม.",
      "stnCode": "PK19",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีมัยลาภ",
      "stnCode": "PK20",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีวัชรพล",
      "stnCode": "PK21",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีรามอินทรา กม.",
      "stnCode": "PK22",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีคู้บอน",
      "stnCode": "PK23",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีรามอินทรา กม.",
      "stnCode": "PK24",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีวงแหวนรามอินทรา",
      "stnCode": "PK25",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีนพรัตน์",
      "stnCode": "PK26",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีบางชัน",
      "stnCode": "PK27",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีเศรษฐบุตรบำเพ็ญ",
      "stnCode": "PK28",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีตลาดมีนบุรี",
      "stnCode": "PK29",
      "colorCode": "#CA6184"
    },
    {
      "stnName": "สถานีมีนบุรี",
      "stnCode": "PK30",
      "colorCode": "#CA6184"
    }
  ],
  "gold": [
    {
      "stnName": "กรุงธนบุรี",
      "stnCode": "G01",
      "colorCode": "#A38B2B"
    },
    {
      "stnName": "เจริญนคร",
      "stnCode": "G02",
      "colorCode": "#A38B2B"
    },
    {
      "stnName": "คลองสาน",
      "stnCode": "G03",
      "colorCode": "#A38B2B"
    }
  ]
};

export default stations;
