"use client";
import { useParams } from "next/navigation";
const UseParams = ({ hi }) => {
  let Params = useParams();

  return <div>{Params.Params}</div>;
};

export default UseParams;
