/* 'use client';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import classNames from 'classnames';
import './SelectReact.css';

export interface IOption {
  value: string;
  label: string;
}

interface SelectReactProps {
  options?: IOption[];
}

const animatedComponents = makeAnimated();

const SelectReact: React.FC<SelectReactProps> = ({ options = [] }) => {
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);

  const handleSelectChange = (selectedValues: any) => {
    setSelectedOptions(selectedValues as IOption[]);
    console.log(selectedValues);
  };

  return (
    <Select
      defaultValue={ [options[2]] }
      isMulti
      name="countries"
      options={ options }
      components={ animatedComponents }
      className={ classNames('basic-multi-select', 'select') }
      classNamePrefix="select"
      onChange={ handleSelectChange }
    />
  )
};

export default SelectReact; */

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import classNames from "classnames";
import "./SelectReact.css";

export interface IOption {
  value: string;
  label: string;
}

interface SelectReactProps {
  options?: IOption[];
}

const Select = dynamic(() => import("react-select"), { ssr: false });

const SelectReact: React.FC<SelectReactProps> = ({ options = [] }) => {
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);

  useEffect(() => {
    // Запустить эффект только на клиентской стороне
    setSelectedOptions([options[2]]);
  }, [options]);

  const handleSelectChange = (selectedValues: any) => {
    setSelectedOptions(selectedValues as IOption[]);
    console.log(selectedValues);
  };

  console.log(options);

  return (
    <Select
      defaultValue={selectedOptions}
      isMulti
      name="countries"
      options={options}
      className={classNames("basic-multi-select", "select")}
      classNamePrefix="select"
      onChange={handleSelectChange}
    />
  );
};

export default SelectReact;
