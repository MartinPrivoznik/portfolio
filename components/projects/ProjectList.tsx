"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@nextui-org/button";
import { RealProjects } from "./RealProjects";
import { UselessProjects } from "./UselessProjects";
import { Reveal } from "../animations/Reveal";

export const ProjectList = (props: {
  uselessProjects: boolean;
  setUselessProjects: Dispatch<SetStateAction<boolean>>;
  lang: string;
}) => {
  return (
    <div className="container flex flex-col justify-center items-center w-full mt-5 mb-5">
      <Reveal>
        <Button
          type="submit"
          className="mt-3"
          color="primary"
          onClick={() => props.setUselessProjects(!props.uselessProjects)}
        >
          Toggle {props.uselessProjects ? "useful" : "useless"} projects
        </Button>
      </Reveal>
      {props.uselessProjects ? (
        <UselessProjects lang={props.lang} />
      ) : (
        <RealProjects />
      )}
    </div>
  );
};
