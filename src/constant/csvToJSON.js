const fs = require('fs');

const csvData = `YL01,ลาดพร้าว
YL02,ภาวนา
YL03,โชคชัย 4
YL04,ลาดพร้าว 71
YL05,ลาดพร้าว 83
YL06,มหาดไทย
YL07,ลาดพร้าว 101
YL08,บางกะปิ
YL09,แยกลำสาลี
YL10,ศรีกรีฑา
YL11,หัวหมาก
YL12,กลันตัน
YL13,ศรีนุช
YL14,ศรีนครินทร์ 38
YL15,สวนหลวง ร.9
YL16,ศรีอุดม
YL17,ศรีเอี่ยม
YL18,ศรีลาซาล
YL19,ศรีแบริ่ง
YL20,ศรีด่าน
YL21,ศรีเทพา
YL22,ทิพวัล
YL23,สำโรง
S1,สนามกีฬาแห่งชาติ
S2,สยาม
S3,ราชดำริ
S4,ศาลาแดง
S5,ช่องนนทรี
S6,เซนต์หลุยส์
S7,สุรศักดิ์
S8,สะพานตากสิน
S9,กรุงธนบุรี
S10,วงเวียนโหญ่
S11,โพธิ์นิมิตร
S12,ตลาดพลู
S13,วุฒากาศ
S14,บางหว้า
N24,คูคต
N23,แยก คปอ.
N22,พิพิธภัณฑ์กองทัพอากาศ
N21,โรงพยาบาลภูมิพลอดุลยเดช
N20,สะพานใหม่
N19,สายหยุด
N18,พหลโยธิน59
N17,วัดพระศรีมหาธาตุ
N16,กรมทหารราบที่11
N15,บางบัว
N14,กรมป่าไม้
N13,มหาวิทยาลัยเกษตรศาสตร์
N12,เสนานิคม
N11,รัชโยธิน
N10,พหลโยธิน24
N09,ห้าแยกลาดพร้าว
N08,หมอชิต
N07,สะพานควาย
N05,อารีย์
N04,สนามเป้า
N03,อนุสาวรีย์ชัยสมรภูมิ
N02,พญาไท
N01,ราชเทวี
CEN,สยาม
E01,ชิดลม
E02,เพลินจิต
E03,นานา
E04,อโศก
E05,พร้อมพงษ์
E06,ทองหล่อ
E07,เอกมัย
E08,พระโขนง
E09,อ่อนนุช
E10,บางจาก
E11,ปุณณวิถี
E12,อุดมสุข
E13,บางนา
E14,แบริ่ง
E15,สำโรง
E16,ปู่เจ้า
E17,ช้างเอราวัณ
E18,โรงเรียนนายเรือ
E19,ปากน้ำ
E20,ศรีนครินทร์
E21,แพรกษา
E22,สายลวด
E23,เคหะฯ
BL01,ท่าพระ
BL02,จรัญฯ 13
BL03,ไฟฉาย
BL04,บางขุนนนท์
BL05,บางยี่ขัน
BL06,สิรินธร
BL07,บางพลัด
BL08,บางอ้อ
BL09,บางโพ
BL10,เตาปูน
BL11,บางซื่อ
BL12,กำแพงเพชร
BL13,สวนจตุจักร
BL14,พหลโยธิน
BL15,ลาดพร้าว
BL16,รัชดาภิเษก
BL17,สุทธิสาร
BL18,ห้วยขวาง
BL19,ศูนย์วัฒนธรรมแห่งประเทศไทย
BL20,พระราม 9
BL21,เพชรบุรี
BL22,สุขุมวิท
BL23,ศูนย์การประชุมแห่งชาติสิริกิติ์
BL24,คลองเตย
BL25,ลุมพินี
BL26,สีลม
BL27,สามย่าน
BL28,หัวลำโพง
BL29,วัดมังกร
BL30,สามยอด
BL31,สนามไชย
BL32,อิสรภาพ
BL33,บางไผ่
BL34,บางหว้า
BL35,เพชรเกษม 48
BL36,ภาษีเจริญ
BL37,บางแค
BL38,หลักสอง
R01,รังสิต
R02,หลักหก
R03,ดอนเมือง
R04,การเคหะ
R05,หลักสี่
R06,ทุ่งสองห้อง
R07,บางเขน
R08,วัดเสมียนนารี
R09,จัตุจักร
R10,สถานีกลางบางซื่อ
R11,บางซ่อน
R12,บางบำหรุ
R13,ตลิ่งชัน
AP01,พญาไท
AP02,ราชปรารภ
AP03,มักกะสัน
AP04,รามคำแหง
AP05,หัวหมาก
AP06,บ้านทับช้าง
AP07,ลาดกระบัง
AP08,สุวรรณภูมิ
PP01,คลองบางไผ่ 
PP02,ตลาดบางใหญ่ 
PP03,สามแยกบางใหญ่ 
PP04,บางพลู 
PP05,บางรักใหญ่
PP06,บางรักน้อยท่าอิฐ
PP07,ไทรม้า
PP08,สะพานพระนั่งเกล้า
PP09,แยกนนทบุรี
PP10,บางกระสอ
PP11,ศูนย์ราชการนนทบุรี 
PP12,กระทรวงสาธารณสุข
PP13,แยกติวานนท์
PP14,วงศ์สว่าง
PP15,บางซ่อน
PP16,เตาปูน
PK01,สถานีศูนย์ราชการนนทบุรี
PK02,สถานีแคราย
PK03,สถานีสนามบินน้ำ
PK04,สถานีสามัคคี
PK05,สถานีกรมชลประทาน
PK06,สถานีแยกปากเกร็ด
PK07,สถานีเลี่ยงเมืองปากเกร็ด
PK08,สถานีแจ้งวัฒนะ–ปากเกร็ด 28
PK09,สถานีศรีรัช
PK10,สถานีเมืองทองธานี
PK11,สถานีแจ้งวัฒนะ 14
PK12,สถานีศูนย์ราชการเฉลิมพระเกียรติ
PK13,สถานีโทรคมนาคมแห่งชาติ
PK14,สถานีหลักสี่
PK15,สถานีราชภัฏพระนคร
PK16,สถานีวัดพระศรีมหาธาตุ
PK17,สถานีรามอินทรา
PK18,สถานีลาดปลาเค้า
PK19,สถานีรามอินทรา กม.
PK20,สถานีมัยลาภ
PK21,สถานีวัชรพล
PK22,สถานีรามอินทรา กม.
PK23,สถานีคู้บอน
PK24,สถานีรามอินทรา กม.
PK25,สถานีวงแหวนรามอินทรา
PK26,สถานีนพรัตน์
PK27,สถานีบางชัน
PK28,สถานีเศรษฐบุตรบำเพ็ญ
PK29,สถานีตลาดมีนบุรี
PK30,สถานีมีนบุรี
G01,กรุงธนบุรี
G02,เจริญนคร
G03,คลองสาน`; // Add the full data here

const lineMap = {
  S: 'silom',
  N: 'sukhumvit',
  G: 'gold',
  YL: 'yellow',
  BL: 'blue',
  PK: 'pink',
  AP: 'airlink',
  R: 'red',
  E: 'sukhumvit',
  PP: 'purple',
  CEN: 'sukhumvit',
};

const colorCode = {
  silom: "#42807D",
  gold: "#A38B2B",
  pink: "#CA6184",
  yellow: "#F5D411",
  blue: "#2C347D",
  purple: "#7C3683",
  airlink: "#641D35",
  red: "#991A17",
  sukhumvit: "#8CB63C",
};

const csvToJSON = (csvString) => {
  const lines = csvString.trim().split("\n");
  const result = {};

  lines.forEach((line) => {
    if (!line.trim()) return;

    const [stnCode, stnName] = line.split(",");
    const linePrefixMatch = stnCode.match(/[A-Z]+/);
    const linePrefix = linePrefixMatch ? linePrefixMatch[0] : stnCode;
    const lineName = lineMap[linePrefix];

    if (!lineName) return;

    if (!result[lineName]) {
      result[lineName] = [];
    }

    result[lineName].push({
      stnName: stnName.trim(),
      stnCode: stnCode.trim(),
      colorCode: colorCode[lineName],
    });
  });

  return result;
};

const jsonResult = csvToJSON(csvData);

const tsContent = `interface LineStations {
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

const stations: LineStations = ${JSON.stringify(jsonResult, null, 2)}

export default stations;
;
`;

fs.writeFileSync('stations.ts', tsContent);

console.log('JSON data successfully saved to stations.ts');