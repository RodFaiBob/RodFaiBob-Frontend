'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { StationType } from '../../modules/home/types';

type LineType = {
  colorCode: string;
  lineNameThai: string;
  lineNameEng: string;
};

type LineProps = LineType & {
  onClick: () => void;
  showDropdown?: boolean;
};

const Line = ({ colorCode, lineNameThai, lineNameEng, onClick, showDropdown = false }: LineProps) => {
  return (
    <div className="flex items-center justify-between p-2 pl-3 pr-3 w-75 h-17 hover:bg-[#F1F0FF] cursor-pointer" onClick={onClick}>
      <div className='flex items-center'>
        <div className="w-[6px] h-14 rounded-[5px]" style={{ backgroundColor: colorCode }}></div>
        <div className="flex flex-col ml-2">
          <span className="font-thai font-semibold text-[16px] ">{lineNameThai}</span>
          <span className="font-medium text-[14px]">{lineNameEng}</span>
        </div>
      </div>
      <Image
        src={showDropdown ? "../assets/home/dropdown-up.svg" : "../assets/home/dropdown.svg"}
        alt="dropdown"
        width={16}
        height={16}
      />
    </div>
  );
}

const LineList = ({ onSelectLine }: { onSelectLine: (line: LineType) => void }) => {
  const lines = [
    { colorCode: "#8CB63C", lineNameThai: "สายสุขุมวิท (สายสีเขียว)", lineNameEng: "Sukhumvit Line (Green Line)" },
    { colorCode: "#42807D", lineNameThai: "สายสีลม (สายสีเขียว)", lineNameEng: "Silom Line (Green Line)" },
    { colorCode: "#A38B2B", lineNameThai: "สายสีทอง", lineNameEng: "Gold Line" },
    { colorCode: "#CA6184", lineNameThai: "สายสีชมพู", lineNameEng: "MRT Pink Line" },
    { colorCode: "#F5D411", lineNameThai: "สายสีเหลือง", lineNameEng: "MRT Yellow Line" },
    { colorCode: "#2C347D", lineNameThai: "สายสีน้ำเงิน", lineNameEng: "MRT Blue Line" },
    { colorCode: "#7C3683", lineNameThai: "สายสีม่วง", lineNameEng: "MRT Purple Line" },
    { colorCode: "#641D35", lineNameThai: "แอร์พอร์ต เรล ลิงก์", lineNameEng: "ARL Airport Rail Link" },
    { colorCode: "#991A17", lineNameThai: "สายสีแดง", lineNameEng: "Red LineCommuter Train" },
  ];
  return (
    <div className="flex flex-col items-center overflow-y-scroll h-60 w-80 border-2 border-[#708C82] rounded-[15px] bg-[#F8F7FF]">
      {lines.map((line, index) => (
        <Line
          key={index}
          colorCode={line.colorCode}
          lineNameThai={line.lineNameThai}
          lineNameEng={line.lineNameEng}
          onClick={() => onSelectLine(line)}
        />
      ))}
    </div>
  )
}

type StationProps = StationType & {
  onClick: () => void;
}

const StationPoint = ({
  stnName,
  stnCode,
  colorCode,
  onClick,
}: StationProps) => {
  return (
    <div className="flex items-center p-2 pl-3 pr-3 w-75 h-14 gap-2 hover:bg-[#F1F0FF] cursor-pointer" onClick={onClick}>
      <div
        className={`flex justify-center items-center w-10 h-10 border-4 rounded-full m-1`}
        style={{ borderColor: colorCode }}
      >
        <div className="font-semibold text-[12px] tracking-normal">{stnCode}</div>
      </div>
      <div className="font-thai font-semibold text-[16px]">{stnName}</div>
    </div>
  );
};

const StationList = ({ line, onSelectLine, setSelectedStation,setIsOpen}
  : { line: LineType; 
    onSelectLine: () => void; 
    setSelectedStation: (station: StationType) => void;
    setIsOpen: (isOpen: boolean) => void;
   }) => {
  const mock_stations = [
    { stnName: "คูคต", stnCode: "N24", colorCode: "#8CB63C" },
    { stnName: "แยก คปอ.", stnCode: "N23", colorCode: "#8CB63C" },
    { stnName: "พิพิธภัณฑ์กองทัพอากาศ", stnCode: "N22", colorCode: "#8CB63C" },
    { stnName: "โรงพยาบาลภูมิพลดุลยเดช", stnCode: "N21", colorCode: "#8CB63C" },
  ];

  return (
    <div className="flex flex-col items-center h-60 w-80 border-2 border-[#708C82] rounded-[15px] bg-[#F8F7FF]">
      <Line
        colorCode={line.colorCode}
        lineNameThai={line.lineNameThai}
        lineNameEng={line.lineNameEng}
        onClick={onSelectLine}
        showDropdown={true}></Line>
      <div className="w-70 h-[2px] bg-[#CDCDCD]"></div>
      <div className='flex flex-col items-center overflow-y-scroll h-fit w-full '>
        {mock_stations.map((station, index) => (
          <StationPoint
            key={index}
            stnName={station.stnName}
            stnCode={station.stnCode}
            colorCode={station.colorCode}
            onClick={() => {setSelectedStation(station);setIsOpen(false);}}
          />
        ))}
      </div>
    </div>
  )
}

const Dropdown = ({
  title,
  selectedStation, 
  setSelectedStation
}: { 
  title: string
  selectedStation: StationType | null;
  setSelectedStation: (station: StationType | null) => void;
 }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLine, setSelectedLine] = useState<LineType | null>(null);
  // const [selectedStation, setSelectedStation] = useState<StationType | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if(selectedStation == null)
        {
          setSelectedLine(null)
        }
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectedStation])

  return (
    <div
      className="relative inline-block text-left w-full font-bold text-sm"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-80 h-12 p-2.5 pl-4 pr-5  border-2 border-[#708C82] rounded-[15px] bg-[#F8F7FF] hover:cursor-pointer"
      >
        {selectedStation ? (
          <div className="flex items-center w-75 gap-2">
            <div
              className={`flex justify-center items-center w-8 h-8 border-4 rounded-full m-1`}
              style={{ borderColor: selectedStation.colorCode }}
            >
              <div className="font-bold text-[10px] tracking-normal">{selectedStation.stnCode}</div>
            </div>
            <div className="font-thai font-semibold text-[18px] pt-0.5">{selectedStation.stnName}</div>
          </div>
        ) : (
          <span className='font-extrabold text-base text-[#CDCDCD]'>
            {title}
          </span>
        )}
        {isOpen ? (
          <Image
            src="../assets/home/dropdown-up.svg"
            alt="dropdown up"
            width={16}
            height={16}
          />
        ) : (
          <Image
            src="../assets/home/dropdown.svg"
            alt="dropdown"
            width={16}
            height={16}
          />
        )}
      </button>

      {isOpen && (
        <div className='absolute mt-1'>
          {selectedLine ? (
            <StationList line={selectedLine} onSelectLine={() => setSelectedLine(null)} setSelectedStation={setSelectedStation} setIsOpen={setIsOpen} />
          ) : (
            <LineList onSelectLine={(line: LineType) => setSelectedLine(line)} />
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown;
