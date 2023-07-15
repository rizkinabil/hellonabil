import React from 'react';
import MessageElement from 'Elements/MessageElement';

export default function Footer() {
  return (
    <>
      <MessageElement isShowedButton />
      <div className="container footer">
        <span>Copyright 2022 • All rights reserved • Rizkinabil</span>
      </div>
    </>
  );
}
