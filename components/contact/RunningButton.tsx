"use client";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import React, { useEffect, useState } from "react";
import { AnyObjectSchema } from "yup";

interface IRunningButtonProps {
  loading: boolean;
  validationSchema: AnyObjectSchema;
  formData: any;
  text: string;
}

export const RunningButton = ({
  loading,
  validationSchema,
  formData,
  text,
}: IRunningButtonProps) => {
  const [ranLeft, setRanLeft] = useState(false);

  useEffect(() => {
    setRanLeft(false);
  }, [formData]);

  const handleMouseEnter = () => {
    try {
      validationSchema.validateSync(formData);
    } catch (error) {
      setRanLeft(!ranLeft);
    }
  };

  return (
    <>
      <Button
        type="submit"
        className={`mt-3 md:mt-0 !transition-all ${
          ranLeft ? "mr-0 md:mr-[50%]" : "mr-0"
        }`}
        color="primary"
        disabled={loading}
        onMouseEnter={handleMouseEnter}
      >
        {text}
        {loading && <Spinner color="default" size="sm" />}
      </Button>
    </>
  );
};

export default RunningButton;
