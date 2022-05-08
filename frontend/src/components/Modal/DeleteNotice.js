import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteNotice = (props) => {
  const notices = props.notices;
  const i = props.i;

  const noticeDeleteHandler = (e) => {
    console.log("notice id ", notices[e].id);
    let body = {
      noticeId: notices[e].id,
    };
    if (window.confirm("정말 삭제하시겠습니까?") == true) {
      axios
        .post("http://localhost:8080/api/notice/delete", JSON.stringify(body), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => console.log(res));
      alert("삭제되었습니다.");
    } else {
      return false;
    }
  };
  return (
    <>
      <span
        onClick={() => {
          noticeDeleteHandler(i);
        }}
      >
        <i
          className="fa fa-trash"
          style={{
            padding: "5px",
            paddingTop: "14px",
            zIndex: "0",
          }}
        ></i>
      </span>
    </>
  );
};
export default DeleteNotice;
