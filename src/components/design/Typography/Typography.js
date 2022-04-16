import React from "react";
import cx from "classnames";

import styles from "./Typography.module.scss";

function isHeaderType(type) {
  return /^h/.test(type);
}

export default function Typography({
  tag,
  variant = "body1",
  className,
  children,
  ...props
}) {
  const Tag = tag || (isHeaderType(variant) ? variant : "span");

  return (
    <Tag {...props} className={cx(className, styles[variant])}>
      {children}
    </Tag>
  );
}
