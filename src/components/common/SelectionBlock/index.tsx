import React from "react";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

interface SelectionBlockProps {
  title?: string;
  options: Array<{
    name: string;
    value: string;
  }>;
}

interface CheckboxProps extends SelectionBlockProps {
  selectedItems: Array<string>;
  onChange: (value: Array<string>) => void;
  type: "checkbox";
}

interface RadioProps extends SelectionBlockProps {
  selectedItems: string;
  onChange: (value: string) => void;
  type: "radio";
}

type Props = CheckboxProps | RadioProps;

const SelectionBlock: React.FC<Props> = ({
  title,
  options,
  selectedItems = [],
  onChange,
  type
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      type === "checkbox"
        ? onChange([...selectedItems, value])
        : onChange(value);
    } else {
      if (type === "checkbox")
        onChange(
          (selectedItems as Array<string>).filter(item => item !== value)
        );
    }
  };
  const name = Math.random().toString(36).substr(2, 9);
  return (
    <div>
      <h4 className="font-medium text-lg">{title}</h4>
      <div className="flex flex-col mt-3 gap-2">
        {options.map(option => {
          if (type === "checkbox") {
            return (
              <Checkbox
                key={option.value}
                label={option.name}
                value={option.value}
                checked={selectedItems.includes(option.value)}
                onChange={handleInputChange}
              />
            );
          }
          return (
            <Radio
              key={option.value}
              name={name}
              label={option.name}
              value={option.value}
              checked={selectedItems === option.value}
              onChange={handleInputChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SelectionBlock);
