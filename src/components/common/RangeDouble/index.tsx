import { getTrackBackground, Range } from "react-range";
import React from "react";

interface RangeDoubleProps {
  MIN?: number;
  MAX?: number;
  STEP?: number;
  currentValues: [number, number];
  rtl?: boolean;
  onChange: (_value: [number, number]) => void;
  onFinalChange: (_value: { min: number; max: number }) => void;
}

export const RangeDouble: React.FC<RangeDoubleProps> = ({
  MIN = 0,
  MAX = 100,
  STEP = 1,
  currentValues = [0, 100],
  rtl = false,
  onChange,
  onFinalChange
}) => {
  const values = currentValues;
  return (
    <div>
      <Range
        values={currentValues}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={currentValue => onChange([currentValue[0], currentValue[1]])}
        onFinalChange={() => onFinalChange({ min: values[0], max: values[1] })}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "2px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#0EA5E9", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              borderRadius: "100%",
              backgroundColor: "#0EA5E9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              outline: "none"
            }}
          ></div>
        )}
      />
    </div>
  );
};
