import { Icon } from "../Icon";
import React from "react";

interface ContactsProps {
  city: string;
  phone?: string;
}

export const Contracts: React.FC<ContactsProps> = ({ city, phone }) => {
  function formatPhone(phoneNumber: string) {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
    return phoneNumber;
  }
  return (
    <div className="flex justify-between lg:block lg:text-sm">
      <div className="flex items-center">
        <span>{city}</span>
        <button>
          <Icon name="arrow-down" className="w-[16px] h-[16px] text-sky-500" />
        </button>
      </div>
      {!!phone && (
        <div className="hover:text-sky-500">
          <a href={"tel:" + phone}>
            <span className="hidden lg:block">{formatPhone(phone)}</span>
            <div className="block lg:hidden">
              <Icon name="phone" />
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
