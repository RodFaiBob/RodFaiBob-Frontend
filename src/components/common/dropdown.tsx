'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Props = {
  options: { label: string; value: string }[];
  handleOnSelect: (option: string) => void;
};

const Dropdown = ({
  options,
  handleOnSelect,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectOption = (option: { label: string; value: string }) => {
    setSelectedValue(option.value)
    setSelectedLabel(option.label)
    handleOnSelect(option.value)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className="relative inline-block text-left w-full font-bold text-sm"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full p-2 border border-custom-light-gray rounded-md 
          ${isOpen ? 'border-b-0' : 'border-b'}`}

      >
        <span className="flex-1 pr-4 truncate text-left">
          {selectedLabel || 'Select'}
        </span>
        {isOpen ? (
          <Image
            src="/assets/icons/dropdown-up.svg"
            alt="dropdown up"
            width={10}
            height={10}
          />
        ) : (
          <Image
            src="/assets/icons/dropdown.svg"
            alt="dropdown"
            width={10}
            height={10}
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full bg-custom-main-white border border-t-0 border-custom-light-gray rounded-md shadow-lg">
          <ul className={'py-1'}>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => selectOption(option)}
                className="p-2 text-gray-700 hover:bg-[#FCF4E5] hover:text-gray-900 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
