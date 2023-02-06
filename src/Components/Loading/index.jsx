import React, {useEffect, useRef} from "react";
import LoadingBar from "react-top-loading-bar";
import {useLoad} from "../../context";

export default function Load() {
  const {load, setLoad} = useLoad();

  const ref = useRef(null);

  useEffect(() => {
    if (load === true) {
      ref.current.continuousStart();
    }
    if (load === false) {
      ref.current.complete();
    }
  }, [load]);

  return (
    <>
      <LoadingBar color="#ffd300" ref={ref} shadow={true} height={5} />
    </>
  );
}
